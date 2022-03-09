import React, { useRef, useState, forwardRef } from 'react'

import {
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  IconButton,
  Divider,
  ButtonBase,
} from '@material-ui/core'

import { Link, useLocation, matchPath } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import cn from 'classnames'

import MenuIcon from '@material-ui/icons/Menu'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'

import useFeedbackTargetsForStudent from '../../hooks/useFeedbackTargetsForStudent'
import useAuthorizedUser from '../../hooks/useAuthorizedUser'
import Logo from './Logo'
import { handleLogout, isAdmin } from './utils'
import useCourseSummaryAccessInfo from '../../hooks/useCourseSummaryAccessInfo'
import NorppaFeedbackBanner from './NorppaFeedbackBanner'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    width: '100%',
    '@media print': {
      display: 'none',
    },
  },
  link: {
    display: 'inline-flex',
    alignItems: 'center',
    color: 'inherit',
    textDecoration: 'none',
    marginRight: 8,
    fontWeight: theme.typography.fontWeightMedium,
    padding: '6px 12px',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    transition: 'background-color 0.25s',
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
  },
  activeLink: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  linkContainer: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
  },
  mobileMenuButton: {
    marginLeft: 'auto',
  },
  languageMenuDivider: {
    margin: theme.spacing(1, 0),
  },
}))

const useLanguageMenuStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
  },
  item: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  activeItem: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
}))

const LanguageMenu = forwardRef(({ language, onLanguageChange }, ref) => {
  const classes = useLanguageMenuStyles()

  const languages = ['fi', 'sv', 'en']

  return (
    <div className={classes.container} ref={ref}>
      {languages.map((l) => (
        <MenuItem
          key={l}
          className={cn(classes.item, language === l && classes.activeItem)}
          onClick={() => onLanguageChange(l)}
        >
          {l.toUpperCase()}
        </MenuItem>
      ))}
    </div>
  )
})

const NavBar = () => {
  const { pathname } = useLocation()
  const classes = useStyles()
  const { feedbackTargets } = useFeedbackTargetsForStudent()
  const { authorizedUser } = useAuthorizedUser()
  const { courseSummaryAccessInfo } = useCourseSummaryAccessInfo()
  const { t, i18n } = useTranslation()
  const menuButtonRef = useRef()
  const [menuOpen, setMenuOpen] = useState(false)
  const isMobile = useMediaQuery('(max-width:500px)')

  const isStudent = Boolean(feedbackTargets?.length)
  const isAdminUser = isAdmin(authorizedUser)
  const courseSummaryIsAccessible = courseSummaryAccessInfo?.accessible ?? false
  const { norppaFeedbackGiven } = authorizedUser

  const handleCloseMenu = () => {
    setMenuOpen(false)
  }

  const handleOpenMenu = () => {
    setMenuOpen(true)
  }

  const fullName = [authorizedUser?.firstName, authorizedUser?.lastName]
    .filter(Boolean)
    .join(' ')

  const menuLabel = fullName || t('navBar:nameFallback')

  const menuButtonProps = {
    onClick: handleOpenMenu,
    ref: menuButtonRef,
    'aria-controls': 'navBarMenu',
    'aria-haspopup': 'true',
  }

  const desktopMenuButton = (
    <Button
      color="inherit"
      endIcon={<KeyboardArrowDownIcon />}
      {...menuButtonProps}
    >
      {menuLabel}
    </Button>
  )

  const mobileMenuButton = (
    <IconButton
      color="inherit"
      className={classes.mobileMenuButton}
      aria-label={menuLabel}
      {...menuButtonProps}
    >
      <MenuIcon />
    </IconButton>
  )

  const links = [
    courseSummaryIsAccessible && {
      label: t('navBar:myCourses'),
      to: '/courses',
    },
    isStudent && {
      label: t('navBar:myFeedbacks'),
      to: '/feedbacks',
    },
    courseSummaryIsAccessible && {
      label: t('navBar:courseSummary'),
      to: '/course-summary',
    },
    courseSummaryIsAccessible && {
      label: t('navBar:feedback'),
      to: '/norppa-feedback',
    },
    isAdminUser && {
      label: t('navBar:admin'),
      to: '/admin',
    },
  ]
    .filter(Boolean)
    .map((link) => ({
      ...link,
      active: matchPath(pathname, { path: link.to }),
    }))

  const navBarLinks = (
    <div className={classes.linkContainer}>
      {links.map(({ label, to, active }, index) => (
        <ButtonBase
          component={Link}
          key={index}
          className={cn(classes.link, active && classes.activeLink)}
          to={to}
          focusRipple
        >
          {label}
        </ButtonBase>
      ))}
    </div>
  )

  const mobileMenuLinks = links.map(({ label, to }, index) => (
    <MenuItem key={index} component={Link} to={to}>
      {label}
    </MenuItem>
  ))

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
    handleCloseMenu()
  }

  const menu = (
    <Menu
      id="navBarMenu"
      anchorEl={menuButtonRef.current}
      keepMounted
      open={menuOpen}
      onClose={handleCloseMenu}
    >
      <LanguageMenu
        language={i18n.language}
        onLanguageChange={changeLanguage}
      />
      <Divider component="li" className={classes.languageMenuDivider} />
      {isMobile && mobileMenuLinks}
      <MenuItem onClick={handleLogout}>{t('navBar:logOut')}</MenuItem>
    </Menu>
  )

  return (
    <>
      {menu}
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Logo />
          {!isMobile && navBarLinks}
          {isMobile ? mobileMenuButton : desktopMenuButton}
        </Toolbar>
      </AppBar>
      {courseSummaryIsAccessible && !norppaFeedbackGiven && (
        <NorppaFeedbackBanner />
      )}
    </>
  )
}

export default NavBar
