/* eslint-disable max-len */

export default {
  common: {
    languages: {
      fi: 'Finnish',
      sv: 'Swedish',
      en: 'English',
    },
    validationErrors: {
      required: 'This field is required',
      wrongDate: 'Survey closing date is before opening date',
      invalidDate: 'Invalid date',
    },
    unknownError: 'Something went wrong',
    choiceQuestionError: 'Choice questions require answer options',
    fetchError: 'Error while fetching data. Refreshing the page may fix this.',
    serverError:
      'Oops, something broke on our end, we will try to fix it ASAP. Apologies.',
    notFound: 'Page or resource not found, sorry.',
    noAccess: 'Sorry but you have no access to this resource.',
    supportContact:
      'If you are not able to resolve this issue, please contact support: ',
    save: 'Save',
    saveSuccess: 'Information has been saved',
    name: 'Name',
    edit: 'Edit',
    show: 'Show',
    hide: 'Hide',
    accept: 'Accept',
    clearSelection: 'Clear selection',
    copyToClipBoard: 'Copy to clipboard',
    feedbackOpenPeriod:
      'Feedback can be given between {{opensAt}} and {{closesAt}}',
    firstName: 'First name',
    lastName: 'Last name',
    username: 'Username',
    studentNumber: 'Student number',
    email: 'Email',
    feedback: 'Feedback',
    feedbackGiven: 'Given',
    feedbackNotGiven: 'Not given',
    export: 'Download',
    exportCsv: 'Download as CSV',
    exportPdf: 'Download as PDF',
    combineCSV: 'Combine with Sisu CSV',
    downloadCSV: 'Download file',
    dropZoneInfo1: 'Drag a file here, or find it by clicking this box.',
    dropZoneInfo2: 'One .csv-ended file, under 5MB is accepted',
    feedbackHeader: 'FEEDBACK',
    dirtyFormPrompt:
      'The page has unsaved changes. Are you sure want to leave the page?',
    actions: 'Actions',
    close: 'Close',
    required: 'Required',
    copy: 'Copy',
    goBack: 'Go back',
    settings: 'Settings',
    feedbacks: 'Feedbacks',
    teacherPage: 'My teaching',
    courseSummaryPage: 'Course summary',
    norppaFeedback: 'Give feedback to Norppa developers',
    today: 'today',
    public: 'Public',
    notPublic: 'Not public',
    changePublicity: 'Change publicity',
    notPublicInfo: 'Answers visible only to teachers and programme admins',
    publicInfo: 'Answers visible to enrolled students',
    studyTracks: 'Studytracks',
    currentlySelected: 'Currently selected',
  },
  userFeedbacks: {
    mainHeading: 'My feedback',
    giveFeedbackButton: 'Give feedback',
    modifyFeedbackButton: 'Edit my feedback',
    clearFeedbackButton: 'Remove my feedback',
    clearConfirmationQuestion: 'Are you sure you want to remove your feedback?',
    yes: 'Yes',
    no: 'No',
    giveContinuousFeedback: 'Give continuous Feedback',
    viewFeedbackSummary: 'View feedback summary',
    noFeedback: 'There are no courses or course feedbacks here yet',
    continuousFeedbackTab: 'Continuous',
    feedbackClosedTab: 'Closed',
    waitingForFeedbackTab: 'Awaiting',
    feedbackGivenTab: 'Given',
    feedbackGivenChip: 'Feedback is given',
    waitingForFeedbackChip: 'Feedback is missing',
    feedbackNotStartedChip: 'Feedback has not started',
    feedbackEndedChip: 'Feedback has ended',
    continuousFeedbackChip: 'Continuous feedback',
    deleted: 'Your feedback has been deleted',
  },
  feedbackView: {
    submitButton: 'Give feedback',
    editButton: 'Edit feedback',
    successAlert: 'Feedback has been given. Thank you for your feedback!',
    feedbackInfo:
      'This feedback is anonymous. Fields marked with an asterisk (*) are required',
    feedbackInfoLink:
      'Read more, how your information and answers are being used',
    closedInfo:
      'This feedback is currently closed. Feedback can be given between {{opensAt}} and {{closesAt}}',
    feedbackInfoTitle: 'How are my answers used?',
    feedbackInfoContent:
      'The answers to the feedback are used for the improvement of courses and teaching. Your answers for the feedback may be shown to other students. The answers are always processed and shown anonymously, the teacher cannot see which student has given a certain feedback.\n The user information is used to show correct feedback surveys by using enrolment information.',
    dataProtectionNotice: 'Data protection notice',
    dontKnowOption: 'N/A',
    editSurvey: 'Edit survey',
    translationLanguage: 'Survey preview language',
    cannotSubmitText:
      'You cannot submit because you are not enrolled in this course or your enrollment has not updated to our system yet. Enrollments update every 24 hours.',
    feedbackClosedError: 'Feedback is closed',
    endedInfo:
      'The feedback period has ended. <2>Take a look at the feedback</2>',
    continuousFeedbackInfo:
      'You can give continuous feedback while the course is ongoing. This feedback is anonymous.',
  },
  teacherView: {
    mainHeading: 'My teaching',
    copyLink: 'Copy answer form link',
    copyResponseLink: 'Copy link to counter feedback',
    copied: 'Link copied to clipboard',
    showStudentsWithFeedback: 'Show students who have given feedback',
    feedbackCount: '{{count}}/{{totalCount}} feedback given',
    giveFeedbackResponse: 'Give counter feedback',
    noCourseRealisations: 'No course realisations',
    noCourses: 'No courses',
    editFeedbackResponse: 'Edit counter feedback',
    feedbackResponseGiven: 'Counter feedback given',
    feedbackResponseNotSent: 'Counter feedback not sent',
    feedbackResponseMissing: 'Counter feedback missing',
    continuousFeedback: 'Continuous feedback',
    feedbackOpen: 'Feedback open',
    ongoingCourses: 'Ongoing courses',
    upcomingCourses: 'Upcoming courses',
    endedCourses: 'Ended courses',
    feedbackNotStarted: 'Feedback has not started',
    surveyOpen: 'Feedback period: {{opensAt}}-{{closesAt}}',
  },
  questionEditor: {
    addQuestion: 'Add question',
    likertQuestion: 'Scale of values',
    openQuestion: 'Open question',
    singleChoiceQuestion: 'Single choice question',
    multipleChoiceQuestion: 'Multiple choice question',
    textualContent: 'Textual content',
    moveUp: 'Move up',
    moveDown: 'Move down',
    removeQuestion: 'Remove question',
    options: 'Options',
    option: 'Option',
    addOption: 'Add option',
    removeOption: 'Remove option',
    label: 'Question',
    content: 'Content',
    removeQuestionConfirmation:
      'Are you sure you want to remove this question?',
    removeOptionConfirmation: 'Are you sure you want to remove this option?',
    description: 'Description',
    done: 'Save',
    languageInfo:
      'Your are currently editing the "{{language}}" translation of this question',
    descriptionHelper:
      'Optional description that provides additional information about the question',
    universityQuestion: 'University level',
    programmeQuestion: 'Programme level',
    uneditableTooltip:
      'This is predefined and automatically added to the survey and it can not be edited or removed',
    duplicate: 'Duplicate',
  },
  editFeedbackTarget: {
    closesAt: 'Closes at',
    opensAt: 'Opens at',
    hidden: 'Hidden',
    upperLevelQuestionsInfo:
      'Survey already has {{count}} university and programme level questions, but you can add additional questions. You can click the "Show survey preview" button to see what the survey looks like with all the questions',
    upperLevelQuestionsInfoOne:
      'Survey already has {{count}} university and programme ({{primaryOrganisation}}) level questions, but you can add additional questions. You can click the "Show survey preview" button to see what the survey looks like with all the questions',
    upperLevelQuestionsInfoMany:
      'Survey already has {{count}} university and programme level questions, but you can add additional questions. You can click the "Show survey preview" button to see what the survey looks like with all the questions.\n Programme level questions come from the responsible organisations, which are {{organisations}}.',
    showPreview: 'Show survey preview',
    showPreviewConfirmation:
      'Are you sure you want to preview? Unsaved changes will be lost.',
    translationLanguage: 'Translation language',
    warningAboutOpeningCourse:
      'NB! The opening date cannot be edited after the feedback opens, and the closing date cannot be edited after the feedback period is over. The feedback must be open at least for a day. If you run in to trouble, please contact support at <mailTo>{{supportEmail}}</mailTo>.',
    noUnsavedChanges: 'No unsaved changes',
    openImmediately: 'Open feedback now',
    openImmediatelyConfirm:
      'When feedback is open the survey can no longer be edited, do you still want to open the feedback?',
    copyFromCourseDialogTitle: 'Copy questions from another course',
    copySuccessSnackbar: 'The questions have been copied into the survey',
    copyQuestionsButton: 'Copy questions',
    copyFromCourseButton: 'Copy questions from another course',
    copyFromCourseInfoAlert:
      'You can copy questions from courses that you teach. First, choose the course and then the realisation from which you want to copy the questions',
    copyFromCourseChooseCourse: 'Choose a course to see its realisations',
    copyFromCourseNoQuestions:
      'None of the realisations on the course have any questions',
    copyFromCourseQuestionCount: '{{count}} questions',
    copyFromCourseSearchLabel: 'Course',
    openFeedbackImmediatelyDialogTitle: 'Warning!',
    openFeedbackImmediatelyDialogContent:
      "You are about to open the course's feedback. Note that once the course's feedback is open you won't be able to edit its survey or the feedback period dates.",
    openFeedbackImmediatelyDialogCancel: 'Cancel',
    openFeedbackImmediatelyDialogConfirm: 'Open feedback',
    closesAtInPastError: 'Closing date can not be in the past',
    opensAtInPastError: "Opening date can't be in the past",
    closesAtBeforeOpensAtError: 'Closing date has to be after the opening date',
    tooShortFeedbackPeriodError: 'The feedback must open at least for a day',
  },
  questionResults: {
    answerCount: 'Answer count',
    answerOption: 'Answer option',
    publicInfo:
      'The results from these questions are visible to students. <2>Select public questions</2>',
    notPublicInfo:
      'The results from these questions are not visible to students. <2>Select public questions</2>',
    publicityOfQuestions:
      'The results of these questions are not visible to students',
    moreInfo: 'More information about visibility can be found',
    here: 'here',
    multipleChoiceQuestions: 'Multiple choice questions',
    openQuestions: 'Open questions',
    multipleChoiceScale:
      '1 = Completely disagree, 2 = Partly disagree, 3 = Neither disagree nor agree, 4 = Partly agree, 5 = Completely agree, N/A = Cannot answer',
  },
  feedbackSummary: {
    question: 'Question',
    average: 'Average',
    standardDeviation: 'Standard Deviation',
    median: 'Median',
    answers: 'Answers',
  },
  feedbackTargetResults: {
    notEnoughFeedbacksInfo:
      'Survey results are not shown because no feedback has been given yet',
    onlyForEnrolledInfo:
      'Survey results are not shown because the teacher has set feedback visible only for enrolled students',
    studentsWithFeedbackHeading: 'Students who have given feedback',
    responseHeading: "Teacher's counter feedback",
    giveResponse: 'Give counter feedback',
    editResponse: 'Edit counter feedback',
    noResponseInfo: "The course's teacher has not given a counter feedback yet",
    export: 'Download feedback',
    useLegacyVersion: 'Use old feedback view',
    thankYouMessage:
      'Thank you for the feedback, here is a summary of the feedback so far.',
    closeImmediately: 'Close feedback immediately',
    closeImmediatelyConfirm: `Feedback can't be collected after it is closed. Are you sure you want to close the feedback immediately?`,
    closeImmediatelyTomorrowConfirm: `Feedback will be closed {{date}}, so that it's open for atleast a day. Feedback can't be collected after it is closed. Are you sure you want to close the feedback immediately?`,
    sendReminder: 'Send reminder email',
    sendReminderButton: 'Send reminder',
    reminderDisabled:
      'You have already sent a reminder email less than 24 hours ago',
    reminderLastSent: 'Reminder last sent',
    cancelReminder: 'Cancel',
    modalTitle: 'Send a reminder about feedback via email',
    writeAMessage: 'Write a message to students',
    emailMessage:
      'Dear student! \n Please give feedback for the course {{courseName}}. The feedback period ends on {{closesAt}}. Thank you!\n << The message you write will appear here >>',
    modalSubtitle:
      'Students who have already given feedback wont receive this email',
    emailSent: 'Reminder email sent',
    setHidden: 'Hide this answer',
    setVisible: 'Unhide',
    hiddenInfo:
      'This answer is hidden and is visible only to the teachers and programme administrators',
    hidingFeatureInfoTitle: 'Info about hiding answers',
    hidingFeatureInfo:
      "You can hide individual answers from a question that has its results otherwise visible to students, to censor inappropriate or sensitive content. Hiding has no effect if the question is not visible to students.\nTo prevent misuse, the number of hidden answers is visible to programme's administrative personnel in course summary.",
  },
  navBar: {
    myFeedbacks: 'My feedback',
    myCourses: 'My teaching',
    logOut: 'Log out',
    admin: 'Admin',
    courseSummary: 'Course summary',
    nameFallback: 'Menu',
    feedback: 'Give feedback to Norppa developers',
    userInformation: 'My information',
  },
  userInformation: {
    iamGroups: 'IAM-groups',
    iamTooltip: 'Showing only groups relevant to Norppa',
    organisationAccess: 'Organisation access rights',
    organisationCode: 'organisation code',
    access: 'Access level',
    none: 'none',
  },
  studentsWithFeedback: {
    noFeedbackInfo:
      "The list of students who have given feedback cannot be shown. Either there are less than five students who have given feedback or the list of students who have given feedback is disabled in the programme's settings",
    studentsList: 'Students who have given feedback',
  },
  feedbackResponse: {
    responseLabel: 'Counter feedback',
    responseInfo: 'This field supports <2>Markdown</2> content',
    previewLabel: 'Preview',
    sendEmail: 'Save counter feedback and send email notification to students',
    instructionTitle: 'Instructions for counter feedback',
    responseInstruction:
      'Having reviewed the course feedback from students, the teacher may give a summarising response to the feedback. This feedback on feedback can be freely formulated and will be sent simultaneously to all the students on the course. \n Your response to students is central for creating a feedback culture: it shows students that their feedback is actually read and used, which encourages them to give constructive feedback in the future.',
    writingInstruction:
      'The length of the teacher’s response can vary. Examples of elements you can include in your response: thanking students for their feedback (and course participation), an overview of the feedback they gave, your subjective selection of points worth addressing, with your reactions and elaborations on them. Your concrete (planned, possible) actions to modify teaching in the course are especially valuable, showing students that giving feedback can have an impact.',
    sendEmailOption: 'Email response to students',
    dialogSendEmailTitle: 'Save response and email students',
    dialogSendEmailContent:
      'An email will be sent to students containing the counter feedback content and a link to the feedback. The counter feedback can be edited afterwards.',
    dialogCancel: 'Cancel',
    dialogSaveSubmit: 'Save',
    dialogSendEmailSubmit: 'Send',
    checkboxSendEmail: 'Send an email to all course participants',
    emailSent: 'Email sent',
    formDisabled: 'Counter feedback can only be given after feedback has ended',
  },
  publicQuestions: {
    title: 'Answer visibility',
    publicInfo:
      'Feedback related to public questions is visible to students on the feedback page. Note that feedback related to university level Likert scale questions is always visible for students',
    selectVisibility: 'Select who can see the public questions',
    none: 'Only programme personel',
    enrolled: 'Enrolled students',
    everyone: 'Everyone',
  },
  feedbackTargetSettings: {
    editPeriodTitle: 'Feedback period',
    cannotCloseImmediately: 'Feedback is not yet open',
    cannotCloseImmediatelyWhenOpen:
      'Feedback either closes within a day or has already ended',
    cannotOpenImmediately: 'Feedback is already open or has ended',
  },
  courseSummary: {
    heading: 'Summary of course feedback',
    universityLevelQuestions: 'University level questions',
    programmeLevelQuestions: 'University and programme level questions',
    noResults: 'No feedback',
    clickForDetails: 'Click for details',
    feedbackResponse: 'Latest course counter feedback given',
    feedbackCount: 'Feedback count',
    censoredCount: 'Manually hidden feedbacks',
    feedbackPercentage: 'Feedback percentage',
    feedbackResponseGiven: 'Counter feedback has been given',
    feedbackResponseNotGiven: 'Counter feedback has not been given',
    feedbackStillOpen: 'Feedback for this course is still ongoing',
    courseOngoing: 'The course is still ongoing',
    programmeSummary: 'Programme summary',
    programmeSettings: 'Programme settings',
    courseRealisation: 'Course realisation',
    facultyLabel: 'Faculty',
    allFaculties: 'All faculties',
    searchLabel: 'Filter courses',
    tagLabel: 'Study track',
    allTags: 'Show all',
    searchPlaceholder: 'Filter courses by course code',
    responsibleTeachers: 'Responsible teachers',
    includeOpenUniCourses: 'Include open university courses',
    showHiddenOrganisations: 'Select hidden programmes ({{count}})',
    hidingInfo: 'You can hide uninteresting programme summaries from yourself',
    orderByLabel: 'Order',
    orderByCodeAsc: 'Code ascending',
    orderByFeedbackCountAsc: 'Feedback count ascending',
    orderByFeedbackCountDesc: 'Feedback count descending',
    startDateLabel: 'Start of time period',
    teachingLanguages: 'Teaching languages',
    year: 'Year',
    all: 'Show all',
    semester: 'Semester',
    spring: 'Spring',
    fall: 'Fall',
    name: 'Name',
    code: 'Code',
    organisationCode: 'Organisation code',
    given: 'given',
    notGiven: 'not given',
  },
  footer: {
    contactSupport: 'Contact support',
    wikiLink: 'Instructions',
    accessibilityDocument: 'Accessibility document',
    lastUpdate: 'Latest release {{duration}} ago',
  },
  courseRealisationFeedback: {
    noFeedbackTarget: 'This course does not have a feedback available to you',
  },
  organisationSettings: {
    surveyInfo:
      "Programme level questions are displayed in every programme's course's surveys after the university level questions. Survey already has {{count}} university level questions, but you can add additional questions",
    studentListVisible:
      "Show course's teacher students who have given feedback if at least five students have given feeedback",
    courseSettingsInfo: 'Feedback is only collected from activated courses',
    settingsTab: 'Settings',
    generalSettings: 'General settings',
    courseSettings: 'Course settings',
    feedbackCorrespondent: 'Feedback correspondent',
    feedbackCorrespondents: 'Feedback correspondents',
    surveyTab: 'Programme survey',
    summaryTab: 'Summary',
    overviewTab: 'Upcoming courses',
    openQuestionsTab: 'Open questions',
    editProgrammeQuestionsDialogTitle: 'Warning!',
    editProgrammeQuestionsDialogContent:
      'You are editing the questions shared by the whole programme. These questions are visible for all the courses of the programme. Are you sure you want to edit these questions?',
    editProgrammeQuestionsDialogCancel: 'Cancel',
    editProgrammeQuestionsDialogConfirm: 'Edit',
    correspondentMissing: 'No feedback correspondent set',
    newCorrespondent: 'Add new feedback correspondent',
    confirmSetCorrespondent: `Set {{firstName}} {{lastName}} as feedback correspondent`,
    confirmResetCorrespondent: 'Remove feedback correspondent',
    setAsCorrespondent: 'Set as feedback correspondent',
    email: 'Email',
    remove: 'Remove',
    course: 'Course',
    feedbackEnabled: 'Feedback enabled',
    courseStudentListVisible: 'Student list visible',
    filters: 'Filters',
    startDate: 'From',
    endDate: 'To',
    findByTeacher: 'Find by teacher',
    findByCourseUnit: 'Find by course name',
    includeWithoutTeachers: 'Show courses without teachers',
    editMode: 'Multiedit',
    calendarMode: 'Switch to calendar view',
    listMode: 'Switch to list view',
    setStudyTracks: 'Set studytracks for course realisation',
    setStudyTracksForSelection: 'Set studytracks for course realisations',
  },
  feedbackTargetView: {
    feedbackDisabled: 'This feedback is disabled',
    surveyTab: 'Survey',
    feedbacksTab: 'Answers',
    feedbackResponseTab: 'Counter feedback',
    editSurveyTab: 'Edit survey',
    continuousFeedbackTab: 'Continuous feedback',
    editFeedbackResponseTab: 'Give counter feedback',
    studentsWithFeedbackTab: 'Respondents',
    linkCopied: 'A link to the feedback has been copied to clipboard',
    copyLink: "Copy student's feedback link",
    editFeedbackTab: 'Edit feedback',
    coursePeriod: 'Course ongoing',
    feedbackPeriod: 'Feedback open',
    coursePage: 'Course page',
    courseSummary: "Summary of course's instances",
    teachers: 'Teachers',
    responsibleTeachers: 'Responsible teachers',
    shareTab: 'Share survey',
    surveySettingsTab: 'Survey editing',
    activateContinuousFeedback: 'Activate continuous feedback for the course',
    activateContinuousFeedbackDigest:
      'Send a daily email digest about new continuous feedback',
    continuousFeedbackGiven: 'Continuous feedback given',
    noContinuousFeedbackGiven: 'No continuous feedback has been given yet',
    continuousFeedbackStudentInfo:
      'Here you can see your continuous feedback and responses. Your feedback is anonymous, so your name is not visible to the course organisers.',
    respondContinuousFeedback: 'Respond',
    closeRespondContinuousFeedback: 'Close',
    continuousFeedbackResponse: 'Response',
    sendContinuousFeedbackResponse: 'Send',
    continuousFeedbackResponseInfo: 'Respond to continuous feedback',
    editContinuousFeedbackResponse: 'Edit',
    continuousFeedbackResponseSuccessAlert: 'Response sent succesfully',
    studentLinkTitle: 'Student link to survey',
    studentResultsLinkTitle: 'Link to answers and counter feedback',
    studentLinkQRTitle: 'QR-code to survey',
    qrCodeHelpText: 'Easiest way to share the QR-code is by screenshotting it',
    deleteResponsibleTeacherConfirmation:
      'Delete teacher {{name}} from responsible teachers?',
    noFeedbackResponseYet:
      'The teacher of the course has not yet given counter feedback',
    noAccess:
      "Sorry, we couldn't find your enrolment to this course. If you enrollent recently, you might have to wait 1 or 2 hours.",
    notFound:
      'Cannot find this course feedback! If you entered the URL manually, make sure it is correct',
    notifyOnEnrolment: 'Email me when my enrolment is found',
    notificationEnabled:
      "Ok, we'll send a notification to {{email}} if your enrolment is found within 24h",
    notificationDisabled: "Ok, you won't be notified",
  },
  noadUser: {
    noUser:
      'Something went wrong, you are not currently not logged in. Try going through the email link again or contact the course teacher',
    noFeedback: 'There are currently no course feedbacks that are open',
  },
  norppaFeedback: {
    feedback: 'Feedback',
    feedbackHelper: 'Give free-form feedback',
    responseWanted: 'I want a response to my feedback',
    submit: 'Send feedback',
    confirm:
      'I understand that this is not counter feedback for students but feedback for the developers of Norppa',
    title: 'Give feedback to Norppa developers',
    description:
      'Norppa is being developed based on the user feedback recieved. With this form you can submit feedback to the developers.',
    feedbackLengthError: 'The minimum length of the feedback is one symbol',
    successAlert: 'Feedback has been sent succesfully',
    anonymousInfo:
      "It is easier for us to fix user-specific problems when you don't use the anonymous-option.",
    anonymous: 'Send anonymously',
  },
}
