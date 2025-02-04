/* eslint-disable no-alert */
import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Paper,
  useTheme,
} from '@mui/material'
import { addDays } from 'date-fns'
import { Formik } from 'formik'
import React from 'react'
import Banner from '../common/Banner'
import FormikTextField from '../common/FormikTextField'
import FormikDatePicker from '../common/FormikDatePicker'
import LanguageSelect from '../common/LanguageSelect'
import apiClient from '../../util/apiClient'
import FormikSelect from '../common/FormikSelect'
import useAuthorizedUser from '../../hooks/useAuthorizedUser'
import queryClient from '../../util/queryClient'

const getHexColor = (theme, hue, lightness) => {
  const h = theme.palette[hue]
  if (!h) return theme.palette.common.white
  const hex = h[lightness]
  if (!hex) return theme.palette.common.white
  return hex
}

const formValuesToBannerData = (theme, values) => ({
  ...values,
  data: {
    text: { fi: values.textFi, sv: values.textSv, en: values.textEn },
    color: getHexColor(theme, values.hue, values.lightness),
  },
})

const BannerPreview = ({ values }) => {
  const [l, setL] = React.useState('fi')
  const theme = useTheme()

  return (
    <Box position="absolute" top={0} left={0} zIndex={theme.zIndex.modal + 1}>
      <Banner
        banner={formValuesToBannerData(theme, values)}
        language={l}
        canClose={false}
      />
      <Box
        m={1}
        display="flex"
        flexDirection="column"
        rowGap={1}
        alignItems="start"
      >
        <Alert severity="info">Preview</Alert>
        <Paper elevation={0}>
          <LanguageSelect value={l} onChange={(v) => setL(v)} />
        </Paper>
      </Box>
    </Box>
  )
}

const hueOptions = [
  {
    value: 'white',
    label: 'white',
  },
  {
    value: 'primary',
    label: 'primary',
  },
  {
    value: 'secondary',
    label: 'secondary',
  },
  {
    value: 'success',
    label: 'success',
  },
  {
    value: 'info',
    label: 'info',
  },
  {
    value: 'warning',
    label: 'warning',
  },
  {
    value: 'error',
    label: 'error',
  },
]

const lightnessOptions = [
  {
    value: 'light',
    label: 'light',
  },
  {
    value: 'main',
    label: 'main',
  },
  {
    value: 'dark',
    label: 'dark',
  },
]

const accessGroupOptions = [
  {
    value: 'STUDENT',
    label: 'STUDENT',
  },
  {
    value: 'TEACHER',
    label: 'TEACHER',
  },
  {
    value: 'ORG',
    label: 'ORG',
  },
  {
    value: 'ADMIN',
    label: 'ADMIN',
  },
]

const BannerForm = ({ onSubmit }) => {
  const [open, setOpen] = React.useState(false)

  return (
    <div>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Create new banner
      </Button>
      <Formik
        onSubmit={async (values) => {
          await onSubmit(values)
          setOpen(false)
        }}
        initialValues={{
          textFi: '',
          textSv: '',
          textEn: '',
          hue: 'primary',
          lightness: 'light',
          accessGroup: 'TEACHER',
          startDate: new Date(),
          endDate: addDays(new Date(), 7),
        }}
      >
        {({ values, handleSubmit }) => (
          <>
            <Dialog
              open={open}
              onClose={() => setOpen(false)}
              sx={{ maxHeight: '75vh', top: '20vh' }}
            >
              <DialogTitle>Create new banner</DialogTitle>
              <DialogContent>
                <Box my={2}>
                  <FormikTextField
                    name="textFi"
                    label="Markdown content (FI)"
                    multiline
                    fullWidth
                  />
                </Box>
                <FormikTextField
                  name="textSv"
                  label="Markdown content (SV)"
                  multiline
                  fullWidth
                />
                <Box m={2} />
                <FormikTextField
                  name="textEn"
                  label="Markdown content (EN)"
                  multiline
                  fullWidth
                />
                <Box my={3}>
                  <Divider />
                </Box>
                <FormikSelect name="hue" label="Hue" options={hueOptions} />
                <FormikSelect
                  name="lightness"
                  label="Lightness"
                  options={lightnessOptions}
                />
                <Box my={3}>
                  <Divider />
                </Box>
                <FormikDatePicker name="startDate" label="Start date" />
                <FormikDatePicker name="endDate" label="End date" />
                <Box my={3}>
                  <Divider />
                </Box>
                <FormikSelect
                  name="accessGroup"
                  label="Target group"
                  options={accessGroupOptions}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleSubmit}>Create</Button>
              </DialogActions>
            </Dialog>
            {open && <BannerPreview values={values} />}
          </>
        )}
      </Formik>
    </div>
  )
}

const BannerView = () => {
  const { authorizedUser } = useAuthorizedUser()
  const theme = useTheme()

  const handleSubmit = async (bannerValues) => {
    try {
      await apiClient.post(
        '/admin/banners',
        formValuesToBannerData(theme, bannerValues),
      )
      queryClient.refetchQueries(['authorizedUser'])
    } catch (error) {
      console.log('SOMETHING WENT WRONG')
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this banner for good?')) return
    try {
      await apiClient.delete(`/admin/banners/${id}`)
      queryClient.refetchQueries(['authorizedUser'])
    } catch (error) {
      console.log('SOMETHING WENT WRONG')
    }
  }

  return (
    <div>
      <BannerForm onSubmit={handleSubmit} />
      {authorizedUser?.banners.map((banner) => (
        <Box m={2} key={banner.id}>
          <Paper variant="outlined">
            <Box padding={2}>
              <Banner
                banner={banner}
                language={authorizedUser.language}
                disabled
              />
              <Box display="flex" columnGap={2}>
                <div>Color: {banner.color}</div>
                <div>Start date: {banner.startDate}</div>
                <div>End date: {banner.endDate}</div>
                <div>Access group: {banner.accessGroup}</div>
                <Box ml="auto">
                  <Button
                    variant="text"
                    color="error"
                    onClick={() => handleDelete(banner.id)}
                  >
                    DELETE
                  </Button>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Box>
      ))}
    </div>
  )
}

export default BannerView
