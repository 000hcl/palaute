/* eslint-disable max-len */

export default {
  common: {
    languages: {
      fi: 'Suomi',
      sv: 'Ruotsi',
      en: 'Englanti',
    },
    validationErrors: {
      required: 'Tämä kenttä vaaditaan',
      wrongDate: 'Kysely sulkeutuu ennen sen avautumista',
    },
    unknownError: 'Jotain meni pieleen',
    save: 'Tallenna',
    saveSuccess: 'Tiedot tallennettiin onnistuneesti',
    name: 'Nimi',
    edit: 'Muokkaa',
    show: 'Näytä',
    feedbackOpenPeriod:
      'Palautetta voi antaa aikavälillä {{opensAt}} - {{closesAt}}',
    firstName: 'Etunimi',
    lastName: 'Sukunimi',
    username: 'Käyttäjätunnus',
    studentNumber: 'Opiskelijanumero',
    dirtyFormPrompt:
      'Sivulla on tallentamattomia muutoksia. Oletko varma, että haluat siirtyä pois sivulta?',
    actions: 'Toiminnot',
    close: 'Sulje',
    required: 'Pakollinen',
    copy: 'Kopioi',
  },
  userFeedbacks: {
    mainHeading: 'Palautteeni',
    giveFeedbackButton: 'Anna palautetta',
    modifyFeedbackButton: 'Muokkaa palautetta',
    clearFeedbackButton: 'Tyhjennä palaute',
    clearConfirmationQuestion: 'Haluatko varmasti tyhjentää tämän palautteen?',
    yes: 'Kyllä',
    no: 'Ei',
    viewFeedbackSummary: 'Näytä palautteen yhteenveto',
    noFeedback: 'Ei vielä nähtävää täällä. Tule takaisin myöhemmin!',
    feedbackClosed: 'Palaute on suljettu',
    waitingForFeedback: 'Odottaa palautetta',
    feedbackGiven: 'Palaute on annettu',
  },
  feedbackView: {
    submitButton: 'Lähetä palaute',
    successAlert: 'Palaute on annettu',
    feedbackInfo:
      'Tämä palaute annetaan anonyymisti. Tähdellä (*) merkityt kentät ovat pakollisia.',
    feedbackInfoLink: 'Lue lisää, miten tietojasi käytetään',
    closedInfo:
      'Palaute on tällä hetkellä suljettu. Palautetta voi antaa välillä {{opensAt}} - {{closesAt}}',
    privacyInfoTitle: 'Miten tietojani käytetään?',
    privacyInfoContent:
      'Kirjautumistietoja käytetään muun muassa siihen, että opiskelijalle näytetään oikeat palautteet, osataan lähettää muistusviestit, ja opettaja voi katsoa ketkä ovat lähettäneet palautetta (ja sen perusteella antaa esimerkiksi kurssipisteitä), mutta opettaja ei voi yhdistää palautetta opiskelijaan. Opettaja näkee reaaliaikaisen listan palautteen antaneista, mutta palautteet näkyvät vasta palautteenantamisajan jälkeen. Jos kurssille annettaan viisi tai vähemmän palautetta, ei niitä näytetä ollenkaan.',
    dontKnowOption: 'eos',
    editSurvey: 'Muokkaa kyselyä',
    translationLanguage: 'Kyselyn esikatselun kieli',
    cannotSubmitText:
      'Et voi lähettää palautetta, sillä et ole ilmoittautunut kurssille',
  },
  teacherView: {
    noActiveCourses: 'Ei aktiivisia kursseja',
    oldCourses: 'Näytä vanhat kurssit',
    modifyForm: 'Muokkaa lomaketta',
    viewFeedbackSummary: 'Näytä palautteen yhteenveto',
    viewFeedbackTargets: 'Näytä palautteen kohteet',
    sortBy: 'Järjestä',
    courseName: 'Kurssin nimi',
    courseCode: 'Kurssikoodi',
    mainHeading: 'Kurssini',
  },
  questionEditor: {
    addQuestion: 'Lisää kysymys',
    likertQuestion: 'Arvoasteikko',
    openQuestion: 'Avoin kysymys',
    singleChoiceQuestion: 'Monivalinta - valitse yksi',
    multipleChoiceQuestion: 'Monivalinta - valitse monta',
    textualContent: 'Tekstuaalinen sisältö',
    moveUp: 'Siirrä ylös',
    moveDown: 'Siirrä alas',
    removeQuestion: 'Poista kysymys',
    options: 'Vaihtoehdot',
    option: 'Vaihtoehto',
    addOption: 'Lisää vaihtoehto',
    removeOption: 'Poista vaihtoehto',
    label: 'Kysymys',
    content: 'Sisältö',
    removeQuestionConfirmation: 'Haluatko varmasti poistaa tämän kysymyksen?',
    removeOptionConfirmation: 'Haluatko varmasti poistaa tämän vaihtoehdon?',
    description: 'Kuvaus',
    done: 'Valmis',
    languageInfo: 'Muokkaat tällä hetkellä kysymyksen "{{language}}" käännöstä',
    descriptionHelper: 'Vapaaehtoinen kuvausteksti, joka tarkentaa kysymystä',
  },
  editFeedbackTarget: {
    closesAt: 'Sulkeutuu',
    opensAt: 'Avautuu',
    hidden: 'Piilotettu',
    upperLevelQuestionsInfo:
      'Kyselyllä on jo {{count}} yliopisto- ja laitostason kysymystä, mutta voit halutessasi lisätä sille lisää kysmyksiä. "Esikatsele kyselyä"-painiketta painamalla näet, miltä kysely näyttää kaikkine kysymyksineen',
    showPreview: 'Esikatsele kyselyä',
    translationLanguage: 'Käännösten kieli',
    warningAboutOpeningCourse:
      'HUOM! Kyselyn tietoja ei voi muokata kyselyn aukeamisen jälkeen',
    opensAtIsNow:
      'Kysely on asetettu avautumaan heti! Kyselyn ollessa auki sitä ei voi enää muokata. Haluatko varmasti tallentaa kyselyn?',
    checkbox: 'Ymmärrän',
    noUnsavedChanges: 'Sinulla ei ole tallentamattomia muutoksia',
  },
  questionResults: {
    answerCount: 'Vastausten määrä',
    answerOption: 'Vastausvaihtoehto',
    publicInfo:
      'Tämän kysymyksen tulokset ovat julkisia opiskelijoille. <2>Valitse julkiset kysymykset</2>',
    notPublicInfo:
      'Tämän kysymyksen tulokset eivät ole julkisia opiskelijoille. <2>Valitse julkiset kysymykset</2>',
  },
  feedbackSummary: {
    question: 'Kysymys',
    average: 'Keskiarvo',
    standardDeviation: 'Keskihajonta',
    median: 'Mediaani',
    answers: 'Vastanneita',
  },
  feedbackTargetList: {
    showFeedbacks: 'Näytä palautteet',
    showSurvey: 'Näytä kysely',
    editSurvey: 'Muokkaa kyselyä',
    copyLink: 'Kopioi vastauslinkki',
    copyResponseLink: 'Kopioi palautelinkki',
    copied: 'Linkki kopioitu leikepöydälle',
    showStudentsWithFeedback: 'Näytä palautetta antaneet opiskelijat',
    studentFeedbacks: 'palautetta annettu',
    giveFeedbackResponse: 'Anna vastapalaute',
    editFeedbackResponse: 'Muokkaa vastapalautetta',
    noCourseRealisations:
      'Tällä kurssilla ei ole yhtään relevanttia kurssirealisaatiota',
    selectPublicQuestions: 'Valitse julkiset kysymykset',
  },
  feedbackTargetResults: {
    notEnoughFeedbacksInfo:
      'Kyselyn tuloksia ei näytetä, sillä siinä ei ole tarpeeksi palautteita',
    studentsWithFeedbackHeading: 'Opiskelijat, jotka ovat antaneet palautetta',
    responseHeading: 'Opettajan vastapalaute',
    giveResponse: 'Anna vastapalaute',
    editResponse: 'Muokkaa vastapalautetta',
    noResponseInfo: 'Kurssin opettaja ei ole vielä antanut vastapalautetta',
  },
  navBar: {
    myFeedbacks: 'Palautteeni',
    myCourses: 'Kurssini',
    logOut: 'Kirjaudu ulos',
    admin: 'Ylläpito',
    nameFallback: 'Valikko',
  },
  studentsWithFeedback: {
    noFeedbackInfo: 'Kukaan ei ole antanut palautetta vielä',
  },
  feedbackResponse: {
    responseLabel: 'Vastapalaute',
    responseInfo: 'Tämä kenttä tukee <2>Markdown</2>-sisältöä',
    previewLabel: 'Esikatselu',
  },
  publicQuestions: {
    publicInfo:
      'Valitse mihin kysymyksiin liittyvä palaute julkaistaan opiskelijoille <2>palautesivulla</2> palautejakson päätyttyä',
  },
  courseSummary: {
    heading: 'Kurssipalautteiden yhteenveto',
    noResults: 'Ei palautteita',
    yearLabel: 'Vuosi',
  },
}
