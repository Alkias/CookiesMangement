;(CookieControl.Dialog = function (
  cookieconsent,
  mode,
  title,
  text,
  acceptText,
  declineText,
  responseMode,
  ignoreSuppress,
  demomode,
  consentLevel,
  userLanguage,
  cookieIntroText,
  cookieIntroTypeNecessary,
  cookieIntroTypePreference,
  cookieIntroTypeStatistics,
  cookieIntroTypeAdvertising,
  cookieIntroTypeUnclassified,
  multiAcceptText,
  loiAllowAllText,
  loiAllowSelectionText,
  buttonMode,
  hideDetailsText,
  showDetailsText,
  customizeText
) {
  var that = this
  ;(this.name = 'CybotCookiebotDialog'),
    (this.mode = mode),
    (this.template = 'slidedown'),
    (this.theme = 'dark'),
    (this.title = title),
    (this.text = text),
    (this.logo = null),
    (this.logoAltText = ''),
    (this.externalLinkIcon = ''),
    (this.externalLinkIconAltText = ''),
    (this.acceptText = acceptText),
    (this.declineText = declineText),
    (this.customizeText = customizeText),
    (this.cookieIntroText = cookieIntroText),
    (this.cookieIntroTypeNecessary = cookieIntroTypeNecessary),
    (this.cookieIntroTypePreference = cookieIntroTypePreference),
    (this.cookieIntroTypeStatistics = cookieIntroTypeStatistics),
    (this.cookieIntroTypeAdvertising = cookieIntroTypeAdvertising),
    (this.cookieIntroTypeUnclassified = cookieIntroTypeUnclassified),
    (this.loiAllowAllText = ''),
    (this.loiAllowSelectionText = ''),
    (this.buttonMode = 'ok'),
    (this.ooiPersonalInformation = ''),
    (this.cookieHeaderTypeNecessary = ''),
    (this.cookieHeaderTypePreference = ''),
    (this.cookieHeaderTypeStatistics = ''),
    (this.cookieHeaderTypeAdvertising = ''),
    (this.cookieHeaderTypeUnclassified = ''),
    (this.cookieTableHeaderName = ''),
    (this.cookieTableHeaderProvider = ''),
    (this.cookieTableHeaderPurpose = ''),
    (this.cookieTableHeaderType = ''),
    (this.cookieTableHeaderExpiry = ''),
    (this.showDetailsText = showDetailsText),
    (this.hideDetailsText = hideDetailsText),
    (this.multiAcceptText = multiAcceptText),
    (this.mandatoryText = ''),
    (this.noCookiesTypeText = ''),
    (this.aboutCookiesText = ''),
    (this.consentTitle = ''),
    (this.consentSelection = ''),
    (this.details = ''),
    (this.about = ''),
    (this.domainConsent = ''),
    (this.domainConsentList = ''),
    (this.cookiesOverviewText = ''),
    (this.lastUpdatedText = ''),
    (this.lastUpdatedDate = null),
    (this.privacyPolicyText = ''),
    (this.providerLinkText = ''),
    (this.bulkconsentDomainsString = ''),
    (this.cookieTableNecessary = ''),
    (this.cookieTablePreference = ''),
    (this.cookieTableStatistics = ''),
    (this.cookieTableAdvertising = ''),
    (this.cookieTableUnclassified = ''),
    (this.privacyPolicies = []),
    (this.responseMode = responseMode),
    (this.consentLevel = consentLevel),
    (this.impliedConsentOnScroll = !0),
    (this.impliedConsentOnRefresh = !1),
    (this.userLanguage = userLanguage),
    (this.userCountry = ''),
    (this.sliderPos = 0),
    (this.faderPos = 100),
    (this.detailsPos = 0),
    (this.flashCount = 0),
    (this.DOM = null),
    (this.DOMid = 'CybotCookiebotDialog'),
    (this.visible = !1),
    (this.DOMoverlay = null),
    (this.textDirection = 'ltr'),
    (this.bodyOverflow = null),
    (this.cookieconsent = cookieconsent),
    (this.cookieconsent.dialog = this),
    (this.demomode = demomode),
    (this.viewport = new CookieControl.Viewport()),
    (this.initHeight = ''),
    (this.initWidth = ''),
    (this.pageHasLoaded = !1),
    (this.scalefactor = 1),
    (this.isScrolling = !1),
    (this.isInternalAlias = !1),
    (this.showLogo = !0),
    (this.autoHideLogoWidth = 600),
    (this.windowInitScrolltop = 0),
    (this.bodyPaddingTopInit = 0),
    (this.bannerFirstFocusElement = null),
    (this.bannerLastFocusElement = null),
    (this.bannerOpenFocusElement = null),
    (this.templates = {
      top: '',
      bottom: '',
      slidedown: '',
      pushdown: '',
      slideup: '',
      overlay: '',
      popup: '',
      'top-v2': '',
      'bottom-v2': '',
      'slidedown-v2': '',
      'pushdown-v2': '',
      'slideup-v2': '',
      'overlay-v2': '',
      'popup-v2': '',
      custom: ''
    }),
    (this.themes = { white: '', dark: '', customcolor: '' }),
    (this.styles = {
      top: '',
      bottom: '',
      slidedown: '',
      pushdown: '',
      slideup: '',
      overlay: '',
      popup: '',
      custom: ''
    }),
    (this.modes = {
      top_white: '',
      top_dark: '',
      top_customcolor: '',
      bottom_white: '',
      bottom_dark: '',
      bottom_customcolor: '',
      slidedown_white: '',
      slidedown_dark: '',
      slidedown_customcolor: '',
      pushdown_white: '',
      pushdown_dark: '',
      pushdown_customcolor: '',
      slideup_white: '',
      slideup_dark: '',
      slideup_customcolor: '',
      overlay_white: '',
      overlay_dark: '',
      overlay_customcolor: '',
      popup_white: '',
      popup_dark: '',
      popup_customcolor: '',
      custom_white: '',
      custom_dark: '',
      custom_customcolor: ''
    }),
    (this.customColors = {
      background: '',
      text: '',
      acceptbutton: '',
      selectionbutton: '',
      declinebutton: '',
      buttontext: '',
      tab: '',
      border: '',
      logo: ''
    }),
    (this.customImages = {
      showdetails: '',
      hidedetails: '',
      cbCheckedNofocus: '',
      cbCheckedFocus: '',
      cbCheckedDisabled: '',
      cbNotCheckedFocus: '',
      cbNotCheckedNoFocus: ''
    }),
    (this.customTemplateDef = {
      HTML: '',
      CSS: '',
      Script: '',
      FunctionShowName: '',
      FunctionHideName: ''
    }),
    (this.prechecked = { preferences: !0, statistics: !0, marketing: !0 }),
    (this.optionaloptinSettings = { displayConsentBanner: !1 }),
    (this.IABSettings = {
      purposes: [],
      specialpurposes: [],
      features: [],
      specialfeatures: [],
      stacks: [],
      vendors: [],
      version: '',
      lastupdated: ''
    }),
    (this.IABGVL = null),
    (this.IABSortedVendorList = null),
    (this.IABResourceStrings = {
      tabHeader: '',
      deselectAll: '',
      feature: '',
      tabTitle: '',
      generalIntro: '',
      policyURL: '',
      purpose: '',
      purposeIntro: '',
      purposeLegitimateInterest: '',
      selectAll: '',
      thirdPartyVendors: '',
      vendorIntro: '',
      legitimateInterestHeader: '',
      legitimateInterestIntro: '',
      legitimateInterestPurposeIntro: '',
      legitimateInterestObjection: '',
      legitimateInterestVendorObjection: '',
      specialPurpose: '',
      specialFeature: '',
      purposeIntroShort: '',
      purposeIntroLong: '',
      purposeIntroPartly: '',
      globalConsent: '',
      withdrawConsent: '',
      preferencesIntro: '',
      consent: '',
      expand: '',
      collapse: '',
      saveAndExit: '',
      partners: '',
      partnersIntro: '',
      vendorsCan: '',
      settings: '',
      consentHandlingHeader: '',
      consentExpiry: '',
      trackingType: '',
      cookiesAndOther: '',
      cookiesOnly: '',
      showDetails: '',
      name: '',
      domain: '',
      expiry: '',
      expiryRefreshText: '',
      type: '',
      errorText: '',
      loadingText: '',
      trackingTypeCookie: '',
      trackingTypeWeb: '',
      trackingTypeApp: '',
      year: '',
      years: '',
      day: '',
      days: '',
      hour: '',
      hours: '',
      minute: '',
      minutes: '',
      second: '',
      seconds: '',
      session: '',
      googleIntro: '',
      googleHeader: ''
    }),
    (this.googlePartners = {}),
    (this.googlePartnersSortedIds = []),
    (this.bannerCloseButtonEnabled = !1),
    (this.bannerCloseText = ''),
    null != loiAllowAllText && (this.loiAllowAllText = loiAllowAllText),
    null != loiAllowSelectionText &&
      (this.loiAllowSelectionText = loiAllowSelectionText),
    null != buttonMode && (this.buttonMode = buttonMode)
}),
  (CookieControl.Dialog.prototype.getCookieTableSection = function (
    domId,
    cookieList,
    expiryLabel,
    typeLabel,
    textDirection
  ) {
    var cookieGroupCounters = {}
    function getCookieGroupCounter (providerName, count) {
      return (
        cookieGroupCounters[providerName]
          ? (cookieGroupCounters[providerName] += count)
          : (cookieGroupCounters[providerName] = count),
        cookieGroupCounters[providerName]
      )
    }
    for (var i = 0; i < cookieList.length; i++) {
      var cookie = cookieList[i],
        providerInfo = this.getProviderInfo(cookie[7], cookie[1])
      cookie.push(
        providerInfo.providerName,
        providerInfo.providerLink,
        providerInfo.providerTitle
      )
    }
    function comparator (a, b) {
      return a[8] < b[8] ? -1 : a[8] > b[8] ? 1 : 0
    }
    cookieList = cookieList.sort(comparator)
    var container = document.createElement('div')
    container.className =
      'CybotCookiebotDialogDetailBodyContentCookieTabContent'
    var providerName = null,
      providerLink = null,
      providerLinkIcon = null,
      providerInfo = null
    if (0 === cookieList.length) {
      var categoryEmptyMessage = document.createElement('p')
      ;(categoryEmptyMessage.className =
        'CybotCookiebotDialogDetailBodyEmptyCategoryMessage'),
        (categoryEmptyMessage.innerHTML = this.noCookiesTypeText),
        container.appendChild(categoryEmptyMessage)
    }
    for (var i = 0; i < cookieList.length; i++) {
      var cookie = cookieList[i],
        cookieName = cookie[0],
        cookieDomain = cookie[1],
        cookiePurpose = cookie[2],
        cookieProvider = cookie[8],
        cookieProviderLink = cookie[9],
        cookieExpiry = '<b>' + expiryLabel + '</b>: ' + cookie[3],
        cookieType = '<b>' + typeLabel + '</b>: ' + cookie[4],
        cookieProviderCounter,
        prevCookieProvider = ''
      if (
        (i > 0 && (prevCookieProvider = cookieList[i - 1][8]),
        cookieProvider !== prevCookieProvider)
      ) {
        var group = document.createElement('div')
        ;(group.className = 'CybotCookiebotDialogDetailBodyContentCookieGroup'),
          container.appendChild(group),
          (providerName = document.createElement('a')),
          providerName.classList.add(
            'CybotCookiebotDialogDetailBodyContentCookieProvider'
          ),
          providerName.classList.add('CybotCookiebotDialogCollapsed'),
          (providerName.innerHTML = ' '),
          (providerName.href = '#'),
          group.appendChild(providerName),
          (cookieProviderCounter = document.createElement('div')),
          cookieProviderCounter.classList.add(
            'CybotCookiebotDialogDetailBodyContentCookieInfoCount'
          ),
          cookieProviderCounter.classList.add(
            'CybotCookiebotDialogDetailBulkConsentCount'
          ),
          providerName.appendChild(cookieProviderCounter),
          cookieProviderLink
            ? ((providerLink = document.createElement('a')),
              (providerLink.className =
                'CybotCookiebotDialogDetailBodyContentCookieLink'),
              (providerLink.innerHTML = this.providerLinkText),
              (providerLink.target = '_blank'),
              (providerLink.href = cookieDomain.split('<br/>')[0]),
              (providerLinkIcon = document.createElement('img')),
              (providerLinkIcon.className = 'CybotExternalLinkArrow'),
              (providerLinkIcon.src = this.externalLinkIcon),
              (providerLinkIcon.alt = this.externalLinkIconAltText),
              providerLink.appendChild(providerLinkIcon),
              group.appendChild(providerLink))
            : (providerLink = null)
      }
      var domainCount = cookieDomain.split('<br/>').length
      domainCount > 1 && (cookieName += '&nbsp;[x' + domainCount + ']')
      var cookieInfo = document.createElement('div')
      cookieInfo.classList.add(
        'CybotCookiebotDialogDetailBodyContentCookieInfo'
      ),
        cookieInfo.classList.add('CybotCookiebotDialogHide'),
        cookieInfo.setAttribute('aria-expanded', 'false'),
        group.appendChild(cookieInfo)
      var cookieProviderName = document.createElement('span')
      ;(cookieProviderName.className =
        'CybotCookiebotDialogDetailBodyContentCookieInfoTitle'),
        (cookieProviderName.innerHTML = cookieName),
        cookieInfo.appendChild(cookieProviderName)
      var cookieProviderDescription = document.createElement('span')
      ;(cookieProviderDescription.className =
        'CybotCookiebotDialogDetailBodyContentCookieInfoDescription'),
        (cookieProviderDescription.innerHTML = cookiePurpose),
        cookieInfo.appendChild(cookieProviderDescription)
      var cookieFooter = document.createElement('div')
      ;(cookieFooter.className =
        'CybotCookiebotDialogDetailBodyContentCookieInfoFooter'),
        cookieInfo.appendChild(cookieFooter)
      var cookieProviderExpiry = document.createElement('span')
      ;(cookieProviderExpiry.className =
        'CybotCookiebotDialogDetailBodyContentCookieInfoFooterContent'),
        (cookieProviderExpiry.innerHTML = cookieExpiry),
        cookieFooter.appendChild(cookieProviderExpiry)
      var cookieProviderType = document.createElement('span')
      if (
        ((cookieProviderType.className =
          'CybotCookiebotDialogDetailBodyContentCookieInfoFooterContent'),
        (cookieProviderType.innerHTML = cookieType),
        cookieFooter.appendChild(cookieProviderType),
        providerName)
      )
        for (var j = 0; j <= 4; j++)
          if (1 === j) {
            var cookieDomains = cookieList[i][1].split('<br/>')
            if (
              (cookieList[i].length > 10 &&
                (cookieDomains = cookieList[i][7].split('<br/>')),
              cookieDomains.length > 1)
            ) {
              for (
                var newList = '',
                  newListHTML = document.createElement('div'),
                  existingCompanies = [],
                  k = 0;
                k < cookieDomains.length;
                k++
              ) {
                var companyName
                cookieList[i][8] && (companyName = cookieList[i][8]),
                  -1 === existingCompanies.indexOf(companyName) &&
                    (existingCompanies.push(companyName),
                    (newList += companyName),
                    k < cookieDomains.length - 1 && (newList += '<br/>'))
              }
              ;(newListHTML.innerHTML = newList),
                providerName.replaceChild(newListHTML, providerName.firstChild),
                (cookieProviderCounter.innerHTML = getCookieGroupCounter(
                  cookieList[i][8],
                  domainCount
                ))
            } else
              cookieList[i].length > 10
                ? cookieList[i][8] &&
                  ((providerName.firstChild.nodeValue = cookieList[i][8]),
                  providerLink &&
                    ((providerLink.href = cookieList[i][9]),
                    (providerLink.title = cookieList[i][10])),
                  (cookieProviderCounter.innerHTML = getCookieGroupCounter(
                    cookieList[i][8],
                    domainCount
                  )))
                : ((providerInfo = this.getProviderInfo(
                    cookieList[i][j],
                    cookieDomain
                  )),
                  providerInfo &&
                    ((providerName.firstChild.nodeValue =
                      providerInfo.providerName),
                    providerLink &&
                      ((providerLink.href = providerInfo.providerLink),
                      (providerLink.title = providerInfo.providerTitle)),
                    (cookieProviderCounter.innerHTML = getCookieGroupCounter(
                      cookieList[i][8],
                      domainCount
                    ))))
          }
    }
    return container.outerHTML
  }),
  (CookieControl.Dialog.prototype.getCookieTableHTML = function (
    domId,
    cookieList,
    tableTemplateHTML,
    textDirection
  ) {
    var cookieTableContainer = document.createElement('span')
    cookieTableContainer.innerHTML = tableTemplateHTML
    for (
      var cookieTable = cookieTableContainer.firstChild, i = 0;
      i < cookieList.length;
      i++
    )
      for (var row = cookieTable.tBodies[0].insertRow(-1), j = 0; j <= 4; j++) {
        var newcell = row.insertCell(j)
        if (((newcell.innerHTML = cookieList[i][j]), 0 === j)) {
          var domaincount = cookieList[i][1].split('<br/>').length
          domaincount > 1 &&
            (newcell.innerHTML += '&nbsp;[x' + domaincount + ']')
        } else if (1 === j) {
          var cookieDomains = cookieList[i][j].split('<br/>')
          if (
            (cookieList[i].length > 7 &&
              (cookieDomains = cookieList[i][7].split('<br/>')),
            cookieDomains.length > 1)
          ) {
            for (
              var newList = '', existingCompanies = [], k = 0;
              k < cookieDomains.length;
              k++
            ) {
              var companyName = this.getDomainLabel(cookieDomains[k])
              ;-1 === existingCompanies.indexOf(companyName) &&
                (existingCompanies.push(companyName),
                (newList += companyName),
                k < cookieDomains.length - 1 && (newList += '<br/>'))
            }
            newcell.innerHTML = newList
          } else
            cookieList[i].length > 7
              ? (newcell.innerHTML = this.getDomainLabel(cookieList[i][7]))
              : (newcell.innerHTML = this.getDomainLabel(cookieList[i][j]))
        }
        1 !== j && (newcell.title = cookieList[i][j].replace(/\<br\/\>/g, '\n'))
      }
    if (0 === cookieList.length) {
      for (; cookieTable.hasChildNodes(); )
        cookieTable.removeChild(cookieTable.firstChild)
      var noentriesRow = cookieTable.insertRow(0),
        noentriesCell = noentriesRow.insertCell(0)
      ;(noentriesCell.style.textAlignment = textDirection),
        (noentriesCell.innerHTML = this.noCookiesTypeText),
        (noentriesCell.className =
          'CybotCookiebotDialogDetailBodyContentCookieTypeTableEmpty')
    }
    return (
      (cookieTable.id = 'CybotCookiebotDialogDetailTable' + domId),
      (cookieTable.className =
        'CybotCookiebotDialogDetailBodyContentCookieTypeTable'),
      cookieTable.outerHTML
    )
  }),
  (CookieControl.Dialog.prototype.initContentFader = function () {
    var navItems = document.getElementsByClassName(
        'CybotCookiebotDialogNavItem'
      ),
      contentHeightTriggerClasesArray = [
        '.CybotCookiebotDialogDetailBodyContentCookieContainerButton',
        '.CybotCookiebotDialogDetailBodyContentCookieProvider',
        '.CybotExpandLink',
        '.CybotCookiebotDialogDetailBodyContentIABv2Tab',
        '#CybotCookiebotDialogBodyContentTextShowIABVendors',
        '#CybotCookiebotDialogBodyContentTextToggleDetails',
        '#CybotCookiebotDialogBodyEdgeMoreDetails'
      ],
      contentHeightTriggersClasses = contentHeightTriggerClasesArray.join(',')
    window.addEventListener('resize', onNewTab, !1), onNewTab()
    for (var i = 0; i < navItems.length; i++)
      navItems[i].addEventListener('click', function () {
        onNewTab()
      })
    for (
      var faders = document.getElementsByClassName('CybotCookiebotFader'),
        rgbValue = getFaderRgbaValue(this.customColors.background),
        i = 0;
      i < faders.length;
      i++
    ) {
      var fader = faders[i],
        direction = 'to top'
      if (fader.classList.contains('CybotCookiebotFaderLeft'))
        var direction = 'to right'
      else if (fader.classList.contains('CybotCookiebotFaderRight'))
        var direction = 'to left'
      fader.style.backgroundImage =
        'linear-gradient(' +
        direction +
        ',' +
        this.customColors.background +
        ',' +
        rgbValue +
        ', rgba(255, 255, 255, 0))'
    }
    function onNewTab () {
      if ('dark' === CookieConsent.dialog.theme)
        for (
          var faders = document.getElementsByClassName('CybotCookiebotFader'),
            i = 0;
          i < faders.length;
          i++
        )
          faders[i].classList.add('dark')
      for (
        var scrollAreas = document.querySelectorAll(
            '.CybotCookiebotScrollArea, .CybotCookiebotScrollAreaSide'
          ),
          i = 0;
        i < scrollAreas.length;
        i++
      ) {
        var el = scrollAreas[i],
          eventElement = el.classList.contains('CybotCookiebotScrollAreaSide')
            ? el.querySelector('ul')
            : el
        el.classList.contains('CybotCookiebotScrollAreaSide') &&
          !eventElement &&
          (eventElement = el)
        var fader = el.querySelector('.CybotCookiebotFader')
        ;(fader.style.display = 'none'),
          setEventListeners(eventElement),
          calcFadeState(eventElement),
          (fader.style.display = 'block')
      }
    }
    function onHeightTriggerClick (e) {
      e.preventDefault()
      var el = document.querySelector(
          '.CybotCookiebotScrollContainer.CybotCookiebotDialogActive .CybotCookiebotScrollArea'
        ),
        fader = el.querySelector('.CybotCookiebotFader')
      ;(fader.style.display = 'none'),
        calcFadeState(el),
        (fader.style.display = 'block')
    }
    function setFaderState (fader, setActive) {
      setActive &&
      fader &&
      !fader.classList.contains('CybotCookiebotDialogActive')
        ? fader.classList.add('CybotCookiebotDialogActive')
        : !setActive &&
          fader &&
          fader.classList.contains('CybotCookiebotDialogActive') &&
          fader.classList.remove('CybotCookiebotDialogActive')
    }
    function calcFadeState (element) {
      var el = element.nodeType ? element : this,
        fader = el.querySelector('.CybotCookiebotFader'),
        faderLeft = el.parentNode.querySelector('.CybotCookiebotFaderLeft'),
        faderRight = el.parentNode.querySelector('.CybotCookiebotFaderRight'),
        isSideDirection =
          el.classList.contains('CybotCookiebotScrollAreaSide') ||
          el.parentNode.classList.contains('CybotCookiebotScrollAreaSide')
      if (isSideDirection) {
        var scrolledToLeft = Math.round(el.scrollLeft) <= 0,
          scrolledToRight =
            el.scrollWidth - el.clientWidth - Math.round(el.scrollLeft) <= 5
        setFaderState(faderLeft, !scrolledToLeft),
          setFaderState(faderRight, !scrolledToRight)
      } else {
        var scrolledToBottom =
          Math.round(el.scrollTop + 1) >= el.scrollHeight - el.offsetHeight
        setFaderState(fader, !scrolledToBottom)
      }
    }
    function setEventListeners (el) {
      el.addEventListener('scroll', calcFadeState, !1)
      for (
        var contentHeightTriggers = document.querySelectorAll(
            contentHeightTriggersClasses
          ),
          i = 0;
        i < contentHeightTriggers.length;
        i++
      )
        contentHeightTriggers[i].addEventListener(
          'click',
          onHeightTriggerClick,
          !1
        )
    }
    function getFaderRgbaValue (hex) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
      if (result) {
        var values = {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        }
        return 'rgba(' + values.r + ',' + values.g + ',' + values.b + ', 0.8)'
      }
      return 'rgba(255, 255, 255, 0.8)'
    }
  }),
  (CookieControl.Dialog.prototype.getProviderInfo = function (
    providerName,
    providerLink
  ) {
    var providerTitle = ''
    if (this.privacyPolicies.length > 0)
      for (var i = 0; i < this.privacyPolicies.length; i++)
        if (this.privacyPolicies[i][0] === providerName) {
          ;(providerName = this.privacyPolicies[i][1]),
            (providerLink = this.privacyPolicies[i][2]),
            (providerTitle = this.privacyPolicyText
              .replace('{0}', this.privacyPolicies[i][1])
              .replace("'", "'"))
          break
        }
    return (
      -1 === providerLink.indexOf('http') && (providerLink = null),
      {
        providerName: providerName,
        providerLink: providerLink,
        providerTitle: providerTitle
      }
    )
  }),
  (CookieControl.Dialog.prototype.getDomainLabel = function (domainname) {
    var label = domainname
    if (this.privacyPolicies.length > 0)
      for (var i = 0; i < this.privacyPolicies.length; i++)
        if (this.privacyPolicies[i][0] === domainname) {
          var privacyPolicyName = this.privacyPolicies[i][1],
            privacyPolicyLink = this.privacyPolicies[i][2],
            labelTitle = this.privacyPolicyText
              .replace('{0}', privacyPolicyName)
              .replace("'", "'")
          ;(label = '<a href="' + privacyPolicyLink + '"'),
            (label +=
              ' target="_blank" rel="noopener noreferrer nofollow" title="' +
              labelTitle +
              '"'),
            (label += '>' + privacyPolicyName + '</a>')
          break
        }
    return label
  }),
  (CookieControl.Dialog.prototype.init = function () {
    var that = this
    ;-1 !== this.mode.indexOf('v2') ? (this.version = 2) : (this.version = 1),
      'function' == typeof CookiebotCallback_OnDialogInit
        ? CookiebotCallback_OnDialogInit()
        : 'function' == typeof CookieConsentCallback_OnDialogInit &&
          CookieConsentCallback_OnDialogInit()
    var event = document.createEvent('Event'),
      dialogHTML
    event.initEvent('CookiebotOnDialogInit', !0, !0),
      window.dispatchEvent(event),
      (event = document.createEvent('Event')),
      event.initEvent('CookieConsentOnDialogInit', !0, !0),
      window.dispatchEvent(event),
      !this.mode in this.modes &&
        ((this.mode = 'slidedown_dark'),
        (this.theme = 'dark'),
        (this.template = 'slidedown')),
      this.mode.indexOf('_') > 0 &&
        ((this.template = this.mode.split('_')[0]),
        (this.theme = this.mode.split('_')[1])),
      this.clearDOM(),
      this.demomode ? this.loadDemoTemplates() : this.loadTemplates(),
      (dialogHTML =
        'custom' === this.template
          ? this.customTemplateDef.HTML
          : this.templates[this.template])
    var tempParent = document.createElement('div')
    ;(tempParent.innerHTML = dialogHTML
      .replace(/\[#TITLE#]/g, this.title)
      .replace(/\[#TEXT#]/g, this.text.replace(/\n/g, ''))
      .replace(/\[#ACCEPT#]/g, this.acceptText)
      .replace(/\[#DECLINE#]/g, this.declineText)
      .replace(/\[#CUSTOMIZE#]/g, this.customizeText)
      .replace(/\[#DETAILS#\]/g, this.showDetailsText)
      .replace(/\[#DETAILSHIDE#\]/g, this.hideDetailsText)
      .replace(/\[#LOGO#]/g, this.logo || 'data:,')
      .replace(/\[#LOGOALT#]/g, this.logoAltText)
      .replace(/\[#BANNER_CLOSE#\]/g, this.bannerCloseText)),
      '' !== this.bulkconsentDomainsString
        ? 2 === this.version
          ? ((tempParent.innerHTML = tempParent.innerHTML.replace(
              /\[#BULK_CONSENT_DOMAINS#]/g,
              this.domainlist
            )),
            (tempParent.innerHTML = tempParent.innerHTML.replace(
              /\[#BULK_CONSENT_DOMAINS_COUNT#]/g,
              this.domainlistCount
            )),
            (tempParent.innerHTML = tempParent.innerHTML.replace(
              /\[#BULK_CONSENT_TITLE#]/g,
              this.bulkconsentDomainsString
            )),
            (tempParent.innerHTML = tempParent.innerHTML
              .replace(
                /\[#COOKIESGENERALINTRO#]/g,
                this.cookieIntroText.replace(/\n/g, '') + '<br><br>'
              )
              .replace(
                /\[#COOKIETYPEINTRO_NECESSARY#]/g,
                this.cookieIntroTypeNecessary.replace(/\n/g, '')
              )
              .replace(
                /\[#COOKIETYPEINTRO_PREFERENCE#]/g,
                this.cookieIntroTypePreference.replace(/\n/g, '')
              )
              .replace(
                /\[#COOKIETYPEINTRO_STATISTICS#]/g,
                this.cookieIntroTypeStatistics.replace(/\n/g, '')
              )
              .replace(
                /\[#COOKIETYPEINTRO_ADVERTISING#]/g,
                this.cookieIntroTypeAdvertising.replace(/\n/g, '')
              )
              .replace(
                /\[#COOKIETYPEINTRO_UNCLASSIFIED#]/g,
                this.cookieIntroTypeUnclassified.replace(/\n/g, '')
              )))
          : (tempParent.innerHTML = tempParent.innerHTML
              .replace(
                /\[#COOKIESGENERALINTRO#]/g,
                this.cookieIntroText.replace(/\n/g, '') +
                  '<br><br>' +
                  this.bulkconsentDomainsString +
                  '<br><br>'
              )
              .replace(
                /\[#COOKIETYPEINTRO_NECESSARY#]/g,
                this.cookieIntroTypeNecessary.replace(/\n/g, '')
              )
              .replace(
                /\[#COOKIETYPEINTRO_PREFERENCE#]/g,
                this.cookieIntroTypePreference.replace(/\n/g, '')
              )
              .replace(
                /\[#COOKIETYPEINTRO_STATISTICS#]/g,
                this.cookieIntroTypeStatistics.replace(/\n/g, '')
              )
              .replace(
                /\[#COOKIETYPEINTRO_ADVERTISING#]/g,
                this.cookieIntroTypeAdvertising.replace(/\n/g, '')
              )
              .replace(
                /\[#COOKIETYPEINTRO_UNCLASSIFIED#]/g,
                this.cookieIntroTypeUnclassified.replace(/\n/g, '')
              ))
        : (tempParent.innerHTML = tempParent.innerHTML
            .replace(
              /\[#COOKIESGENERALINTRO#]/g,
              this.cookieIntroText.replace(/\n/g, '')
            )
            .replace(
              /\[#COOKIETYPEINTRO_NECESSARY#]/g,
              this.cookieIntroTypeNecessary.replace(/\n/g, '')
            )
            .replace(
              /\[#COOKIETYPEINTRO_PREFERENCE#]/g,
              this.cookieIntroTypePreference.replace(/\n/g, '')
            )
            .replace(
              /\[#COOKIETYPEINTRO_STATISTICS#]/g,
              this.cookieIntroTypeStatistics.replace(/\n/g, '')
            )
            .replace(
              /\[#COOKIETYPEINTRO_ADVERTISING#]/g,
              this.cookieIntroTypeAdvertising.replace(/\n/g, '')
            )
            .replace(
              /\[#COOKIETYPEINTRO_UNCLASSIFIED#]/g,
              this.cookieIntroTypeUnclassified.replace(/\n/g, '')
            ))
    var lastUpdatedTextLabel = this.lastUpdatedText
    if (
      void 0 !== this.userCulture &&
      null != this.userCulture &&
      void 0 !== this.lastUpdatedDate &&
      null != this.lastUpdatedDate
    ) {
      var options = { timeZone: 'UTC', dateStyle: 'short' },
        localizedDateLabel = '',
        updateDateObject = new Date(this.lastUpdatedDate)
      try {
        localizedDateLabel = updateDateObject.toLocaleDateString(
          this.userCulture,
          options
        )
      } catch (e) {
        localizedDateLabel = updateDateObject.toLocaleDateString(
          'en-GB',
          options
        )
      }
      lastUpdatedTextLabel = lastUpdatedTextLabel.replace(
        /\{0\}/g,
        localizedDateLabel
      )
    }
    if (
      ((tempParent.innerHTML = tempParent.innerHTML
        .replace(/\[#ABOUTCOOKIES#\]/g, this.aboutCookiesText)
        .replace(/\[#CONSENT#\]/g, this.consentTitle)
        .replace(/\[#DETAILSTITLE#\]/g, this.details)
        .replace(/\[#ABOUT#\]/g, this.about)
        .replace(/\[#DOMAIN_CONSENT#\]/g, this.about)
        .replace(/\[#CONSENT_SELECTION#\]/g, this.consentSelection)
        .replace(/\[#BULK_CONSENT_HEADER#\]/g, this.domainConsent)
        .replace(/\[#BULK_CONSENT_LIST#\]/g, this.domainConsentList)
        .replace(/\[#COOKIESOVERVIEW#\]/g, this.cookiesOverviewText)
        .replace(/\[#LASTUPDATED#\]/g, lastUpdatedTextLabel)
        .replace(
          /\[#COOKIETYPE_NECESSARY#\]/g,
          this.cookieHeaderTypeNecessary.replace(
            '{0}',
            this.cookieTableNecessaryCount
          )
        )
        .replace(
          /\[#COOKIETYPE_NECESSARY_TITLE#\]/g,
          this.cookieHeaderTypeNecessary.replace('({0})', '')
        )
        .replace(
          /\[#COOKIETYPE_NECESSARY_COUNT#\]/g,
          this.cookieTableNecessaryCount
        )
        .replace(
          /\[#COOKIETYPE_PREFERENCE#\]/g,
          this.cookieHeaderTypePreference.replace(
            '{0}',
            this.cookieTablePreferenceCount
          )
        )
        .replace(
          /\[#COOKIETYPE_PREFERENCE_TITLE#\]/g,
          this.cookieHeaderTypePreference.replace('({0})', '')
        )
        .replace(
          /\[#COOKIETYPE_PREFERENCE_COUNT#\]/g,
          this.cookieTablePreferenceCount
        )
        .replace(
          /\[#COOKIETYPE_STATISTICS#\]/g,
          this.cookieHeaderTypeStatistics.replace(
            '{0}',
            this.cookieTableStatisticsCount
          )
        )
        .replace(
          /\[#COOKIETYPE_STATISTICS_TITLE#\]/g,
          this.cookieHeaderTypeStatistics.replace('({0})', '')
        )
        .replace(
          /\[#COOKIETYPE_STATISTICS_COUNT#\]/g,
          this.cookieTableStatisticsCount
        )
        .replace(
          /\[#COOKIETYPE_ADVERTISING#\]/g,
          this.cookieHeaderTypeAdvertising.replace(
            '{0}',
            this.cookieTableAdvertisingCount
          )
        )
        .replace(
          /\[#COOKIETYPE_ADVERTISING_TITLE#\]/g,
          this.cookieHeaderTypeAdvertising.replace('({0})', '')
        )
        .replace(
          /\[#COOKIETYPE_ADVERTISING_COUNT#\]/g,
          this.cookieTableAdvertisingCount
        )
        .replace(
          /\[#COOKIETYPE_UNCLASSIFIED#\]/g,
          this.cookieHeaderTypeUnclassified.replace(
            '{0}',
            this.cookieTableUnclassifiedCount
          )
        )
        .replace(
          /\[#COOKIETYPE_UNCLASSIFIED_TITLE#\]/g,
          this.cookieHeaderTypeUnclassified.replace('({0})', '')
        )
        .replace(
          /\[#COOKIETYPE_UNCLASSIFIED_COUNT#\]/g,
          this.cookieTableUnclassifiedCount
        )),
      (tempParent.innerHTML = tempParent.innerHTML
        .replace(
          /\[#COOKIETYPE_NECESSARY_RAW#\]/g,
          this.cookieHeaderTypeNecessary.replace(' ({0})', '')
        )
        .replace(
          /\[#COOKIETYPE_PREFERENCE_RAW#\]/g,
          this.cookieHeaderTypePreference.replace(' ({0})', '')
        )
        .replace(
          /\[#COOKIETYPE_STATISTICS_RAW#\]/g,
          this.cookieHeaderTypeStatistics.replace(' ({0})', '')
        )
        .replace(
          /\[#COOKIETYPE_ADVERTISING_RAW#\]/g,
          this.cookieHeaderTypeAdvertising.replace(' ({0})', '')
        )
        .replace(
          /\[#COOKIETYPE_UNCLASSIFIED_RAW#\]/g,
          this.cookieHeaderTypeUnclassified.replace(' ({0})', '')
        )),
      (tempParent.innerHTML = tempParent.innerHTML.replace(
        /\[#ACCEPTOK#\]/g,
        this.multiAcceptText
      )),
      (tempParent.innerHTML = tempParent.innerHTML.replace(
        /\[#MULTIACCEPT#\]/g,
        this.multiAcceptText
      )),
      (tempParent.innerHTML = tempParent.innerHTML.replace(
        /\[#LANGUAGE#\]/g,
        this.userLanguage
      )),
      '' !== this.ooiPersonalInformation &&
        (tempParent.innerHTML = tempParent.innerHTML.replace(
          /\[#OOI_PERSONAL_INFORMATION#\]/g,
          this.ooiPersonalInformation
        )),
      (tempParent.innerHTML = tempParent.innerHTML.replace(
        /\[#LEVELOPTIN_ALLOWALL#\]/g,
        this.loiAllowAllText
      )),
      (tempParent.innerHTML = tempParent.innerHTML.replace(
        /\[#LEVELOPTIN_ALLOW_SELECTION#\]/g,
        this.loiAllowSelectionText
      )),
      this.cookieconsent.hasFramework &&
        'iabv2' === this.cookieconsent.framework.toLowerCase() &&
        !this.cookieconsent.frameworkBlocked)
    ) {
      var currentContent = tempParent.innerHTML,
        externalLinkIcon =
          2 === this.version
            ? "<img class='CybotExternalLinkArrow' src=" +
              this.externalLinkIcon +
              ' alt=' +
              this.externalLinkIconAltText +
              ' />'
            : '',
        purposeIntro
      if (1 === this.version)
        purposeIntro = this.IABResourceStrings.generalIntro
      else {
        var generalIntro = this.IABResourceStrings.generalIntro
        ;(currentContent = currentContent.replace(
          /\[#IABV2_TITLE#\]/g,
          this.IABResourceStrings.tabTitle
        )),
          (currentContent = currentContent.replace(
            /\[#IABV2_BODY_INTRO#\]/g,
            generalIntro
          )),
          (currentContent = currentContent.replace(
            /\[#IABV2_BODY_LEGITIMATE_INTEREST_INTRO#\]/g,
            this.IABResourceStrings.legitimateInterestIntro.replace(
              '<a>',
              "<a id='CybotCookiebotDialogBodyLevelButtonIABHeaderViewPartnersLink' href='#'>"
            )
          )),
          (currentContent = currentContent.replace(
            /\[#IABV2_BODY_PREFERENCE_INTRO#\]/g,
            this.IABResourceStrings.preferencesIntro
          )),
          (purposeIntro =
            this.IABResourceStrings.purposeIntro +
            ' ' +
            this.IABResourceStrings.legitimateInterestObjection)
      }
      var allowedPurposes = []
      for (var iabAllowedPurposeIndex in this.IABGVL.purposes)
        allowedPurposes.push(this.IABGVL.purposes[iabAllowedPurposeIndex].id)
      var allowedSpecialPurposes = []
      for (var iabAllowedSpecialPurposeIndex in this.IABGVL.specialPurposes)
        allowedSpecialPurposes.push(
          this.IABGVL.specialPurposes[iabAllowedSpecialPurposeIndex].id
        )
      var allowedFeatures = []
      for (var iabAllowedFeatureIndex in this.IABGVL.features)
        allowedFeatures.push(this.IABGVL.features[iabAllowedFeatureIndex].id)
      var allowedSpecialFeatures = []
      for (var iabAllowedSpecialFeatureIndex in this.IABGVL.specialFeatures)
        allowedSpecialFeatures.push(
          this.IABGVL.specialFeatures[iabAllowedSpecialFeatureIndex].id
        )
      var allowedVendors = this.IABSortedVendorList
      if (
        CookieConsent.inlineConfiguration &&
        null != CookieConsent.inlineConfiguration &&
        CookieConsent.inlineConfiguration.Frameworks &&
        CookieConsent.inlineConfiguration.Frameworks.IABTCF2
      ) {
        if (
          (CookieConsent.inlineConfiguration.Frameworks.IABTCF2
            .AllowedPurposes &&
            (allowedPurposes =
              CookieConsent.inlineConfiguration.Frameworks.IABTCF2
                .AllowedPurposes),
          CookieConsent.inlineConfiguration.Frameworks.IABTCF2
            .AllowedSpecialPurposes &&
            (allowedSpecialPurposes =
              CookieConsent.inlineConfiguration.Frameworks.IABTCF2
                .AllowedSpecialPurposes),
          CookieConsent.inlineConfiguration.Frameworks.IABTCF2
            .AllowedFeatures &&
            (allowedFeatures =
              CookieConsent.inlineConfiguration.Frameworks.IABTCF2
                .AllowedFeatures),
          CookieConsent.inlineConfiguration.Frameworks.IABTCF2
            .AllowedSpecialFeatures &&
            (allowedSpecialFeatures =
              CookieConsent.inlineConfiguration.Frameworks.IABTCF2
                .AllowedSpecialFeatures),
          CookieConsent.inlineConfiguration.Frameworks.IABTCF2.AllowedVendors &&
            CookieConsent.inlineConfiguration.Frameworks.IABTCF2.AllowedVendors
              .length > 0)
        ) {
          allowedVendors = []
          for (var k = 0; k < this.IABSortedVendorList.length; k++)
            if (
              CookieConsent.inlineConfiguration.Frameworks.IABTCF2.AllowedVendors.indexOf(
                this.IABSortedVendorList[k]
              ) >= 0
            ) {
              var currentVendor = this.IABGVL.vendors[
                this.IABSortedVendorList[k]
              ]
              allowedVendors.push(currentVendor.id)
            }
        }
        for (var k = 0; k < allowedVendors.length; k++) {
          var currentVendor = allowedVendors[k]
          if (
            currentVendor.specialPurposes &&
            currentVendor.specialPurposes.length > 0
          )
            for (var j = 0; j < currentVendor.specialPurposes.length; j++)
              allowedSpecialPurposes.indexOf(currentVendor.specialPurposes[j]) <
                0 &&
                allowedSpecialPurposes.push(currentVendor.specialPurposes[j])
          if (currentVendor.features && currentVendor.features.length > 0)
            for (var j = 0; j < currentVendor.features.length; j++)
              allowedFeatures.indexOf(currentVendor.features[j]) < 0 &&
                allowedFeatures.push(currentVendor.features[j])
        }
      }
      var allowedGooglePartners = this.googlePartnersSortedIds
      if (
        CookieConsent.inlineConfiguration &&
        null != CookieConsent.inlineConfiguration &&
        CookieConsent.inlineConfiguration.Frameworks &&
        CookieConsent.inlineConfiguration.Frameworks.IABTCF2 &&
        CookieConsent.inlineConfiguration.Frameworks.IABTCF2
          .AllowedGoogleACVendors
      ) {
        if (
          ((allowedGooglePartners = []),
          CookieConsent.inlineConfiguration.Frameworks.IABTCF2
            .AllowedGoogleACVendors.length > 0)
        )
          for (var k = 0; k < this.googlePartnersSortedIds.length; k++)
            if (
              CookieConsent.inlineConfiguration.Frameworks.IABTCF2.AllowedGoogleACVendors.indexOf(
                this.googlePartnersSortedIds[k]
              ) >= 0
            ) {
              var currentVendor = this.googlePartners[
                this.googlePartnersSortedIds[k]
              ]
              allowedGooglePartners.push(currentVendor.id)
            }
      } else if (
        'object' == typeof CookieConsentIABCMP &&
        CookieConsentIABCMP.GACMCommonList
      ) {
        allowedGooglePartners = []
        for (var k = 0; k < this.googlePartnersSortedIds.length; k++)
          if (
            CookieConsentIABCMP.GACMCommonList.indexOf(
              this.googlePartnersSortedIds[k]
            ) >= 0
          ) {
            var currentVendor = this.googlePartners[
              this.googlePartnersSortedIds[k]
            ]
            allowedGooglePartners.push(currentVendor.id)
          }
      }
      var purposeContent = '<div>',
        iabHeaderClass = 'CybotCookiebotDialogBodyLevelButtonIABHeaderButton'
      1 === this.version &&
        (purposeContent += this.IABResourceStrings.generalIntro + '<br/><br/>'),
        'custom' === this.template
          ? (purposeContent += this.IABResourceStrings.legitimateInterestIntro
              .replace('<a>', '')
              .replace('</a>', ''))
          : 1 === this.version &&
            (purposeContent += this.IABResourceStrings.legitimateInterestIntro.replace(
              '<a>',
              "<a id='CybotCookiebotDialogBodyLevelButtonIABHeaderViewPartnersLink' href='#'>"
            )),
        1 === this.version &&
          (purposeContent +=
            '<br/><br/>' +
            this.IABResourceStrings.preferencesIntro +
            '<br/><br/>'),
        (purposeContent += '</div>'),
        (purposeContent +=
          "<div class='CybotCookiebotDialogBodyLevelButtonIABWrapper'>"),
        (purposeContent +=
          "<div class='CybotCookiebotDialogBodyLevelButtonIABHeader'>"),
        (purposeContent += getContentNameWithCount(
          this.IABResourceStrings.purpose,
          allowedPurposes.length
        )),
        (purposeContent +=
          "<span class='CybotCookiebotDialogBodyLevelButtonIABHeaderToggle'>"),
        (purposeContent +=
          "<a class='" +
          iabHeaderClass +
          " select' id='CybotCookiebotDialogBodyLevelButtonIABHeaderToggleSelectAllPurposesLink' href='#'>"),
        (purposeContent += this.IABResourceStrings.selectAll + '</a> '),
        1 === this.version && (purposeContent += ' | '),
        (purposeContent +=
          "<a  class='" +
          iabHeaderClass +
          " reject' id='CybotCookiebotDialogBodyLevelButtonIABHeaderToggleDeselectAllPurposesLink' href='#'>"),
        (purposeContent +=
          this.IABResourceStrings.deselectAll + '</a></span></div>'),
        1 === this.version &&
          (purposeContent +=
            "<div class='CybotCookiebotDialogBodyIABIntroContainer'>" +
            this.IABResourceStrings.purposeIntro +
            '</div>')
      for (var k = 0; k < allowedPurposes.length; k++) {
        var currentPurpose = this.IABGVL.purposes[allowedPurposes[k]]
        ;(purposeContent +=
          "<div class='CybotCookiebotDialogBodyLevelButtonIABContainer'>"),
          2 === this.version &&
            (purposeContent +=
              "<div class='CybotCookiebotDialogBodyLevelButtonIABContainerTogglesWrapper'>"),
          (purposeContent +=
            "<div class='CybotCookiebotDialogBodyLevelButtonWrapper'>"),
          (purposeContent +=
            "<input type='checkbox' id='CybotCookiebotDialogBodyLevelButtonIABPurpose" +
            currentPurpose.id +
            "' data-iabpurposeid='" +
            currentPurpose.id +
            "' "),
          (purposeContent +=
            "class='CybotCookiebotDialogBodyLevelButton CybotCookiebotDialogBodyIABButtonPurposes' checked='checked' tabindex='0'>"),
          (purposeContent +=
            "<label class='CybotCookiebotDialogBodyLevelButtonIABLabel' for='CybotCookiebotDialogBodyLevelButtonIABPurpose" +
            currentPurpose.id +
            "'>"),
          (purposeContent += currentPurpose.name + '</label></div>'),
          1 !== currentPurpose.id &&
            ((purposeContent +=
              "<div class='CybotCookiebotDialogBodyLevelButtonWrapper'>"),
            (purposeContent +=
              "<input type='checkbox' id='CybotCookiebotDialogBodyLevelButtonIABPurposeLegitimateInterest" +
              currentPurpose.id +
              "' "),
            (purposeContent +=
              "data-iabpurposeid='" + currentPurpose.id + "' "),
            (purposeContent +=
              "class='CybotCookiebotDialogBodyLevelButton CybotCookiebotDialogBodyIABButtonPurposesLegitimateInterestSelection' "),
            (purposeContent += "checked='checked' tabindex='0'>"),
            (purposeContent +=
              "<label for='CybotCookiebotDialogBodyLevelButtonIABPurposeLegitimateInterest" +
              currentPurpose.id +
              "'>"),
            (purposeContent +=
              this.IABResourceStrings.legitimateInterestHeader +
              '</label></div>')),
          2 === this.version && (purposeContent += '</div>'),
          (purposeContent +=
            "<div class='CybotCookiebotDialogBodyLevelButtonIABDescription'>"),
          (purposeContent +=
            currentPurpose.descriptionLegal
              .replace(
                '* ',
                '<ul class="CybotCookiebotDialogBodyLevelButtonIABBullet"><li>'
              )
              .replace(/\* /g, '</li><li>') + '</li></ul></div>'),
          (purposeContent += '</div>')
      }
      if (((purposeContent += '</div>'), allowedSpecialPurposes.length > 0)) {
        ;(purposeContent +=
          "<div class='CybotCookiebotDialogBodyLevelButtonIABWrapper'>"),
          (purposeContent +=
            "<div class='CybotCookiebotDialogBodyLevelButtonIABHeader' style='margin-top:12px;border-top:none'>"),
          (purposeContent +=
            getContentNameWithCount(
              this.IABResourceStrings.specialPurpose,
              allowedSpecialPurposes.length
            ) + '</div>')
        for (var k = 0; k < allowedSpecialPurposes.length; k++) {
          var currentSpecialPurpose = this.IABGVL.specialPurposes[
            allowedSpecialPurposes[k]
          ]
          ;(purposeContent +=
            "<div class='CybotCookiebotDialogBodyLevelButtonIABContainer'>"),
            (purposeContent +=
              "<div class='CybotCookiebotDialogBodyLevelButtonWrapper'>"),
            (purposeContent +=
              "<label class='CybotCookiebotDialogBodyLevelButtonIABLabel'>" +
              currentSpecialPurpose.name +
              '</label></div>'),
            (purposeContent +=
              "<div class='CybotCookiebotDialogBodyLevelButtonIABDescription'>"),
            (purposeContent +=
              currentSpecialPurpose.descriptionLegal
                .replace(
                  '* ',
                  '<ul class="CybotCookiebotDialogBodyLevelButtonIABBullet"><li>'
                )
                .replace(/\* /g, '</li><li>') + '</li></ul></div>'),
            (purposeContent += '</div>')
        }
        purposeContent += '</div>'
      }
      ;(currentContent = currentContent.replace(
        /\[#IABV2_BODY_PURPOSES_INTRO#\]/g,
        purposeIntro
      )),
        (currentContent = currentContent.replace(
          /\[#IABV2_BODY_PURPOSES#\]/g,
          purposeContent
        ))
      var featureContent = '',
        featureIntro = this.IABResourceStrings.featureIntro
      if (
        ((currentContent = currentContent.replace(
          /\[#IABV2_BODY_FEATURES_INTRO#\]/g,
          featureIntro
        )),
        allowedFeatures.length > 0)
      ) {
        ;(featureContent =
          "<div class='CybotCookiebotDialogBodyLevelButtonIABWrapper'>"),
          (featureContent +=
            "<div class='CybotCookiebotDialogBodyLevelButtonIABHeader' style='margin-top:0;border-top:none;padding-top:0;'>"),
          (featureContent +=
            getContentNameWithCount(
              this.IABResourceStrings.feature,
              allowedFeatures.length
            ) + '</div>')
        for (var k = 0; k < allowedFeatures.length; k++) {
          var currentFeature = this.IABGVL.features[allowedFeatures[k]]
          ;(featureContent +=
            "<div class='CybotCookiebotDialogBodyLevelButtonIABContainer'>"),
            (featureContent +=
              "<div class='CybotCookiebotDialogBodyLevelButtonWrapper'>"),
            (featureContent +=
              "<label class='CybotCookiebotDialogBodyLevelButtonIABLabel'>" +
              currentFeature.name +
              '</label></div>'),
            (featureContent +=
              "<div class='CybotCookiebotDialogBodyLevelButtonIABDescription'>"),
            (featureContent +=
              currentFeature.descriptionLegal
                .replace(
                  '* ',
                  '<ul class="CybotCookiebotDialogBodyLevelButtonIABBullet"><li>'
                )
                .replace(/\* /g, '</li><li>') + '</li></ul></div>'),
            (featureContent += '</div>')
        }
        featureContent += '</div>'
      }
      if (allowedSpecialFeatures.length > 0) {
        ;(featureContent +=
          "<div class='CybotCookiebotDialogBodyLevelButtonIABWrapper'>"),
          (featureContent +=
            "<div class='CybotCookiebotDialogBodyLevelButtonIABHeader' style='margin-top:12px;border-top:none'>"),
          (featureContent += getContentNameWithCount(
            this.IABResourceStrings.specialFeature,
            allowedSpecialFeatures.length
          )),
          (featureContent +=
            "<span class='CybotCookiebotDialogBodyLevelButtonIABHeaderToggle'>"),
          (featureContent +=
            "<a class='" +
            iabHeaderClass +
            " select' id='CybotCookiebotDialogBodyLevelButtonIABHeaderToggleSelectAllFeaturesLink' href='#'>"),
          (featureContent += this.IABResourceStrings.selectAll + '</a> '),
          1 === this.version && (featureContent += ' | '),
          (featureContent +=
            "<a class='" +
            iabHeaderClass +
            " reject' id='CybotCookiebotDialogBodyLevelButtonIABHeaderToggleDeselectAllFeaturesLink' href='#'>"),
          (featureContent +=
            this.IABResourceStrings.deselectAll + '</a></span></div>')
        for (var k = 0; k < allowedSpecialFeatures.length; k++) {
          var currentSpecialFeature = this.IABGVL.specialFeatures[
            allowedSpecialFeatures[k]
          ]
          ;(featureContent +=
            "<div class='CybotCookiebotDialogBodyLevelButtonIABContainer'>"),
            2 === this.version &&
              (featureContent +=
                "<div class='CybotCookiebotDialogBodyLevelButtonIABContainerTogglesWrapper'>"),
            (featureContent +=
              "<div class='CybotCookiebotDialogBodyLevelButtonWrapper'>"),
            (featureContent +=
              "<input type='checkbox' id='CybotCookiebotDialogBodyLevelButtonIABFeature" +
              currentSpecialFeature.id +
              "' "),
            (featureContent +=
              "data-iabspecialfeatureid='" + currentSpecialFeature.id + "' "),
            (featureContent +=
              "class='CybotCookiebotDialogBodyLevelButton CybotCookiebotDialogBodyIABButtonFeatures' "),
            (featureContent +=
              "checked='checked' tabindex='0'><label class='CybotCookiebotDialogBodyLevelButtonIABLabel' "),
            (featureContent +=
              "for='CybotCookiebotDialogBodyLevelButtonIABFeature" +
              currentSpecialFeature.id +
              "'>" +
              currentSpecialFeature.name +
              '</label></div>'),
            2 === this.version && (featureContent += '</div>'),
            (featureContent +=
              "<div class='CybotCookiebotDialogBodyLevelButtonIABDescription'>" +
              currentSpecialFeature.descriptionLegal
                .replace(
                  '* ',
                  '<ul class="CybotCookiebotDialogBodyLevelButtonIABBullet"><li>'
                )
                .replace(/\* /g, '</li><li>') +
              '</li></ul></div>'),
            (featureContent += '</div>')
        }
        featureContent += '</div>'
      }
      function hideIabContent (element) {
        void 0 !== element &&
          null != element &&
          (element.style.display = 'none')
      }
      function getContentNameWithCount (string, count) {
        return 1 === that.version
          ? string
          : string +
              "<span class='CybotCookiebotDialogDetailBulkConsentCount'>" +
              count +
              '</span>'
      }
      function restrictedList (netList, grossList) {
        var result = []
        if (netList.length < 0 || grossList.length < 0) return []
        for (var k = 0; k < netList.length; k++)
          grossList.indexOf(netList[k]) >= 0 && result.push(netList[k])
        return result
      }
      setTimeout(function () {
        if (0 === allowedPurposes.length) {
          var iabPurposesContainer = document.getElementById(
            'CybotCookiebotDialogDetailBodyContentIABv2TabPurposes'
          )
          void 0 !== iabPurposesContainer &&
            null != iabPurposesContainer &&
            (hideIabContent(
              iabPurposesContainer.getElementsByClassName(
                'CybotCookiebotDialogBodyLevelButtonIABHeader'
              )[0]
            ),
            hideIabContent(
              iabPurposesContainer.getElementsByClassName(
                'CybotCookiebotDialogBodyIABIntroContainer'
              )[0]
            ),
            hideIabContent(
              iabPurposesContainer.getElementsByClassName(
                'CybotCookiebotDialogBodyLevelButtonIABHeaderToggle'
              )[0]
            )),
            0 === allowedSpecialPurposes.length &&
              hideIabContent(
                document.getElementById(
                  'CybotCookiebotDialogDetailBodyContentIABv2Purposes'
                )
              )
        }
        0 === allowedSpecialFeatures.length &&
          (hideIabContent(
            document.getElementById('CybotCookiebotDialogSpecialFeaturesText')
          ),
          0 === allowedFeatures.length &&
            hideIabContent(
              document.getElementById(
                'CybotCookiebotDialogDetailBodyContentIABv2Features'
              )
            )),
          0 === allowedPurposes.length &&
          0 === allowedSpecialPurposes.length &&
          0 === allowedFeatures.length &&
          0 === allowedSpecialFeatures.length
            ? CookieConsent.dialog.showCookieContainerIABv2DetailPane(
                'partners'
              )
            : 0 === allowedPurposes.length &&
              0 === allowedSpecialPurposes.length &&
              CookieConsent.dialog.showCookieContainerIABv2DetailPane(
                'features'
              )
      }, 1),
        (currentContent = currentContent.replace(
          /\[#IABV2_BODY_FEATURES#\]/g,
          featureContent
        ))
      var vendorIntro =
          2 === this.version
            ? this.IABResourceStrings.partnersIntro +
              ' ' +
              this.IABResourceStrings.legitimateInterestVendorObjection
            : '',
        vendorContent =
          1 === this.version
            ? this.IABResourceStrings.partnersIntro +
              ' ' +
              this.IABResourceStrings.legitimateInterestVendorObjection
            : ''
      ;(vendorContent +=
        "<div class='CybotCookiebotDialogBodyLevelButtonIABWrapper'>"),
        (vendorContent +=
          "<div class='CybotCookiebotDialogBodyLevelButtonIABHeader' style='margin-top:12px;border-top:none;'>" +
          getContentNameWithCount(
            this.IABResourceStrings.thirdPartyVendors,
            allowedVendors.length
          ) +
          "<span class='CybotCookiebotDialogBodyLevelButtonIABHeaderToggle'><a class='CybotCookiebotDialogBodyLevelButtonIABHeaderToggleSelectVendorsLink' href='#'>" +
          this.IABResourceStrings.selectAll +
          '</a> '),
        1 === this.version && (vendorContent += ' | '),
        (vendorContent +=
          "<a class='CybotCookiebotDialogBodyLevelButtonIABHeaderToggleDeselectVendorsLink' href='#'>" +
          this.IABResourceStrings.deselectAll +
          '</a></span></div>')
      for (var k = 0; k < allowedVendors.length; k++) {
        var currentVendor = this.IABGVL.vendors[allowedVendors[k]],
          allowedVendorPurposes = restrictedList(
            currentVendor.purposes,
            allowedPurposes
          ),
          allowedVendorlegIntPurposes = restrictedList(
            currentVendor.legIntPurposes,
            allowedPurposes
          ),
          allowedVendorspecialPurposes = restrictedList(
            currentVendor.specialPurposes,
            allowedSpecialPurposes
          ),
          allowedVendorFeatures = restrictedList(
            currentVendor.features,
            allowedFeatures
          ),
          allowedVendorSpecialFeatures = restrictedList(
            currentVendor.specialFeatures,
            allowedSpecialFeatures
          ),
          ariaExpanded = 2 === this.version ? "aria-expanded='false'" : ''
        if (
          ((vendorContent += '<div '),
          (vendorContent +=
            "class='CybotCookiebotDialogBodyLevelButtonIABContainerCollapsed'"),
          (vendorContent +=
            "id='CybotCookiebotDialogBodyLevelButtonIABVendorContainer" +
            currentVendor.id +
            "'"),
          (vendorContent += ariaExpanded),
          (vendorContent += '>'),
          (vendorContent +=
            "<a data-iabvendorid='" +
            currentVendor.id +
            "' title='" +
            this.IABResourceStrings.expand +
            "' "),
          (vendorContent +=
            "class='CybotCookiebotDialogBodyLevelButtonIABContainerToggleShow' href='#'></a>"),
          2 === this.version &&
            (vendorContent +=
              "<div class='CybotCookiebotDialogBodyLevelButtonIABContainerTogglesWrapper'>"),
          (vendorContent +=
            "<div class='CybotCookiebotDialogBodyLevelButtonWrapper'><input type='checkbox' id='CybotCookiebotDialogBodyLevelButtonIABVendor" +
            currentVendor.id),
          (vendorContent +=
            "' data-iabvendorid='" +
            currentVendor.id +
            "' class='CybotCookiebotDialogBodyLevelButton CybotCookiebotDialogBodyIABButtonVendors' "),
          (vendorContent +=
            "checked='checked' tabindex='0'><label class='CybotCookiebotDialogBodyLevelButtonIABLabel' "),
          (vendorContent +=
            "for='CybotCookiebotDialogBodyLevelButtonIABVendor" +
            currentVendor.id +
            "'>" +
            currentVendor.name +
            '</label></div>'),
          currentVendor.legIntPurposes.length > 0)
        ) {
          for (
            var legIntAllowed = !1, m = 0;
            m < currentVendor.legIntPurposes.length;
            m++
          )
            if (
              allowedVendorlegIntPurposes.indexOf(
                currentVendor.legIntPurposes[m]
              ) >= 0
            ) {
              legIntAllowed = !0
              break
            }
          legIntAllowed &&
            ((vendorContent +=
              "<div class='CybotCookiebotDialogBodyLevelButtonWrapper'><input type='checkbox'"),
            (vendorContent +=
              " id='CybotCookiebotDialogBodyLevelButtonIABVendorLegitimateInterest" +
              currentVendor.id +
              "' data-iabvendorid='" +
              currentVendor.id +
              "'"),
            (vendorContent +=
              " class='CybotCookiebotDialogBodyLevelButton CybotCookiebotDialogBodyIABButtonVendorsLegitimateInterestSelection' checked='checked'"),
            (vendorContent +=
              " tabindex='0'><label for='CybotCookiebotDialogBodyLevelButtonIABVendorLegitimateInterest" +
              currentVendor.id +
              "'>"),
            (vendorContent +=
              this.IABResourceStrings.legitimateInterestHeader +
              '</label></div>'))
        }
        if (
          (2 === this.version && (vendorContent += '</div>'),
          (vendorContent +=
            "<div class='CybotCookiebotDialogBodyLevelButtonIABDescription'>" +
            this.IABResourceStrings.policyURL +
            ':'),
          (vendorContent +=
            " <a href='" +
            currentVendor.policyUrl +
            "' target='_blank' rel='noopener noreferrer nofollow'>"),
          (vendorContent +=
            currentVendor.policyUrl + externalLinkIcon + '</a><br/>'),
          allowedVendorPurposes.length > 0)
        ) {
          ;(vendorContent +=
            '<br>' +
            this.IABResourceStrings.purpose +
            ' (' +
            this.IABResourceStrings.consent +
            '): '),
            (vendorContent +=
              '<ul class="CybotCookiebotDialogBodyLevelButtonIABBullet">')
          for (var m = 0; m < allowedVendorPurposes.length; m++)
            vendorContent +=
              '<li>' +
              this.getIAB2PurposeById(allowedVendorPurposes[m]) +
              '</li>'
          vendorContent += '</ul>'
        }
        if (allowedVendorlegIntPurposes.length > 0) {
          ;(vendorContent +=
            '<br>' +
            this.IABResourceStrings.purpose +
            ' (' +
            this.IABResourceStrings.legitimateInterestHeader +
            '): '),
            (vendorContent +=
              '<ul class="CybotCookiebotDialogBodyLevelButtonIABBullet">')
          for (var m = 0; m < allowedVendorlegIntPurposes.length; m++)
            vendorContent +=
              '<li>' +
              this.getIAB2PurposeById(allowedVendorlegIntPurposes[m]) +
              '</li>'
          vendorContent += '</ul>'
        }
        if (allowedVendorspecialPurposes.length > 0) {
          ;(vendorContent +=
            '<br>' + this.IABResourceStrings.specialPurpose + ': '),
            (vendorContent +=
              '<ul class="CybotCookiebotDialogBodyLevelButtonIABBullet">')
          for (var m = 0; m < allowedVendorspecialPurposes.length; m++)
            vendorContent +=
              '<li>' +
              this.getIAB2SpecialPurposeById(allowedVendorspecialPurposes[m]) +
              '</li>'
          vendorContent += '</ul>'
        }
        if (allowedVendorFeatures.length > 0) {
          ;(vendorContent += '<br>' + this.IABResourceStrings.feature + ': '),
            (vendorContent +=
              '<ul class="CybotCookiebotDialogBodyLevelButtonIABBullet">')
          for (var m = 0; m < allowedVendorFeatures.length; m++)
            vendorContent +=
              '<li>' +
              this.getIAB2FeatureById(allowedVendorFeatures[m]) +
              '</li>'
          vendorContent += '</ul>'
        }
        if (allowedVendorSpecialFeatures.length > 0) {
          ;(vendorContent +=
            '<br>' + this.IABResourceStrings.specialFeature + ': '),
            (vendorContent +=
              '<ul class="CybotCookiebotDialogBodyLevelButtonIABBullet">')
          for (var m = 0; m < allowedVendorSpecialFeatures.length; m++)
            vendorContent +=
              '<li>' +
              this.getIAB2SpecialFeatureById(allowedVendorSpecialFeatures[m]) +
              '</li>'
          vendorContent += '</ul>'
        }
        var hasMaxAgeSeconds =
            void 0 !== currentVendor.cookieMaxAgeSeconds &&
            null !== currentVendor.cookieMaxAgeSeconds &&
            -100 !== currentVendor.cookieMaxAgeSeconds,
          hasCookiesAccessData =
            void 0 !== currentVendor.usesNonCookieAccess &&
            null !== currentVendor.usesNonCookieAccess
        if (
          hasMaxAgeSeconds ||
          hasCookiesAccessData ||
          currentVendor.deviceStorageDisclosureUrl
        ) {
          if (
            ((vendorContent +=
              '<br>' + this.IABResourceStrings.consentHandlingHeader + ': '),
            (vendorContent +=
              '<ul class="CybotCookiebotDialogBodyLevelButtonIABBullet">'),
            hasMaxAgeSeconds)
          ) {
            var cookieDuration = this.CalculateHumanDuration(
              currentVendor.cookieMaxAgeSeconds,
              this.IABResourceStrings
            )
            vendorContent +=
              '<li>' +
              this.IABResourceStrings.consentExpiry +
              ': ' +
              cookieDuration +
              '</li>'
          }
          if (
            (currentVendor.cookieRefresh &&
              (vendorContent +=
                '<li>' + this.IABResourceStrings.expiryRefreshText + '</li>'),
            hasCookiesAccessData)
          ) {
            var trackingMethodString = currentVendor.usesNonCookieAccess
              ? this.IABResourceStrings.cookiesAndOther
              : this.IABResourceStrings.cookiesOnly
            vendorContent +=
              '<li>' +
              this.IABResourceStrings.trackingType +
              ': ' +
              trackingMethodString +
              '</li>'
          }
          currentVendor.deviceStorageDisclosureUrl &&
            ((vendorContent +=
              '<li><a class="CybotCookiebotDialogBodyLevelButtonIABShowDetails" data-iabvendorid="' +
              currentVendor.id +
              '"'),
            (vendorContent +=
              ' href="#">' + this.IABResourceStrings.showDetails + '</a></li>'),
            (vendorContent +=
              '<div class="CybotCookiebotDialogBodyIABDetails"></div>')),
            (vendorContent += '</ul>')
        }
        vendorContent += '</div></div>'
      }
      if (((vendorContent += '</div>'), allowedGooglePartners.length > 0)) {
        ;(vendorContent +=
          "<div class='CybotCookiebotDialogBodyLevelButtonIABWrapper'>"),
          (vendorContent +=
            "<div class='CybotCookiebotDialogBodyLevelButtonIABHeader' style='margin-top:24px;border-top:none;'>"),
          (vendorContent +=
            getContentNameWithCount(
              this.IABResourceStrings.googleHeader,
              allowedGooglePartners.length
            ) + '</div>'),
          (vendorContent +=
            "<div class='CybotCookiebotDialogBodyIABIntroContainer'>" +
            this.IABResourceStrings.googleIntro +
            '</div>')
        for (var k = 0; k < allowedGooglePartners.length; k++) {
          var currentVendor = this.googlePartners[allowedGooglePartners[k]]
          ;(vendorContent +=
            "<div class='CybotCookiebotDialogBodyLevelButtonIABContainerCollapsed CybotCookiebotDialogBodyGACMVendor' "),
            (vendorContent +=
              "id='CybotCookiebotDialogBodyLevelButtonGoogleVendorContainer" +
              currentVendor.id +
              "'>"),
            (vendorContent +=
              "<a data-googlevendorid='" +
              currentVendor.id +
              "' title='" +
              this.IABResourceStrings.expand +
              "' "),
            (vendorContent +=
              "class='CybotCookiebotDialogBodyLevelButtonIABContainerToggleShow' href='#')'></a>"),
            (vendorContent +=
              "<div class='CybotCookiebotDialogBodyLevelButtonWrapper'>"),
            (vendorContent +=
              "<input type='checkbox' id='CybotCookiebotDialogBodyLevelButtonGoogleVendor" +
              currentVendor.id +
              "' "),
            (vendorContent +=
              "data-googlevendorid='" +
              currentVendor.id +
              "' class='CybotCookiebotDialogBodyLevelButton CybotCookiebotDialogBodyIABButtonVendors' "),
            (vendorContent +=
              "checked='checked' tabindex='0'><label class='CybotCookiebotDialogBodyLevelButtonIABLabel' "),
            (vendorContent +=
              "for='CybotCookiebotDialogBodyLevelButtonGoogleVendor" +
              currentVendor.id +
              "'>" +
              currentVendor.name +
              '</label></div>'),
            (vendorContent +=
              "<div class='CybotCookiebotDialogBodyLevelButtonIABDescription'>" +
              this.IABResourceStrings.policyURL +
              ':'),
            (vendorContent +=
              " <a href='" +
              currentVendor.policyUrl +
              "' target='_blank' rel='noopener noreferrer nofollow'>"),
            (vendorContent +=
              currentVendor.policyUrl + externalLinkIcon + '</a><br/>')
          var GACMAllowedVendorPurposes = [1, 2]
          ;(vendorContent +=
            '<br>' +
            this.IABResourceStrings.purpose +
            ' (' +
            this.IABResourceStrings.consent +
            '): '),
            (vendorContent +=
              '<ul class="CybotCookiebotDialogBodyLevelButtonIABBullet">')
          for (var m = 0; m < GACMAllowedVendorPurposes.length; m++)
            vendorContent +=
              '<li>' +
              this.getIAB2PurposeById(GACMAllowedVendorPurposes[m]) +
              '</li>'
          ;(vendorContent += '</ul>'), (vendorContent += '</div></div>')
        }
        vendorContent += '</div>'
      }
      ;(currentContent = currentContent.replace(
        /\[#IABV2_BODY_PARTNERS_INTRO#\]/g,
        vendorIntro
      )),
        (currentContent = currentContent.replace(
          /\[#IABV2_BODY_PARTNERS#\]/g,
          vendorContent
        ))
      var vendorCount = (allowedVendors && allowedVendors.length) || 0,
        googlePartnerCount =
          (allowedGooglePartners && allowedGooglePartners.length) || 0,
        purposeCount = allowedPurposes.length + allowedSpecialPurposes.length,
        featureCount = allowedFeatures.length + allowedSpecialFeatures.length,
        partnerCount = vendorCount + googlePartnerCount
      ;(currentContent = currentContent.replace(
        /\[#IABV2SETTINGS#\]/g,
        this.IABResourceStrings.tabHeader
      )),
        (currentContent = currentContent
          .replace(
            /\[#IABV2_LABEL_SETTINGS#\]/g,
            this.IABResourceStrings.settings
          )
          .replace(
            /\[#IABV2_LABEL_PURPOSES#\]/g,
            getContentNameWithCount(
              this.IABResourceStrings.purpose,
              purposeCount
            )
          )
          .replace(
            /\[#IABV2_LABEL_FEATURES#\]/g,
            getContentNameWithCount(
              this.IABResourceStrings.feature,
              featureCount
            )
          )
          .replace(
            /\[#IABV2_LABEL_PARTNERS#\]/g,
            getContentNameWithCount(
              this.IABResourceStrings.partners,
              partnerCount
            )
          )),
        (tempParent.innerHTML = currentContent)
    }
    var RTLlanguages = ['ar', 'he', 'fa', 'az', 'ur', 'pa', 'ps', 'ug', 'yi'],
      isCurrentLanguageRtlLanguage =
        RTLlanguages.indexOf(this.userLanguage.toLowerCase()) >= 0,
      textAlignment = isCurrentLanguageRtlLanguage ? 'right' : 'left'
    if (
      ((this.textDirection = isCurrentLanguageRtlLanguage ? 'rtl' : 'ltr'),
      (tempParent.innerHTML = tempParent.innerHTML.replace(
        /\[#TEXTDIRECTION#\]/g,
        this.textDirection
      )),
      1 === this.version)
    ) {
      var HTMLTabelTemplate =
        '<table><thead><tr><th scope="col">' +
        this.cookieTableHeaderName +
        '</th><th scope="col">'
      ;(HTMLTabelTemplate +=
        this.cookieTableHeaderProvider + '</th><th scope="col">'),
        (HTMLTabelTemplate +=
          this.cookieTableHeaderPurpose + '</th><th scope="col">'),
        (HTMLTabelTemplate +=
          this.cookieTableHeaderExpiry + '</th><th scope="col">'),
        (HTMLTabelTemplate +=
          this.cookieTableHeaderType +
          '</th></tr></thead><tbody></tbody></table>'),
        (tempParent.innerHTML = tempParent.innerHTML.replace(
          /\[#COOKIETABLE_NECESSARY#]/g,
          this.getCookieTableHTML(
            'Necessary',
            this.cookieTableNecessary,
            HTMLTabelTemplate,
            textAlignment
          )
        )),
        (tempParent.innerHTML = tempParent.innerHTML.replace(
          /\[#COOKIETABLE_PREFERENCE#]/g,
          this.getCookieTableHTML(
            'Preference',
            this.cookieTablePreference,
            HTMLTabelTemplate,
            textAlignment
          )
        )),
        (tempParent.innerHTML = tempParent.innerHTML.replace(
          /\[#COOKIETABLE_STATISTICS#]/g,
          this.getCookieTableHTML(
            'Statistics',
            this.cookieTableStatistics,
            HTMLTabelTemplate,
            textAlignment
          )
        )),
        (tempParent.innerHTML = tempParent.innerHTML.replace(
          /\[#COOKIETABLE_ADVERTISING#]/g,
          this.getCookieTableHTML(
            'Advertising',
            this.cookieTableAdvertising,
            HTMLTabelTemplate,
            textAlignment
          )
        )),
        (tempParent.innerHTML = tempParent.innerHTML.replace(
          /\[#COOKIETABLE_UNCLASSIFIED#]/g,
          this.getCookieTableHTML(
            'Unclassified',
            this.cookieTableUnclassified,
            HTMLTabelTemplate,
            textAlignment
          )
        ))
    } else
      (tempParent.innerHTML = tempParent.innerHTML.replace(
        /\[#COOKIETABLE_NECESSARY#]/g,
        this.getCookieTableSection(
          'Necessary',
          this.cookieTableNecessary,
          this.cookieTableHeaderExpiry,
          this.cookieTableHeaderType,
          textAlignment
        )
      )),
        (tempParent.innerHTML = tempParent.innerHTML.replace(
          /\[#COOKIETABLE_PREFERENCE#]/g,
          this.getCookieTableSection(
            'Preference',
            this.cookieTablePreference,
            this.cookieTableHeaderExpiry,
            this.cookieTableHeaderType,
            textAlignment
          )
        )),
        (tempParent.innerHTML = tempParent.innerHTML.replace(
          /\[#COOKIETABLE_STATISTICS#]/g,
          this.getCookieTableSection(
            'Statistics',
            this.cookieTableStatistics,
            this.cookieTableHeaderExpiry,
            this.cookieTableHeaderType,
            textAlignment
          )
        )),
        (tempParent.innerHTML = tempParent.innerHTML.replace(
          /\[#COOKIETABLE_ADVERTISING#]/g,
          this.getCookieTableSection(
            'Advertising',
            this.cookieTableAdvertising,
            this.cookieTableHeaderExpiry,
            this.cookieTableHeaderType,
            textAlignment
          )
        )),
        (tempParent.innerHTML = tempParent.innerHTML.replace(
          /\[#COOKIETABLE_UNCLASSIFIED#]/g,
          this.getCookieTableSection(
            'Unclassified',
            this.cookieTableUnclassified,
            this.cookieTableHeaderExpiry,
            this.cookieTableHeaderType,
            textAlignment
          )
        ))
    if (
      ((this.DOM = tempParent.firstChild),
      !this.demomode && !this.cookieconsent.hasResponse)
    )
      if (
        'implied' === this.consentLevel &&
        'undefined' == typeof CookieDeclaration
      )
        if ('-2' === this.cookieconsent.consentID) {
          var impliedReferer = window.location.href
          document.referrer &&
            0 ===
              document.referrer.indexOf(
                location.protocol + '//' + location.host
              ) &&
            (impliedReferer = document.referrer),
            this.submitConsent(!0, impliedReferer)
        } else {
          var c = this.cookieconsent.getCookie(this.cookieconsent.name)
          if (void 0 === c && this.impliedConsentOnRefresh)
            if (this.cookieconsent.pathlist.length > 0)
              for (var i = 0; i < this.cookieconsent.pathlist.length; i++)
                this.cookieconsent.setCookie(
                  '-2',
                  null,
                  this.cookieconsent.pathlist[i]
                )
            else this.cookieconsent.setCookie('-2', null, '/')
          this.impliedConsentOnScroll && this.setOnscrollEvent(), this.show()
        }
      else this.show()
  }),
  (CookieControl.Dialog.prototype.detachOnscrollEvent = function () {
    ;(this.isScrolling = !1), (this.pageHasLoaded = !1)
    try {
      window.removeEventListener
        ? window.removeEventListener('scroll', this.onscrollfunction, !1)
        : window.detachEvent &&
          window.detachEvent('onscroll', this.onscrollfunction)
    } catch (ex) {}
  }),
  (CookieControl.Dialog.prototype.setOnscrollEvent = function () {
    ;(window.CookieDialogInitScrollPosition = null),
      window.addEventListener
        ? window.addEventListener('scroll', this.onscrollfunction, !1)
        : window.attachEvent('onscroll', this.onscrollfunction)
  }),
  (CookieControl.Dialog.prototype.onscrollfunction = function (e) {
    if ('object' == typeof CookieConsentDialog) {
      if (CookieConsentDialog.isScrolling) {
        e = e || window.event
        var currentScrollPosition = 0
        return (
          window.pageYOffset
            ? (currentScrollPosition = window.pageYOffset)
            : document.documentElement && document.documentElement.scrollTop
            ? (currentScrollPosition = document.documentElement.scrollTop)
            : document.body &&
              (currentScrollPosition = document.body.scrollTop),
          currentScrollPosition !== CookieConsentDialog.windowInitScrolltop &&
            window.scrollTo(0, CookieConsentDialog.windowInitScrolltop),
          (CookieConsentDialog.isScrolling = !1),
          e.preventDefault && e.preventDefault(),
          (e.returnValue = !1),
          !1
        )
      }
      if (
        CookieConsentDialog.pageHasLoaded &&
        ('complete' === document.readyState ||
          'interactive' === document.readyState)
      ) {
        var currentCookiebotInitScrollPosition = 0
        if (
          (window.pageYOffset
            ? (currentCookiebotInitScrollPosition = window.pageYOffset)
            : document.documentElement && document.documentElement.scrollTop
            ? (currentCookiebotInitScrollPosition =
                document.documentElement.scrollTop)
            : document.body &&
              (currentCookiebotInitScrollPosition = document.body.scrollTop),
          null == window.CookieDialogInitScrollPosition &&
            (window.CookieDialogInitScrollPosition = currentCookiebotInitScrollPosition),
          'object' == typeof CookieConsent &&
            !CookieConsent.hasResponse &&
            CookieConsentDialog &&
            !this.demomode &&
            null != window.CookieDialogInitScrollPosition &&
            Math.abs(
              currentCookiebotInitScrollPosition -
                window.CookieDialogInitScrollPosition
            ) >= 150)
        ) {
          window.CookieDialogInitScrollPosition = null
          var impliedReferer = window.location.href
          document.referrer &&
            0 ===
              document.referrer.indexOf(
                location.protocol + '//' + location.host
              ) &&
            (impliedReferer = document.referrer),
            CookieConsentDialog.submitConsent(!0, impliedReferer)
        }
      }
    }
  }),
  (CookieControl.Dialog.prototype.onKeydownfunction = function (e) {
    if ('object' == typeof CookieConsentDialog) {
      var isTabPressed = 'Tab' === e.key || 9 === e.keyCode
      if (!isTabPressed) return
      if (e.shiftKey)
        CookieConsentDialog.bannerLastFocusElement &&
          document.activeElement ===
            CookieConsentDialog.bannerFirstFocusElement &&
          (CookieConsentDialog.bannerLastFocusElement.focus(),
          e.preventDefault())
      else {
        var isLastTabIndex =
          CookieConsentDialog.bannerFirstFocusElement &&
          document.activeElement === CookieConsentDialog.bannerLastFocusElement
        ;('CybotCookiebotDialog' === document.activeElement.id ||
          isLastTabIndex) &&
          (CookieConsentDialog.bannerFirstFocusElement.focus(),
          isLastTabIndex && e.preventDefault())
      }
    }
  }),
  (CookieControl.Dialog.prototype.show = function () {
    var bodyObj = document.getElementsByTagName('body')[0],
      that = this
    void 0 !== bodyObj
      ? that.displaydialog()
      : setTimeout(function () {
          that.show()
        }, 10)
  }),
  (CookieControl.Dialog.prototype.displaydialog = function () {
    window.pageYOffset
      ? (this.windowInitScrolltop = window.pageYOffset)
      : document.documentElement && document.documentElement.scrollTop
      ? (this.windowInitScrolltop = document.documentElement.scrollTop)
      : document.body && (this.windowInitScrolltop = document.body.scrollTop),
      (this.visible = !0)
    var that = this,
      bodyObj = document.getElementsByTagName('body')[0]
    if (
      ((this.DOM.style.display = 'none'),
      'undefined' !== this.DOM.id && '' !== this.DOM.id && null !== this.DOM.id
        ? (this.DOMid = this.DOM.id)
        : (this.DOM.id = this.DOMid),
      this.DOM.setAttribute('name', this.DOMid),
      (this.name = this.DOMid),
      this.clearDOM(),
      bodyObj.firstChild
        ? (this.DOM = bodyObj.insertBefore(this.DOM, bodyObj.firstChild))
        : (this.DOM = bodyObj.appendChild(this.DOM)),
      this.appendStyle(this.template),
      2 === this.version &&
        -1 === this.template.indexOf('overlay') &&
        -1 === this.template.indexOf('popup') &&
        CookieConsent.dialog.toggleEdgeDetails(),
      2 === this.version && 'leveloptin' === this.responseMode && this.DOMid)
    ) {
      var dom = document.getElementById(this.DOMid)
      dom && dom.classList.add('CybotMultilevel')
    }
    if (this.isInternalAlias) {
      var elChild = document.createElement('div')
      ;(elChild.innerHTML = 'TEST'),
        (elChild.style.position = 'absolute'),
        (elChild.style.fontSize = '100px'),
        (elChild.style.opacity = '0.25'),
        (elChild.style.fontWeight = 'bold'),
        (elChild.style.overflow = 'visible'),
        (elChild.style.pointerEvents = 'none'),
        (elChild.style.height = '0'),
        (elChild.style.width = '0'),
        (elChild.style.wordWrap = 'normal'),
        this.DOM.insertBefore(elChild, this.DOM.firstChild)
    }
    var preventEventBubbling = function (e) {
      that.isScrolling = !0
    }
    if (
      (this.DOM.addEventListener
        ? (this.DOM.addEventListener('mousewheel', preventEventBubbling, !1),
          this.DOM.addEventListener('wheel', preventEventBubbling, !1),
          this.DOM.addEventListener('DOMMouseScroll', preventEventBubbling, !1),
          this.DOM.addEventListener('scroll', preventEventBubbling, !1))
        : this.DOM.attachEvent &&
          (this.DOM.attachEvent('onmousewheel', preventEventBubbling, !1),
          this.DOM.attachEvent('wheel', preventEventBubbling, !1),
          this.DOM.attachEvent('onscroll', preventEventBubbling, !1)),
      'custom' !== this.template && 1 === this.version)
    ) {
      if (
        ('' === this.title &&
          (document.getElementById(
            'CybotCookiebotDialogBodyContentTitle'
          ).style.display = 'none'),
        '' === this.text &&
          (document.getElementById(
            'CybotCookiebotDialogBodyContentText'
          ).style.display = 'none'),
        !this.showLogo || this.viewport.winWidth() <= this.autoHideLogoWidth)
      )
        if (
          ((document.getElementById(
            'CybotCookiebotDialogPoweredbyLink'
          ).style.display = 'none'),
          'rtl' === this.textDirection)
        )
          switch (
            ('overlay' === this.template || 'popup' === this.template
              ? ((document.getElementById(
                  'CybotCookiebotDialogBodyContent'
                ).style.paddingRight = '16px'),
                'leveloptin' === this.responseMode
                  ? (document.getElementById(
                      'CybotCookiebotDialogBodyLevelButtons'
                    ).style.marginRight = '8px')
                  : (document.getElementById(
                      'CybotCookiebotDialogBodyButtons'
                    ).style.paddingRight = '8px'))
              : ((document.getElementById(
                  'CybotCookiebotDialogBodyContent'
                ).style.paddingRight = '8px'),
                'leveloptin' === this.responseMode
                  ? (document.getElementById(
                      'CybotCookiebotDialogBodyLevelButtons'
                    ).style.marginRight = '8px')
                  : (document.getElementById(
                      'CybotCookiebotDialogBodyButtons'
                    ).style.paddingRight = '0px')),
            'leveloptin' !== this.responseMode &&
              (document.getElementById(
                'CybotCookiebotDialogBodyButtons'
              ).firstChild.style.marginRight = '2px'),
            this.responseMode)
          ) {
            case 'leveloptin':
              document.getElementById(
                'CybotCookiebotDialogBodyButtonAccept'
              ).style.marginRight = '2px'
              break
            case 'optin':
            case 'inlineoptin':
              document.getElementById(
                'CybotCookiebotDialogBodyButtonAccept'
              ).style.marginRight = '2px'
              break
            case 'optout':
            case 'optinout':
              document.getElementById(
                'CybotCookiebotDialogBodyButtonDecline'
              ).style.marginRight = '2px'
          }
        else
          switch (
            ('overlay' === this.template || 'popup' === this.template
              ? ((document.getElementById(
                  'CybotCookiebotDialogBodyContent'
                ).style.paddingLeft = '16px'),
                'leveloptin' === this.responseMode
                  ? (document.getElementById(
                      'CybotCookiebotDialogBodyLevelButtons'
                    ).style.marginLeft = '8px')
                  : (document.getElementById(
                      'CybotCookiebotDialogBodyButtons'
                    ).style.paddingLeft = '8px'))
              : ((document.getElementById(
                  'CybotCookiebotDialogBodyContent'
                ).style.paddingLeft = '8px'),
                'leveloptin' === this.responseMode
                  ? (document.getElementById(
                      'CybotCookiebotDialogBodyLevelButtons'
                    ).style.marginLeft = '8px')
                  : (document.getElementById(
                      'CybotCookiebotDialogBodyButtons'
                    ).style.paddingLeft = '0px')),
            this.responseMode)
          ) {
            case 'leveloptin':
              document.getElementById(
                'CybotCookiebotDialogBodyButtonAccept'
              ).style.marginLeft = '2px'
              break
            case 'optin':
            case 'inlineoptin':
              document.getElementById(
                'CybotCookiebotDialogBodyButtonAccept'
              ).style.marginLeft = '2px'
              break
            case 'optout':
            case 'optinout':
              ;(document.getElementById(
                'CybotCookiebotDialogBodyButtonDecline'
              ).style.marginLeft = '2px'),
                (document.getElementById(
                  'CybotCookiebotDialogBodyButtonDecline'
                ).style.marginRight = '12px'),
                (document.getElementById(
                  'CybotCookiebotDialogBodyButtonAccept'
                ).style.marginLeft = '2px')
              break
            case 'optionaloptin':
              document.getElementById(
                'CybotCookiebotDialogBodyContentControls'
              ).style.paddingLeft = '12px'
          }
      var iab2tab = document.getElementById(
        'CybotCookiebotDialogDetailBodyContentTabsIABv2'
      )
      iab2tab &&
        (iab2tab.style.display =
          this.cookieconsent.hasFramework &&
          'iabv2' === this.cookieconsent.framework.toLowerCase() &&
          !this.cookieconsent.frameworkBlocked
            ? 'inline-block'
            : 'none'),
        this.viewport.addResizeEvent(function () {
          that.resize()
        })
      var optionaloptinControl = document.getElementById(
        'CybotCookiebotDialogBodyContentControls'
      )
      if (
        (null != optionaloptinControl &&
          (optionaloptinControl.style.display = 'none'),
        'optin' === this.responseMode)
      ) {
        var declineButton = document.getElementById(
          'CybotCookiebotDialogBodyButtonDecline'
        )
        declineButton.style.display = 'none'
      } else if ('optionaloptin' === this.responseMode) {
        var declineButtonOptionaloptin = document.getElementById(
          'CybotCookiebotDialogBodyButtonDecline'
        )
        declineButtonOptionaloptin.style.display = 'none'
        var acceptButtonOptionaloptin = document.getElementById(
            'CybotCookiebotDialogBodyButtonAccept'
          ),
          multiAcceptButtonOptionaloptin = document.getElementById(
            'CybotCookiebotDialogBodyLevelButtonAccept'
          )
        ;(acceptButtonOptionaloptin.innerHTML =
          multiAcceptButtonOptionaloptin.innerHTML),
          (optionaloptinControl.style.display = 'inline')
      } else if ('optout' === this.responseMode) {
        var acceptButton = document.getElementById(
          'CybotCookiebotDialogBodyButtonAccept'
        )
        acceptButton.style.display = 'none'
      } else if ('leveloptin' === this.responseMode) {
        var defaultButtons = document.getElementById(
          'CybotCookiebotDialogBodyButtons'
        )
        defaultButtons.style.display = 'none'
        var necInlineLabel = document.getElementById(
          'CybotCookiebotDialogDetailBodyContentCookieContainerNecessary'
        )
        necInlineLabel.style.borderTop = '0'
        var levelButtons = document.getElementById(
          'CybotCookiebotDialogBodyLevelWrapper'
        )
        levelButtons.style.display = 'block'
        var allowallSelectionButtons = document.getElementById(
            'CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelectionWrapper'
          ),
          acceptButtons = document.getElementById(
            'CybotCookiebotDialogBodyLevelButtonAcceptWrapper'
          )
        if (
          'allowselectdecline' === this.buttonMode ||
          'allowallorselection' === this.buttonMode
        ) {
          null != allowallSelectionButtons &&
            (allowallSelectionButtons.style.display = 'block'),
            null != acceptButtons && (acceptButtons.style.display = 'none')
          var declineButton = document.getElementById(
            'CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll'
          )
          null !== declineButton &&
            (declineButton.style.display =
              'allowselectdecline' === this.buttonMode ? '' : 'none')
        } else
          null != allowallSelectionButtons &&
            (allowallSelectionButtons.style.display = 'none'),
            null != acceptButtons && (acceptButtons.style.display = 'block')
        setOptionTitles()
      } else if ('inlineoptin' === this.responseMode) {
        var declineButton = document.getElementById(
          'CybotCookiebotDialogBodyButtonDecline'
        )
        declineButton.style.display = 'none'
        var acceptButton = document.getElementById(
            'CybotCookiebotDialogBodyButtonAccept'
          ),
          multiAcceptButton = document.getElementById(
            'CybotCookiebotDialogBodyLevelButtonAccept'
          )
        acceptButton.innerHTML = multiAcceptButton.innerHTML
        var necCheckBox = document.getElementById(
          'CybotCookiebotDialogBodyLevelButtonNecessary'
        )
        ;(necCheckBox.style.zIndex = 1e4),
          (necCheckBox.style.position = 'absolute')
        var necInlineLabel = document.getElementById(
          'CybotCookiebotDialogDetailBodyContentCookieContainerNecessary'
        )
        ;(necInlineLabel.title = this.htmlDecode(this.mandatoryText)),
          (necInlineLabel.style.paddingTop = '7px'),
          (necInlineLabel.style.paddingBottom = '5px'),
          (necInlineLabel.style.position = 'relative'),
          (necInlineLabel.style.zIndex = 1)
        var necLabel = necInlineLabel.firstChild
        ;(necLabel.htmlFor = necCheckBox.id),
          (necLabel.style.display = 'inline-block'),
          (necLabel.style.backgroundPositionY = '-1px'),
          necInlineLabel.insertBefore(necCheckBox, necInlineLabel.firstChild),
          (necCheckBox = document.getElementById(
            'CybotCookiebotDialogBodyLevelButtonPreferences'
          )),
          (necCheckBox.style.zIndex = 1e4),
          (necCheckBox.style.position = 'absolute'),
          (necInlineLabel = document.getElementById(
            'CybotCookiebotDialogDetailBodyContentCookieContainerPreference'
          )),
          (necInlineLabel.style.paddingTop = '7px'),
          (necInlineLabel.style.paddingBottom = '5px'),
          (necInlineLabel.style.position = 'relative'),
          (necInlineLabel.style.zIndex = 1),
          (necLabel = necInlineLabel.firstChild),
          (necLabel.htmlFor = necCheckBox.id),
          (necLabel.style.display = 'inline-block'),
          (necLabel.style.backgroundPositionY = '-1px'),
          necInlineLabel.insertBefore(necCheckBox, necInlineLabel.firstChild),
          (necCheckBox = document.getElementById(
            'CybotCookiebotDialogBodyLevelButtonStatistics'
          )),
          (necCheckBox.style.zIndex = 1e4),
          (necCheckBox.style.position = 'absolute'),
          (necInlineLabel = document.getElementById(
            'CybotCookiebotDialogDetailBodyContentCookieContainerStatistics'
          )),
          (necInlineLabel.style.paddingTop = '7px'),
          (necInlineLabel.style.paddingBottom = '5px'),
          (necInlineLabel.style.position = 'relative'),
          (necInlineLabel.style.zIndex = 1),
          (necLabel = necInlineLabel.firstChild),
          (necLabel.htmlFor = necCheckBox.id),
          (necLabel.style.display = 'inline-block'),
          (necLabel.style.backgroundPositionY = '-1px'),
          necInlineLabel.insertBefore(necCheckBox, necInlineLabel.firstChild),
          (necCheckBox = document.getElementById(
            'CybotCookiebotDialogBodyLevelButtonMarketing'
          )),
          (necCheckBox.style.zIndex = 1e4),
          (necCheckBox.style.position = 'absolute'),
          (necInlineLabel = document.getElementById(
            'CybotCookiebotDialogDetailBodyContentCookieContainerAdvertising'
          )),
          (necInlineLabel.style.paddingTop = '7px'),
          (necInlineLabel.style.paddingBottom = '5px'),
          (necInlineLabel.style.position = 'relative'),
          (necInlineLabel.style.zIndex = 1),
          (necLabel = necInlineLabel.firstChild),
          (necLabel.htmlFor = necCheckBox.id),
          (necLabel.style.display = 'inline-block'),
          (necLabel.style.backgroundPositionY = '-1px'),
          necInlineLabel.insertBefore(necCheckBox, necInlineLabel.firstChild),
          (necInlineLabel = document.getElementById(
            'CybotCookiebotDialogDetailBodyContentCookieContainerUnclassified'
          )),
          (necInlineLabel.style.paddingTop = '7px'),
          (necInlineLabel.style.paddingBottom = '7px'),
          (necInlineLabel.style.borderBottom = '0')
        var cookieTypeTabWrapper = document.getElementById(
          'CybotCookiebotDialogDetailBodyContentCookieContainerTypes'
        )
        cookieTypeTabWrapper.style.backgroundColor = this.customColors.background
      }
    } else if (2 === this.version) {
      var cybotCookiebotDialogPoweredbyImage = document.getElementById(
        'CybotCookiebotDialogPoweredbyImage'
      )
      if (
        (cybotCookiebotDialogPoweredbyImage &&
          ((this.showLogo &&
            cybotCookiebotDialogPoweredbyImage.getAttribute('src')) ||
            (cybotCookiebotDialogPoweredbyImage.style.display = 'none')),
        !this.bulkconsentDomainsString || !this.domainlist)
      ) {
        var bulkConsentContainer = document.getElementById(
          'CybotCookiebotDialogDetailBulkConsent'
        )
        bulkConsentContainer && (bulkConsentContainer.style.display = 'none')
      }
      var cybotCookiebotDialogBodyButtonDecline = document.getElementById(
          'CybotCookiebotDialogBodyButtonDecline'
        ),
        cybotCookiebotDialogBodyButtonAccept = document.getElementById(
          'CybotCookiebotDialogBodyButtonAccept'
        ),
        cybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection = document.getElementById(
          'CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection'
        ),
        cybotCookiebotDialogBodyContentControls = document.getElementsByClassName(
          'CybotCookiebotDialogBodyContentControlsWrapper'
        )[0],
        cybotCookiebotDialogBodyLevelWrapper = document.getElementById(
          'CybotCookiebotDialogBodyLevelWrapper'
        )
      if (
        'leveloptin' === this.responseMode ||
        (2 === this.version && 'inlineoptin' === this.responseMode)
      ) {
        var isMultiButton = 'ok' !== this.buttonMode
        cybotCookiebotDialogBodyButtonAccept.id = isMultiButton
          ? 'CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll'
          : 'CybotCookiebotDialogBodyLevelButtonAccept'
      }
      function hideDetailsCheckboxes () {
        for (
          var consentToggles = document.querySelectorAll(
              '#CybotCookiebotDialogTabContentDetails .CybotCookiebotDialogBodyLevelButtonSliderWrapper'
            ),
            i = 0;
          i < consentToggles.length;
          i++
        )
          that.setVisibility(consentToggles[i], 'hide')
      }
      'optout' === this.responseMode
        ? (this.setVisibility(cybotCookiebotDialogBodyButtonDecline, 'show'),
          this.setVisibility(cybotCookiebotDialogBodyLevelWrapper, 'hide'),
          hideDetailsCheckboxes())
        : 'optin' === this.responseMode
        ? (this.setVisibility(cybotCookiebotDialogBodyButtonAccept, 'show'),
          this.setVisibility(cybotCookiebotDialogBodyLevelWrapper, 'hide'),
          hideDetailsCheckboxes())
        : 'optinout' === this.responseMode
        ? (this.setVisibility(cybotCookiebotDialogBodyButtonAccept, 'show'),
          this.setVisibility(cybotCookiebotDialogBodyButtonDecline, 'show'),
          this.setVisibility(cybotCookiebotDialogBodyLevelWrapper, 'hide'),
          hideDetailsCheckboxes())
        : 'leveloptin' === this.responseMode
        ? (this.setVisibility(cybotCookiebotDialogBodyButtonAccept, 'show'),
          this.setVisibility(cybotCookiebotDialogBodyLevelWrapper, 'show'),
          'allowselectdecline' === this.buttonMode
            ? (this.setVisibility(
                cybotCookiebotDialogBodyButtonDecline,
                'show'
              ),
              this.setVisibility(
                cybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection,
                'show'
              ),
              this.setVisibility(cybotCookiebotDialogBodyButtonAccept, 'show'),
              (cybotCookiebotDialogBodyButtonAccept.innerHTML = this.loiAllowAllText))
            : 'allowallorselection' === this.buttonMode
            ? (this.setVisibility(
                cybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection,
                'show'
              ),
              (cybotCookiebotDialogBodyButtonAccept.innerHTML = this.loiAllowAllText))
            : (cybotCookiebotDialogBodyButtonAccept.innerHTML = this.multiAcceptText))
        : 'inlineoptin' === this.responseMode
        ? ((cybotCookiebotDialogBodyButtonAccept.innerHTML = this.multiAcceptText),
          this.setVisibility(cybotCookiebotDialogBodyButtonAccept, 'show'),
          this.setVisibility(cybotCookiebotDialogBodyLevelWrapper, 'hide'),
          2 === this.version &&
            ('allowselectdecline' === this.buttonMode
              ? (this.setVisibility(
                  cybotCookiebotDialogBodyButtonDecline,
                  'show'
                ),
                this.setVisibility(
                  cybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection,
                  'show'
                ),
                this.setVisibility(
                  cybotCookiebotDialogBodyButtonAccept,
                  'show'
                ),
                (cybotCookiebotDialogBodyButtonAccept.innerHTML = this.loiAllowAllText))
              : 'allowallorselection' === this.buttonMode &&
                (this.setVisibility(
                  cybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection,
                  'show'
                ),
                (cybotCookiebotDialogBodyButtonAccept.innerHTML = this.loiAllowAllText)),
            this.checkCustomizeButtonState()))
        : 'optionaloptin' === this.responseMode &&
          (this.setVisibility(cybotCookiebotDialogBodyButtonAccept, 'show'),
          this.setVisibility(cybotCookiebotDialogBodyContentControls, 'show'),
          this.setVisibility(cybotCookiebotDialogBodyLevelWrapper, 'hide'),
          hideDetailsCheckboxes(),
          (cybotCookiebotDialogBodyButtonAccept.innerHTML = this.multiAcceptText))
      var iab2tab = document.getElementById(
        'CybotCookiebotDialogNavItemAdSettings'
      )
      iab2tab &&
        this.cookieconsent.hasFramework &&
        'iabv2' === this.cookieconsent.framework.toLowerCase() &&
        !this.cookieconsent.frameworkBlocked &&
        this.setVisibility(iab2tab, 'show')
    } else this.demomode && (this.DOM.style.zIndex = '100000')
    var isIABEnabled =
      this.cookieconsent.hasFramework &&
      'iabv2' === this.cookieconsent.framework.toLowerCase() &&
      !this.cookieconsent.frameworkBlocked
    if ('custom' !== this.template && isIABEnabled) {
      var marketingCheckbox = document.getElementById(
          'CybotCookiebotDialogBodyLevelButtonMarketing'
        ),
        marketingCheckboxInline = document.getElementById(
          'CybotCookiebotDialogBodyLevelButtonMarketingInline'
        )
      function toggleIABSelections () {
        this.checked ? that.IABSelectAll() : that.IABDeselectAll(!0)
      }
      marketingCheckbox &&
        marketingCheckbox.addEventListener('click', toggleIABSelections),
        marketingCheckboxInline &&
          marketingCheckboxInline.addEventListener('click', toggleIABSelections)
    }
    if (
      this.demomode ||
      ('leveloptin' !== this.responseMode &&
        'inlineoptin' !== this.responseMode &&
        'custom' !== this.template &&
        'optionaloptin' !== this.responseMode)
    )
      !this.demomode ||
        ('leveloptin' !== this.responseMode &&
          'inlineoptin' !== this.responseMode &&
          'custom' !== this.template) ||
        (document.getElementById(
          'CybotCookiebotDialogBodyLevelButtonPreferences'
        ) &&
          (document.getElementById(
            'CybotCookiebotDialogBodyLevelButtonPreferences'
          ).checked = this.prechecked.preferences),
        document.getElementById(
          'CybotCookiebotDialogBodyLevelButtonStatistics'
        ) &&
          (document.getElementById(
            'CybotCookiebotDialogBodyLevelButtonStatistics'
          ).checked = this.prechecked.statistics),
        document.getElementById(
          'CybotCookiebotDialogBodyLevelButtonMarketing'
        ) &&
          ((document.getElementById(
            'CybotCookiebotDialogBodyLevelButtonMarketing'
          ).checked = this.prechecked.marketing),
          2 === this.version &&
            (document.getElementById(
              'CybotCookiebotDialogBodyLevelButtonPreferencesInline'
            ) &&
              (document.getElementById(
                'CybotCookiebotDialogBodyLevelButtonPreferencesInline'
              ).checked = this.prechecked.preferences),
            document.getElementById(
              'CybotCookiebotDialogBodyLevelButtonStatisticsInline'
            ) &&
              (document.getElementById(
                'CybotCookiebotDialogBodyLevelButtonStatisticsInline'
              ).checked = this.prechecked.statistics),
            document.getElementById(
              'CybotCookiebotDialogBodyLevelButtonMarketingInline'
            ) &&
              (document.getElementById(
                'CybotCookiebotDialogBodyLevelButtonMarketingInline'
              ).checked = this.prechecked.marketing)),
          this.cookieconsent.hasFramework &&
            'iabv2' === this.cookieconsent.framework.toLowerCase() &&
            !this.cookieconsent.frameworkBlocked &&
            (this.consented || this.declined
              ? this.consent.marketing
                ? this.IABSelectAll()
                : this.IABDeselectAll(!0)
              : this.prechecked.marketing
              ? this.IABSelectAll()
              : this.IABDeselectAll(!0))))
    else {
      var c = this.cookieconsent.getCookie(this.cookieconsent.name),
        piiCheckBox = document.getElementById(
          'CybotCookiebotDialogBodyContentCheckboxPersonalInformation'
        )
      if (void 0 !== c && CookieConsent && !CookieConsent.isNewVersion)
        if (0 === c.indexOf('{')) {
          var consentJSON = c
              .replace(/%2c/g, ',')
              .replace(/'/g, '"')
              .replace(/([{\[,])\s*([a-zA-Z0-9_]+?):/g, '$1"$2":'),
            consentObject = JSON.parse(consentJSON)
          document.getElementById(
            'CybotCookiebotDialogBodyLevelButtonPreferences'
          ) &&
            (document.getElementById(
              'CybotCookiebotDialogBodyLevelButtonPreferences'
            ).checked = consentObject.preferences),
            document.getElementById(
              'CybotCookiebotDialogBodyLevelButtonStatistics'
            ) &&
              (document.getElementById(
                'CybotCookiebotDialogBodyLevelButtonStatistics'
              ).checked = consentObject.statistics),
            document.getElementById(
              'CybotCookiebotDialogBodyLevelButtonMarketing'
            ) &&
              (document.getElementById(
                'CybotCookiebotDialogBodyLevelButtonMarketing'
              ).checked = consentObject.marketing),
            2 === this.version &&
              (document.getElementById(
                'CybotCookiebotDialogBodyLevelButtonPreferencesInline'
              ) &&
                (document.getElementById(
                  'CybotCookiebotDialogBodyLevelButtonPreferencesInline'
                ).checked = consentObject.preferences),
              document.getElementById(
                'CybotCookiebotDialogBodyLevelButtonStatisticsInline'
              ) &&
                (document.getElementById(
                  'CybotCookiebotDialogBodyLevelButtonStatisticsInline'
                ).checked = consentObject.statistics),
              document.getElementById(
                'CybotCookiebotDialogBodyLevelButtonMarketingInline'
              ) &&
                (document.getElementById(
                  'CybotCookiebotDialogBodyLevelButtonMarketingInline'
                ).checked = consentObject.marketing)),
            this.cookieconsent.hasFramework &&
              'iabv2' === this.cookieconsent.framework.toLowerCase() &&
              'object' == typeof CookieConsentIABCMP &&
              !this.cookieconsent.frameworkBlocked &&
              CookieConsentIABCMP.updateBannerFromConsent(),
            'optionaloptin' === this.responseMode &&
              piiCheckBox &&
              (piiCheckBox.checked =
                !consentObject.preferences &&
                !consentObject.statistics &&
                !consentObject.marketing)
        } else
          '0' === c
            ? (document.getElementById(
                'CybotCookiebotDialogBodyLevelButtonPreferences'
              ) &&
                (document.getElementById(
                  'CybotCookiebotDialogBodyLevelButtonPreferences'
                ).checked = !1),
              document.getElementById(
                'CybotCookiebotDialogBodyLevelButtonStatistics'
              ) &&
                (document.getElementById(
                  'CybotCookiebotDialogBodyLevelButtonStatistics'
                ).checked = !1),
              document.getElementById(
                'CybotCookiebotDialogBodyLevelButtonMarketing'
              ) &&
                ((document.getElementById(
                  'CybotCookiebotDialogBodyLevelButtonMarketing'
                ).checked = !1),
                this.cookieconsent.hasFramework &&
                  'iabv2' === this.cookieconsent.framework.toLowerCase() &&
                  !this.cookieconsent.frameworkBlocked &&
                  this.IABDeselectAll(!0)),
              2 === this.version &&
                (document.getElementById(
                  'CybotCookiebotDialogBodyLevelButtonPreferencesInline'
                ) &&
                  (document.getElementById(
                    'CybotCookiebotDialogBodyLevelButtonPreferencesInline'
                  ).checked = !1),
                document.getElementById(
                  'CybotCookiebotDialogBodyLevelButtonStatisticsInline'
                ) &&
                  (document.getElementById(
                    'CybotCookiebotDialogBodyLevelButtonStatisticsInline'
                  ).checked = !1),
                document.getElementById(
                  'CybotCookiebotDialogBodyLevelButtonMarketingInline'
                ) &&
                  (document.getElementById(
                    'CybotCookiebotDialogBodyLevelButtonMarketingInline'
                  ).checked = !1)))
            : '-2' === c &&
              (document.getElementById(
                'CybotCookiebotDialogBodyLevelButtonPreferences'
              ) &&
                (document.getElementById(
                  'CybotCookiebotDialogBodyLevelButtonPreferences'
                ).checked = this.prechecked.preferences),
              document.getElementById(
                'CybotCookiebotDialogBodyLevelButtonStatistics'
              ) &&
                (document.getElementById(
                  'CybotCookiebotDialogBodyLevelButtonStatistics'
                ).checked = this.prechecked.statistics),
              document.getElementById(
                'CybotCookiebotDialogBodyLevelButtonMarketing'
              ) &&
                ((document.getElementById(
                  'CybotCookiebotDialogBodyLevelButtonMarketing'
                ).checked = this.prechecked.marketing),
                this.cookieconsent.hasFramework &&
                  'iabv2' === this.cookieconsent.framework.toLowerCase() &&
                  !this.cookieconsent.frameworkBlocked &&
                  (this.consented || this.declined
                    ? this.consent.marketing
                      ? this.IABSelectAll()
                      : this.IABDeselectAll(!0)
                    : this.prechecked.marketing
                    ? this.IABSelectAll()
                    : this.IABDeselectAll(!0))),
              2 === this.version &&
                (document.getElementById(
                  'CybotCookiebotDialogBodyLevelButtonPreferencesInline'
                ) &&
                  (document.getElementById(
                    'CybotCookiebotDialogBodyLevelButtonPreferencesInline'
                  ).checked = this.prechecked.preferences),
                document.getElementById(
                  'CybotCookiebotDialogBodyLevelButtonStatisticsInline'
                ) &&
                  (document.getElementById(
                    'CybotCookiebotDialogBodyLevelButtonStatisticsInline'
                  ).checked = this.prechecked.statistics),
                document.getElementById(
                  'CybotCookiebotDialogBodyLevelButtonMarketingInline'
                ) &&
                  (document.getElementById(
                    'CybotCookiebotDialogBodyLevelButtonMarketingInline'
                  ).checked = this.prechecked.marketing)))
      else
        document.getElementById(
          'CybotCookiebotDialogBodyLevelButtonPreferences'
        ) &&
          (document.getElementById(
            'CybotCookiebotDialogBodyLevelButtonPreferences'
          ).checked = this.prechecked.preferences),
          document.getElementById(
            'CybotCookiebotDialogBodyLevelButtonStatistics'
          ) &&
            (document.getElementById(
              'CybotCookiebotDialogBodyLevelButtonStatistics'
            ).checked = this.prechecked.statistics),
          document.getElementById(
            'CybotCookiebotDialogBodyLevelButtonMarketing'
          ) &&
            ((document.getElementById(
              'CybotCookiebotDialogBodyLevelButtonMarketing'
            ).checked = this.prechecked.marketing),
            this.cookieconsent.hasFramework &&
              'iabv2' === this.cookieconsent.framework.toLowerCase() &&
              !this.cookieconsent.frameworkBlocked &&
              (this.consented || this.declined
                ? this.consent.marketing
                  ? this.IABSelectAll()
                  : this.IABDeselectAll(!0)
                : this.prechecked.marketing
                ? this.IABSelectAll()
                : this.IABDeselectAll(!0))),
          CookieConsent && (CookieConsent.isNewVersion = !1),
          2 === this.version &&
            (document.getElementById(
              'CybotCookiebotDialogBodyLevelButtonPreferencesInline'
            ) &&
              (document.getElementById(
                'CybotCookiebotDialogBodyLevelButtonPreferencesInline'
              ).checked = this.prechecked.preferences),
            document.getElementById(
              'CybotCookiebotDialogBodyLevelButtonStatisticsInline'
            ) &&
              (document.getElementById(
                'CybotCookiebotDialogBodyLevelButtonStatisticsInline'
              ).checked = this.prechecked.statistics),
            document.getElementById(
              'CybotCookiebotDialogBodyLevelButtonMarketingInline'
            ) &&
              (document.getElementById(
                'CybotCookiebotDialogBodyLevelButtonMarketingInline'
              ).checked = this.prechecked.marketing))
      'optionaloptin' === this.responseMode &&
        piiCheckBox &&
        this.cookieconsent.hasFramework &&
        'iabv2' === this.cookieconsent.framework.toLowerCase() &&
        !this.cookieconsent.frameworkBlocked &&
        piiCheckBox.addEventListener('click', function () {
          this.checked
            ? CookieConsent.dialog.IABDeselectAll(!0)
            : CookieConsent.dialog.IABSelectAll()
        })
    }
    hookupNavEvents(),
      hookupTabEvents('CybotCookiebotDialogDetailBodyContentIABv2Tab'),
      hookupCookieEvents(
        'CybotCookiebotDialogDetailBodyContentCookieProvider',
        'CybotCookiebotDialogDetailBodyContentCookieInfo'
      ),
      hookupCookieEvents(
        'CybotCookiebotDialogBodyLevelButton CybotCookiebotDialogBodyIABButtonVendors',
        'CybotCookiebotDialogBodyLevelButtonIABDescription'
      ),
      hookupTabEvents(
        'CybotCookiebotDialogDetailBodyContentCookieContainerButton'
      ),
      hookupButtonEvents(),
      hookupCheckboxEvents(),
      hookupTabEvents('CybotExpandLink'),
      handleClickById('CybotCookiebotDialogBodyEdgeMoreDetailsLink', function (
        e
      ) {
        e.preventDefault(),
          CookieConsent.dialog.toggleDetails(e),
          window.removeEventListener('resize', Cookiebot.dialog.resize)
        var scrollContainer = document.querySelector(
          '.CybotCookiebotScrollContainer'
        )
        scrollContainer.style.minHeight = null
      }),
      this.afterToggleStateChange(),
      1 === this.version
        ? (this.DOM.style.display = 'block')
        : (this.DOM.style.display = 'flex'),
      'function' == typeof CookiebotCallback_OnDialogDisplay
        ? CookiebotCallback_OnDialogDisplay()
        : 'function' == typeof CookieConsentCallback_OnDialogDisplay &&
          CookieConsentCallback_OnDialogDisplay()
    var event = document.createEvent('Event')
    if (
      (event.initEvent('CookiebotOnDialogDisplay', !0, !0),
      window.dispatchEvent(event),
      (event = document.createEvent('Event')),
      event.initEvent('CookieConsentOnDialogDisplay', !0, !0),
      window.dispatchEvent(event),
      1 === this.version)
    )
      switch (this.template) {
        case 'top':
          this.showAtTop()
          break
        case 'bottom':
          this.showAtBottom()
          break
        case 'slidedown':
          this.slideDown()
          break
        case 'pushdown':
          document.body &&
            document.body.style.paddingTop &&
            (this.bodyPaddingTopInit = this.TryParseInt(
              document.body.style.paddingTop,
              0
            )),
            this.pushDown()
          break
        case 'slideup':
          ;(this.DOM.style.paddingBottom = '18px'), this.slideUp()
          break
        case 'popup':
        case 'overlay':
          ;(this.DOM.style.marginLeft = '0px'),
            (this.DOM.style.marginTop = '0px'),
            (this.DOM.style.width = 'auto'),
            (this.DOM.style.height = 'auto')
          var DialogHeight = this.DOM.offsetHeight,
            newTop = Math.round((this.viewport.winHeight() - DialogHeight) / 4)
          newTop < 0 && (newTop = 0), (this.DOM.style.marginTop = newTop + 'px')
          var DialogWidth = this.DOM.offsetWidth,
            newLeft = Math.round(
              (this.viewport.winWidth() - DialogWidth) / 2 - 10
            )
          if (
            (newLeft < 0 && (newLeft = 0),
            (this.DOM.style.marginLeft = newLeft + 'px'),
            'overlay' === this.template)
          ) {
            var underlay = document.createElement('div')
            ;(underlay.id = 'CybotCookiebotDialogBodyUnderlay'),
              (underlay.style.display = 'none'),
              (underlay.style.width = '100%'),
              (underlay.style.height = '100%')
            var bodyObj = document.getElementsByTagName('body')[0]
            bodyObj.appendChild(underlay)
          }
          this.fadeIn()
          break
        case 'custom':
          this.runCustomScript(this.customTemplateDef.FunctionShowName, 'show')
      }
    else {
      var activeTemplate = this.template.split('-')[0]
      if (
        (this.DOM.setAttribute('data-template', activeTemplate),
        'overlay' === activeTemplate)
      ) {
        var overlay = document.createElement('div')
        ;(overlay.id = 'CybotCookiebotDialogBodyUnderlay'),
          this.DOM.parentNode.insertBefore(overlay, this.DOM.nextSibling),
          (document.body.style.overflow = 'hidden')
      }
    }
    function hookupCheckboxEvents () {
      var checkboxes = document.getElementsByClassName(
        'CybotCookiebotDialogBodyLevelConsentCheckbox'
      )
      function onCheckboxClick (e) {
        var checkboxValue = e.target.checked,
          target = e.target.getAttribute('data-target')
        if (target) {
          var elem = document.getElementById(target)
          elem && (elem.checked = checkboxValue)
        }
        that.afterToggleStateChange()
      }
      for (var i = 0; i < checkboxes.length; i++)
        checkboxes[i].addEventListener('click', onCheckboxClick, !1)
    }
    function hookupNavEvents () {
      var tabs = document.getElementsByClassName(
          'CybotCookiebotDialogNavItemLink'
        ),
        panels = document.getElementsByClassName('CybotCookiebotDialogTabPanel')
      function onTabClick (e) {
        e.preventDefault()
        for (var i = 0; i < tabs.length; i++)
          tabs[i].classList.remove('CybotCookiebotDialogActive'),
            tabs[i].setAttribute('aria-selected', !1)
        for (var j = 0; j < panels.length; j++) {
          var panel = panels[j]
          that.setVisibility(panel, 'hide'),
            panel.parentNode.classList.contains(
              'CybotCookiebotScrollContainer'
            ) &&
              (that.setVisibility(panel.parentNode, 'hide'),
              panel.parentNode.classList.remove('CybotCookiebotDialogActive'))
        }
        e.currentTarget.classList.add('CybotCookiebotDialogActive'),
          e.currentTarget.setAttribute('aria-selected', !0)
        var id = e.currentTarget.getAttribute('data-target')
        if (id) {
          var tab = document.getElementById(id)
          that.setVisibility(tab, 'show'),
            tab.parentNode.classList.contains(
              'CybotCookiebotScrollContainer'
            ) &&
              (that.setVisibility(tab.parentNode, 'show'),
              tab.parentNode.classList.add('CybotCookiebotDialogActive'))
        }
        that.checkCustomizeButtonState()
      }
      for (var k = 0; k < tabs.length; k++)
        tabs[k].addEventListener('click', onTabClick, !1)
    }
    function hookupTabEvents (className) {
      var els = document.getElementsByClassName(className)
      function onElementClick (e) {
        e.preventDefault(),
          e.currentTarget.classList.toggle('CybotCookiebotDialogCollapsed')
        var id = e.currentTarget.getAttribute('data-target')
        if (id) {
          var toggleClass =
              1 === this.version
                ? 'CybotCookiebotDialogShow'
                : 'CybotCookiebotDialogHide',
            target = document.getElementById(id)
          target.classList.toggle(toggleClass)
          var isExpanded = null !== target.offsetParent
          target.setAttribute('aria-expanded', isExpanded)
        }
      }
      for (var k = 0; k < els.length; k++)
        els[k].addEventListener('click', onElementClick, !1)
    }
    function hookupCookieEvents (className, targetClassName) {
      var els = document.getElementsByClassName(className)
      function onElementClick (e) {
        var element = e.currentTarget
        element.classList.toggle('CybotCookiebotDialogCollapsed'),
          element.parentNode.classList.toggle('open')
        var isExpandButton = element.classList.contains(
            'CybotCookiebotDialogDetailBodyContentCookieProvider'
          ),
          parentNode = element.parentNode
        if (parentNode) {
          var infos = parentNode.getElementsByClassName(targetClassName)
          if (infos)
            for (var j = 0; j < infos.length; j++) {
              var info = infos[j]
              if (
                (info.classList.toggle('CybotCookiebotDialogShow'),
                isExpandButton)
              ) {
                var isExpanded = null !== info.offsetParent
                info.setAttribute('aria-expanded', isExpanded)
              }
            }
        }
      }
      for (var k = 0; k < els.length; k++)
        els[k].addEventListener('click', onElementClick, !1)
    }
    function handleClickById (id, handler) {
      var el = document.getElementById(id)
      if (el) {
        var elHref = el.getAttribute('href')
        if (elHref) {
          var substring = 'javascript:'
          0 !== elHref.toLowerCase().indexOf(substring) &&
            el.addEventListener('click', function (e) {
              handler(e)
            })
        }
      }
    }
    function handleClickByClass (id, handler) {
      var els = document.getElementsByClassName(id)
      if (els)
        for (var i = 0; i < els.length; i++) {
          var elHref = els[i].getAttribute('href')
          if (elHref) {
            var substring = 'javascript:'
            0 !== elHref.toLowerCase().indexOf(substring) &&
              els[i].addEventListener('click', function (e) {
                handler(e)
              })
          }
        }
    }
    function hookupButtonEvents () {
      var AcceptButton = document.getElementById(
          'CybotCookiebotDialogBodyButtonAccept'
        ),
        DeclineButton = document.getElementById(
          'CybotCookiebotDialogBodyButtonDecline'
        ),
        LevelAcceptButton = document.getElementById(
          'CybotCookiebotDialogBodyLevelButtonAccept'
        ),
        AllowAllButton = document.getElementById(
          'CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll'
        ),
        AllowSelectionButton = document.getElementById(
          'CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection'
        ),
        DeclineAllButton = document.getElementById(
          'CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll'
        ),
        CustomizeButton = document.getElementById(
          'CybotCookiebotDialogBodyLevelButtonCustomize'
        ),
        preferencesCheckBox = document.getElementById(
          'CybotCookiebotDialogBodyLevelButtonPreferences'
        ),
        statisticsCheckBox = document.getElementById(
          'CybotCookiebotDialogBodyLevelButtonStatistics'
        ),
        marketingCheckBox = document.getElementById(
          'CybotCookiebotDialogBodyLevelButtonMarketing'
        ),
        isTemplate = 'custom' === that.template
      if (
        (AcceptButton &&
          ('optionaloptin' === that.responseMode
            ? AcceptButton.addEventListener(
                'click',
                function (e) {
                  e.preventDefault()
                  var acceptCookies = !0,
                    doNotSellMyPersonalInformationCheckbox = document.getElementById(
                      'CybotCookiebotDialogBodyContentCheckboxPersonalInformation'
                    )
                  return (
                    doNotSellMyPersonalInformationCheckbox &&
                      doNotSellMyPersonalInformationCheckbox.checked &&
                      (acceptCookies = !1),
                    acceptCookies
                      ? that.submitConsent(!1)
                      : that.submitDecline(e),
                    !1
                  )
                },
                !1
              )
            : AcceptButton.addEventListener(
                'click',
                function (e) {
                  return e.preventDefault(), that.submitConsent(!1), !1
                },
                !1
              ),
          AcceptButton.focus()),
        LevelAcceptButton &&
          (LevelAcceptButton.addEventListener(
            'click',
            function (e) {
              e.preventDefault(), that.submitConsent(!1)
            },
            !1
          ),
          LevelAcceptButton.focus()),
        AllowSelectionButton &&
          (AllowSelectionButton.addEventListener(
            'click',
            function (e) {
              e.preventDefault(), that.submitConsent(!1)
            },
            !1
          ),
          AllowSelectionButton.focus()),
        AllowAllButton &&
          (AllowAllButton.addEventListener(
            'click',
            function (e) {
              e.preventDefault(),
                preferencesCheckBox && (preferencesCheckBox.checked = !0),
                statisticsCheckBox && (statisticsCheckBox.checked = !0),
                marketingCheckBox && (marketingCheckBox.checked = !0),
                CookieConsent.dialog.cookieconsent.hasFramework &&
                  'iabv2' ===
                    CookieConsent.dialog.cookieconsent.framework.toLowerCase() &&
                  !CookieConsent.dialog.cookieconsent.frameworkBlocked &&
                  CookieConsent.dialog.IABSelectAll(!0),
                that.submitConsent(!1)
            },
            !1
          ),
          AllowAllButton.focus()),
        DeclineButton &&
          (DeclineButton.addEventListener(
            'click',
            function (e) {
              return e.preventDefault(), that.submitDecline(e), !1
            },
            !1
          ),
          DeclineButton.focus()),
        DeclineAllButton &&
          (DeclineAllButton.addEventListener(
            'click',
            function (e) {
              return e.preventDefault(), that.submitDecline(e), !1
            },
            !1
          ),
          DeclineAllButton.focus()),
        CustomizeButton &&
          CustomizeButton.addEventListener('click', function (e) {
            return (
              e.preventDefault(),
              that.ShowNavigationTab('CybotCookiebotDialogNavDetails'),
              !1
            )
          }),
        'leveloptin' === that.responseMode ||
          'inlineoptin' === that.responseMode)
      ) {
        var neceCheckBox = document.getElementById(
            'CybotCookiebotDialogBodyLevelButtonNecessary'
          ),
          neceCheckBoxInline = document.getElementById(
            'CybotCookiebotDialogBodyLevelButtonNecessaryInline'
          )
        if (neceCheckBox) {
          var clickTarget =
            1 === that.version && 'inlineoptin' === that.responseMode
              ? neceCheckBox.nextElementSibling
              : neceCheckBox.parentNode
          clickTarget &&
            clickTarget.addEventListener(
              'click',
              function (e) {
                alert(
                  that.mandatoryText +
                    ' ' +
                    that.htmlDecode(that.cookieIntroTypeNecessary)
                )
              },
              !1
            )
        }
        neceCheckBoxInline &&
          2 === that.version &&
          neceCheckBoxInline.parentNode.addEventListener(
            'click',
            function (e) {
              alert(
                that.mandatoryText +
                  ' ' +
                  that.htmlDecode(that.cookieIntroTypeNecessary)
              )
            },
            !1
          )
        var detailShowHideWrapper = document.getElementById(
          'CybotCookiebotDialogBodyLevelDetailsWrapper'
        )
        detailShowHideWrapper &&
          detailShowHideWrapper.addEventListener(
            'click',
            function (event) {
              return CookieConsent.dialog.toggleDetails(), !1
            },
            !1
          ),
          handleClickById(
            'CybotCookiebotDialogBodyLevelDetailsButton',
            function (e) {
              e.preventDefault()
            }
          )
      }
      if (
        (isTemplate ||
          handleClickById('CybotCookiebotDialogBodyButtonDetails', function (
            e
          ) {
            e.preventDefault(), CookieConsent.dialog.toggleDetails()
          }),
        handleClickById(
          'CybotCookiebotDialogBodyContentTextShowIABVendors',
          function (e) {
            e.preventDefault(), CookieConsent.dialog.ShowIABVendors(e)
          }
        ),
        handleClickById(
          'CybotCookiebotDialogBodyContentTextToggleDetails',
          function (e) {
            e.preventDefault(), CookieConsent.dialog.toggleDetails(e)
          }
        ),
        handleClickById(
          'CybotCookiebotDialogDetailBodyContentTabsOverview',
          function (e) {
            e.preventDefault(), CookieConsent.dialog.showDetailPane('overview')
          }
        ),
        handleClickById(
          'CybotCookiebotDialogDetailBodyContentTabsIABv2',
          function (e) {
            e.preventDefault(), CookieConsent.dialog.showDetailPane('iabv2')
          }
        ),
        handleClickById(
          'CybotCookiebotDialogDetailBodyContentTabsAbout',
          function (e) {
            e.preventDefault(), CookieConsent.dialog.showDetailPane('about')
          }
        ),
        handleClickById(
          'CybotCookiebotDialogDetailBodyContentCookieContainerNecessary',
          function (e) {
            'A' === e.target.tagName && e.preventDefault(),
              CookieConsent.dialog.showCookieContainerDetailPane('necessary')
          }
        ),
        handleClickById(
          'CybotCookiebotDialogDetailBodyContentCookieContainerPreference',
          function (e) {
            'A' === e.target.tagName && e.preventDefault(),
              CookieConsent.dialog.showCookieContainerDetailPane('preference')
          }
        ),
        handleClickById(
          'CybotCookiebotDialogDetailBodyContentCookieContainerStatistics',
          function (e) {
            'A' === e.target.tagName && e.preventDefault(),
              CookieConsent.dialog.showCookieContainerDetailPane('statistics')
          }
        ),
        handleClickById(
          'CybotCookiebotDialogDetailBodyContentCookieContainerAdvertising',
          function (e) {
            'A' === e.target.tagName && e.preventDefault(),
              CookieConsent.dialog.showCookieContainerDetailPane('advertising')
          }
        ),
        handleClickById(
          'CybotCookiebotDialogDetailBodyContentCookieContainerUnclassified',
          function (e) {
            'A' === e.target.tagName && e.preventDefault(),
              CookieConsent.dialog.showCookieContainerDetailPane('unclassified')
          }
        ),
        handleClickById(
          'CybotCookiebotDialogDetailBodyContentIABv2Purposes',
          function (e) {
            e.preventDefault(),
              CookieConsent.dialog.showCookieContainerIABv2DetailPane(
                'purposes'
              )
          }
        ),
        handleClickById(
          'CybotCookiebotDialogDetailBodyContentIABv2Features',
          function (e) {
            e.preventDefault(),
              CookieConsent.dialog.showCookieContainerIABv2DetailPane(
                'features'
              )
          }
        ),
        handleClickById(
          'CybotCookiebotDialogDetailBodyContentIABv2Partners',
          function (e) {
            e.preventDefault(),
              CookieConsent.dialog.showCookieContainerIABv2DetailPane(
                'partners'
              )
          }
        ),
        handleClickById(
          'CybotCookiebotDialogBodyLevelButtonIABHeaderToggleSelectAllLink',
          function (e) {
            e.preventDefault(), CookieConsent.dialog.IABSelectPurposes()
          }
        ),
        handleClickById(
          'CybotCookiebotDialogBodyLevelButtonIABHeaderToggleDeselectAllLink',
          function (e) {
            e.preventDefault(), CookieConsent.dialog.IABDeselectPurposes()
          }
        ),
        handleClickById(
          'CybotCookiebotDialogBodyLevelButtonIABHeaderViewPartnersLink',
          function (e) {
            e.preventDefault(),
              CookieConsent.dialog.showCookieContainerIABv2DetailPane(
                'partners'
              )
          }
        ),
        handleClickById(
          'CybotCookiebotDialogBodyLevelButtonIABHeaderToggleSelectAllPurposesLink',
          function (e) {
            e.preventDefault(), CookieConsent.dialog.IABSelectPurposes()
          }
        ),
        handleClickById(
          'CybotCookiebotDialogBodyLevelButtonIABHeaderToggleDeselectAllPurposesLink',
          function (e) {
            e.preventDefault(), CookieConsent.dialog.IABDeselectPurposes()
          }
        ),
        handleClickById(
          'CybotCookiebotDialogBodyLevelButtonIABHeaderToggleSelectAllFeaturesLink',
          function (e) {
            e.preventDefault(), CookieConsent.dialog.IABSelectFeatures()
          }
        ),
        handleClickById(
          'CybotCookiebotDialogBodyLevelButtonIABHeaderToggleDeselectAllFeaturesLink',
          function (e) {
            e.preventDefault(), CookieConsent.dialog.IABDeselectFeatures()
          }
        ),
        handleClickByClass(
          'CybotCookiebotDialogBodyLevelButtonIABHeaderToggleSelectVendorsLink',
          function (e) {
            e.preventDefault(), CookieConsent.dialog.IABSelectVendors()
          }
        ),
        handleClickByClass(
          'CybotCookiebotDialogBodyLevelButtonIABHeaderToggleDeselectVendorsLink',
          function (e) {
            e.preventDefault(), CookieConsent.dialog.IABDeselectVendors()
          }
        ),
        handleClickByClass(
          'CybotCookiebotDialogBodyLevelButtonIABShowDetails',
          function (e) {
            e.preventDefault(),
              CookieConsent.dialog.IABShowDetailedInformation.bind(
                CookieConsent.dialog
              )(e.currentTarget || e.srcElement)
          }
        ),
        that.bannerCloseButtonEnabled && 2 === that.version)
      ) {
        that.DOM.classList.add('CybotCloseButtonEnabled')
        for (
          var buttons = document.querySelectorAll(
              '.CybotCookiebotBannerCloseButton'
            ),
            n = 0;
          n < buttons.length;
          n++
        ) {
          var button = buttons[n]
          button.addEventListener(
            'click',
            function (e) {
              that.submitDecline(e)
            },
            !1
          )
        }
      }
      var els = document.getElementsByClassName(
        'CybotCookiebotDialogBodyLevelButtonIABContainerToggleShow'
      )
      if (els)
        for (var i = 0; i < els.length; i++)
          !(function (index) {
            var elIabVendorId = els[index].getAttribute('data-iabvendorid')
            elIabVendorId &&
              els[index].addEventListener('click', function (e) {
                e.preventDefault(),
                  that.IABToggleContainer(
                    'CybotCookiebotDialogBodyLevelButtonIABVendorContainer' +
                      elIabVendorId
                  )
              })
            var elGoogleVendorId = els[index].getAttribute(
              'data-googlevendorid'
            )
            elGoogleVendorId &&
              els[index].addEventListener('click', function (e) {
                e.preventDefault(),
                  that.IABToggleContainer(
                    'CybotCookiebotDialogBodyLevelButtonGoogleVendorContainer' +
                      elGoogleVendorId
                  )
              })
          })(i)
    }
    function setOptionTitles () {
      var optionButNec = document.getElementById(
        'CybotCookiebotDialogBodyLevelButtonNecessary'
      )
      optionButNec &&
        (optionButNec.parentNode.title =
          that.htmlDecode(that.mandatoryText) +
          ' ' +
          that.htmlDecode(
            that.cookieIntroTypeNecessary.replace(/<[^>]*>?/gm, '')
          ))
      var optionButPref = document.getElementById(
        'CybotCookiebotDialogBodyLevelButtonPreferences'
      )
      optionButPref &&
        (optionButPref.parentNode.title = that.htmlDecode(
          that.cookieIntroTypePreference.replace(/<[^>]*>?/gm, '')
        ))
      var optionButStat = document.getElementById(
        'CybotCookiebotDialogBodyLevelButtonStatistics'
      )
      optionButStat &&
        (optionButStat.parentNode.title = that.htmlDecode(
          that.cookieIntroTypeStatistics.replace(/<[^>]*>?/gm, '')
        ))
      var optionButAdve = document.getElementById(
        'CybotCookiebotDialogBodyLevelButtonMarketing'
      )
      optionButAdve &&
        (optionButAdve.parentNode.title = that.htmlDecode(
          that.cookieIntroTypeAdvertising.replace(/<[^>]*>?/gm, '')
        ))
    }
    2 === this.version &&
      ((this.bannerOpenFocusElement = document.activeElement),
      this.updateVisibleFocusableElements(),
      this.trapBannerFocus()),
      2 === this.version &&
        'pushdown-v2' === this.template &&
        (window.matchMedia('(min-width: 640px)').matches && this.pushDown(),
        document.body &&
          window.addEventListener('resize', function () {
            var paddingTop = parseInt(
                document.body.style.paddingTop.split('px')[0]
              ),
              dialogHeight = parseInt(CookieConsent.dialog.DOM.offsetHeight)
            window.matchMedia('(min-width: 640px)').matches
              ? (document.body.style.paddingTop =
                  dialogHeight + CookieConsent.dialog.bodyPaddingTopInit + 'px')
              : paddingTop > 0 && (document.body.style.paddingTop = null)
          })),
      setTimeout(function () {
        that.setButtonsSize(), that.setZoomLevel()
      }, 50),
      2 === this.version &&
        (this.initContentFader(),
        this.DOM.classList.add('CybotCookiebotDialogActive'),
        -1 === this.template.indexOf('overlay') &&
          -1 === this.template.indexOf('popup') &&
          'leveloptin' === this.responseMode &&
          (this.resize(), window.addEventListener('resize', this.resize)))
  }),
  (CookieControl.Dialog.prototype.getVisibleFocusableElements = function () {
    this.DOM.id ? (this.DOMid = this.DOM.id) : (this.DOM.id = this.DOMid)
    var focusableArray = [],
      dialogContainer = document.getElementById(this.DOMid)
    if (dialogContainer)
      for (
        var focusableEls = dialogContainer.querySelectorAll(
            'a[href]:not([disabled]), button:not([disabled]), input[type="checkbox"]:not([disabled])'
          ),
          i = 0;
        i < focusableEls.length;
        i++
      )
        null !== focusableEls[i].offsetParent &&
          focusableArray.push(focusableEls[i])
    return focusableArray
  }),
  (CookieControl.Dialog.prototype.updateVisibleFocusableElements = function (
    setFocus
  ) {
    if (!this.demomode && 'custom' !== this.template) {
      var focusableEls = this.getVisibleFocusableElements()
      focusableEls.length > 0 &&
        ((this.bannerFirstFocusElement = focusableEls[0]),
        (this.bannerLastFocusElement = focusableEls[focusableEls.length - 1]),
        null != this.bannerFirstFocusElement &&
          setFocus &&
          focusableEls[1].focus())
    }
  }),
  (CookieControl.Dialog.prototype.trapBannerFocus = function () {
    if (!this.demomode && 'custom' !== this.template) {
      var dialogContainer = document.getElementById(this.DOMid)
      dialogContainer &&
        dialogContainer.addEventListener('keydown', this.onKeydownfunction, !1)
    }
  }),
  (CookieControl.Dialog.prototype.releaseBannerFocus = function () {
    if (!this.demomode && 'custom' !== this.template) {
      var dialogContainer = document.getElementById(this.DOMid)
      dialogContainer &&
        dialogContainer.removeEventListener('keydown', this.onKeydownfunction),
        this.bannerOpenFocusElement &&
          (this.bannerOpenFocusElement.focus(),
          (this.bannerOpenFocusElement = null),
          (this.bannerLastFocusElement = null))
    }
  }),
  (CookieControl.Dialog.prototype.runCustomScript = function (funcName, txt) {
    this.createCustomScript()
    try {
      var fn = new Function('return ' + funcName)()
      'function' == typeof fn && fn()
    } catch (_) {
      console.log(
        'Custom cookie banner %s function not found: %s - please check your custom script.',
        txt,
        funcName
      )
    }
  }),
  (CookieControl.Dialog.prototype.createCustomScript = function () {
    if (!this.customScriptInitialized) {
      this.customScriptInitialized = !0
      var src = this.customTemplateDef.Script
      if (void 0 !== src && '' !== src)
        if (window.execScript) window.execScript(src)
        else {
          var s = document.createElement('script')
          ;(s.type = 'text/javascript'), (s.id = 'CookiebotCustomScript')
          try {
            s.appendChild(document.createTextNode(src)),
              document.body.appendChild(s)
          } catch (e) {
            ;(s.text = src), document.body.appendChild(s)
          }
        }
    }
  }),
  (CookieControl.Dialog.prototype.TryParseInt = function (str, defaultValue) {
    var retValue = defaultValue
    return (
      null !== str &&
        str.length > 0 &&
        (isNaN(str) || (retValue = parseInt(str))),
      retValue
    )
  }),
  (CookieControl.Dialog.prototype.resetZoomLevel = function () {
    if (1 === this.version) {
      var contentElement = this.DOM,
        supportsTransforms =
          'webkitTransform' in document.body.style ||
          'MozTransform' in document.body.style ||
          'msTransform' in document.body.style ||
          'OTransform' in document.body.style ||
          'transform' in document.body.style
      null != contentElement &&
        'custom' !== this.template &&
        supportsTransforms &&
        ((contentElement.style.transform = ''),
        (contentElement.style.webkitTransform = ''),
        (contentElement.style.msTransform = ''),
        (contentElement.style.MozTransform = ''),
        (contentElement.style.OTransform = ''),
        (contentElement.style.transformOrigin = ''),
        (contentElement.style.webkitTransformOrigin = ''),
        (contentElement.style.msTransformOrigin = ''),
        (contentElement.style.MozTransformOrigin = ''),
        (contentElement.style.OTransformOrigin = ''))
    }
  }),
  (CookieControl.Dialog.prototype.setZoomLevel = function () {
    if (1 === this.version) {
      var scalefactor = 1,
        scalefactorX = 1,
        scalefactorY = 1,
        contentElement = this.DOM,
        supportsTransforms =
          'webkitTransform' in document.body.style ||
          'MozTransform' in document.body.style ||
          'msTransform' in document.body.style ||
          'OTransform' in document.body.style ||
          'transform' in document.body.style
      if (
        null != contentElement &&
        'custom' !== this.template &&
        supportsTransforms
      ) {
        this.resetZoomLevel(),
          (contentElement.style.width = this.initWidth),
          (contentElement.style.height = this.initHeight)
        var DialogHeight = contentElement.scrollHeight,
          DialogWidth = contentElement.scrollWidth
        ;('overlay' !== this.template && 'popup' !== this.template) ||
          ((DialogHeight += 36), (DialogWidth += 36))
        var ViewportHeight = this.viewport.winHeight(),
          ViewportWidth = this.viewport.winWidth()
        if (
          (DialogHeight > ViewportHeight || DialogWidth > ViewportWidth) &&
          ((scalefactorX = ViewportWidth / (DialogWidth + 0)),
          (scalefactorY = ViewportHeight / (DialogHeight + 0)),
          (scalefactor =
            Math.round(100 * Math.min(scalefactorY, scalefactorX)) / 100),
          scalefactorX > 0.1)
        ) {
          switch (this.template) {
            case 'top':
            case 'slidedown':
            case 'pushdown':
              ;(contentElement.style.transform = 'scale(' + scalefactor + ')'),
                (contentElement.style.webkitTransform =
                  'scale(' + scalefactor + ')'),
                (contentElement.style.msTransform =
                  'scale(' + scalefactor + ')'),
                (contentElement.style.MozTransform =
                  'scale(' + scalefactor + ')'),
                (contentElement.style.OTransform =
                  'scale(' + scalefactor + ')'),
                (contentElement.style.transformOrigin = '0 0'),
                (contentElement.style.webkitTransformOrigin = '0 0'),
                (contentElement.style.msTransformOrigin = '0 0'),
                (contentElement.style.MozTransformOrigin = '0 0'),
                (contentElement.style.OTransformOrigin = '0 0'),
                (contentElement.style.width =
                  Math.floor(ViewportWidth * (1 / scalefactor)) + 'px'),
                'pushdown' === this.template &&
                  document.body &&
                  (document.body.style.paddingTop =
                    this.bodyPaddingTopInit +
                    Math.floor(parseInt(this.DOM.offsetHeight) * scalefactor) +
                    'px')
              break
            case 'bottom':
            case 'slideup':
              ;(contentElement.style.transform = 'scale(' + scalefactor + ')'),
                (contentElement.style.webkitTransform =
                  'scale(' + scalefactor + ')'),
                (contentElement.style.msTransform =
                  'scale(' + scalefactor + ')'),
                (contentElement.style.MozTransform =
                  'scale(' + scalefactor + ')'),
                (contentElement.style.OTransform =
                  'scale(' + scalefactor + ')'),
                (contentElement.style.transformOrigin = '0px bottom'),
                (contentElement.style.webkitTransformOrigin = '0px bottom'),
                (contentElement.style.msTransformOrigin = '0px bottom'),
                (contentElement.style.MozTransformOrigin = '0px bottom'),
                (contentElement.style.OTransformOrigin = '0px bottom'),
                (contentElement.style.width =
                  Math.floor(ViewportWidth * (1 / scalefactor)) + 'px')
              break
            case 'overlay':
            case 'popup':
              ;(this.DOM.style.marginTop = '0'),
                (scalefactor =
                  Math.round(
                    100 *
                      Math.min(
                        ViewportHeight / (DialogHeight + 0),
                        ViewportWidth / (DialogWidth + 0)
                      )
                  ) / 100),
                (this.DOM.style.transform = 'scale(' + scalefactor + ')'),
                (this.DOM.style.webkitTransform = 'scale(' + scalefactor + ')'),
                (this.DOM.style.msTransform = 'scale(' + scalefactor + ')'),
                (this.DOM.style.MozTransform = 'scale(' + scalefactor + ')'),
                (this.DOM.style.OTransform = 'scale(' + scalefactor + ')')
              var transformOriginX = 'center',
                transformOriginY = 'top'
              DialogWidth > ViewportWidth && (transformOriginX = '0'),
                DialogHeight > ViewportHeight && (transformOriginY = '0'),
                (this.DOM.style.transformOrigin =
                  transformOriginX + ' ' + transformOriginY),
                (this.DOM.style.webkitTransformOrigin =
                  transformOriginX + ' ' + transformOriginY),
                (this.DOM.style.msTransformOrigin =
                  transformOriginX + ' ' + transformOriginY),
                (this.DOM.style.MozTransformOrigin =
                  transformOriginX + ' ' + transformOriginY),
                (this.DOM.style.OTransformOrigin =
                  transformOriginX + ' ' + transformOriginY)
          }
          this.scalefactor = scalefactor
        }
      }
    }
  }),
  (CookieControl.Dialog.prototype.setButtonsSize = function () {
    if ('custom' !== this.template && 1 === this.version) {
      var AcceptButton = document.getElementById(
          'CybotCookiebotDialogBodyButtonAccept'
        ),
        DeclineButton = document.getElementById(
          'CybotCookiebotDialogBodyButtonDecline'
        ),
        buttonWidth = 0
      switch (this.responseMode) {
        case 'optin':
        case 'optionaloptin':
        case 'inlineoptin':
          AcceptButton &&
            ((AcceptButton.style.paddingLeft = '12px'),
            (AcceptButton.style.paddingRight = '12px'))
          break
        case 'optout':
          DeclineButton &&
            ((DeclineButton.style.paddingLeft = '12px'),
            (DeclineButton.style.paddingRight = '12px'))
          break
        case 'optinout':
          if (AcceptButton && DeclineButton) {
            var AcceptButtonWidth = AcceptButton.offsetWidth - 10,
              DeclineButtonWidth = DeclineButton.offsetWidth - 10
            ;(buttonWidth = Math.max(AcceptButtonWidth, DeclineButtonWidth)),
              (buttonWidth = Math.max(80, buttonWidth)),
              buttonWidth > 0 &&
                ((AcceptButton.style.width = buttonWidth + 'px'),
                (DeclineButton.style.width = buttonWidth + 'px'))
          }
          break
        case 'leveloptin':
          var MultiAcceptButton = document.getElementById(
              'CybotCookiebotDialogBodyLevelButtonAccept'
            ),
            MultiDialogWrapper = document.getElementById(
              'CybotCookiebotDialogBodyLevelWrapper'
            ),
            MultiDialogSelector = document.getElementById(
              'CybotCookiebotDialogBodyLevelButtonsRow'
            ),
            newMargin = 0
          if (MultiDialogSelector) {
            document.getElementById(
              'CybotCookiebotDialogBodyLevelButtonsTable'
            ).style.width = 'auto'
            var multiButtonWidth = MultiAcceptButton.offsetWidth,
              multiDialogWidth = MultiDialogWrapper.offsetWidth,
              multiSelectorWidth = MultiDialogSelector.offsetWidth,
              multiMargin = 8,
              multiSpace = multiMargin + 4,
              inPopupMode = !1
            ;('overlay' !== this.template && 'popup' !== this.template) ||
              ((inPopupMode = !0), (multiMargin = 24), (multiSpace = 28))
            var scaleLevelButtonsTableToFullWidth =
              multiSelectorWidth + multiButtonWidth + multiSpace >
              multiDialogWidth
            if (scaleLevelButtonsTableToFullWidth)
              try {
                document.getElementById(
                  'CybotCookiebotDialogBodyLevelButtonsTable'
                ).style.width = multiDialogWidth - multiMargin + 'px'
              } catch (err) {}
            else {
              try {
                document.getElementById(
                  'CybotCookiebotDialogBodyLevelButtonsTable'
                ).style.width = 'auto'
              } catch (err) {}
              if (
                ('rtl' === this.textDirection
                  ? (document.getElementById(
                      'CybotCookiebotDialogBodyLevelButtons'
                    ).style.float = 'right')
                  : (document.getElementById(
                      'CybotCookiebotDialogBodyLevelButtons'
                    ).style.float = 'left'),
                (document.getElementById(
                  'CybotCookiebotDialogBodyLevelButtons'
                ).style.pointerEvents = 'auto'),
                !inPopupMode)
              ) {
                var bodyTextContainer = document.getElementById(
                  'CybotCookiebotDialogBodyContentText'
                )
                if (bodyTextContainer) {
                  var bodyTextContainerWidth = bodyTextContainer.offsetWidth,
                    LevelButtonsPanel = document.getElementById(
                      'CybotCookiebotDialogBodyLevelButtons'
                    )
                  LevelButtonsPanel &&
                    (multiSelectorWidth + multiButtonWidth + 4 <=
                    bodyTextContainerWidth
                      ? ((newMargin =
                          document.getElementById(
                            'CybotCookiebotDialogBodyContent'
                          ).offsetWidth -
                          bodyTextContainerWidth -
                          2),
                        (!this.showLogo ||
                          this.viewport.winWidth() <= this.autoHideLogoWidth) &&
                          (newMargin += 2),
                        'rtl' === this.textDirection
                          ? ((LevelButtonsPanel.style.marginLeft = '0px'),
                            (LevelButtonsPanel.style.marginRight =
                              newMargin + 'px'))
                          : ((LevelButtonsPanel.style.marginLeft =
                              newMargin + 'px'),
                            (LevelButtonsPanel.style.marginRight = '0px')))
                      : 'rtl' === this.textDirection
                      ? ((LevelButtonsPanel.style.marginLeft = '0px'),
                        (LevelButtonsPanel.style.marginRight = '8px'))
                      : ((LevelButtonsPanel.style.marginLeft = '8px'),
                        (LevelButtonsPanel.style.marginRight = '0px')))
                }
              }
            }
          }
          var AllowAllButton = document.getElementById(
              'CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll'
            ),
            AllowSelectionButton = document.getElementById(
              'CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection'
            ),
            DeclineAllButton = document.getElementById(
              'CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll'
            ),
            allowAllAndAllowSelectionButtonsExist =
              AllowAllButton && AllowSelectionButton,
            handleAllowAllOrSelectionButtons =
              'allowallorselection' === this.buttonMode &&
              allowAllAndAllowSelectionButtonsExist,
            declineAllAndAllowAllAndAllowSelectionButtonsExist =
              AllowAllButton && AllowSelectionButton && DeclineAllButton,
            handleDeclineAllAndAllowAllOrSelectionButtons =
              'allowselectdecline' === this.buttonMode &&
              declineAllAndAllowAllAndAllowSelectionButtonsExist
          if (handleAllowAllOrSelectionButtons) {
            var AllowAllButtonWidth = AllowAllButton.offsetWidth - 10,
              AllowSelectionButtonWidth = AllowSelectionButton.offsetWidth - 10
            ;(buttonWidth = Math.max(
              AllowAllButtonWidth,
              AllowSelectionButtonWidth
            )),
              (buttonWidth = Math.max(80, buttonWidth)),
              buttonWidth > 0 &&
                ((AllowAllButton.style.width = buttonWidth + 'px'),
                (AllowSelectionButton.style.width = buttonWidth + 'px'))
            var levelButtonsTableWidth = inPopupMode
              ? multiDialogWidth - multiMargin
              : multiDialogWidth - newMargin
            try {
              document.getElementById(
                'CybotCookiebotDialogBodyLevelButtonsTable'
              ).style.width = levelButtonsTableWidth + 'px'
            } catch (err) {}
          } else if (handleDeclineAllAndAllowAllOrSelectionButtons) {
            var AllowAllButtonWidth = AllowAllButton.offsetWidth - 10,
              AllowSelectionButtonWidth = AllowSelectionButton.offsetWidth - 10,
              DeclineAllButtonWidth = DeclineAllButton.offsetWidth - 10
            ;(buttonWidth = Math.max(
              80,
              AllowAllButtonWidth,
              AllowSelectionButtonWidth,
              DeclineAllButtonWidth
            )),
              buttonWidth > 0 &&
                ((AllowAllButton.style.width = buttonWidth + 'px'),
                (AllowSelectionButton.style.width = buttonWidth + 'px'),
                (DeclineAllButton.style.width = buttonWidth + 'px'))
            var levelButtonsTableWidth = inPopupMode
              ? multiDialogWidth - multiMargin
              : multiDialogWidth - newMargin
            try {
              document.getElementById(
                'CybotCookiebotDialogBodyLevelButtonsTable'
              ).style.width = levelButtonsTableWidth + 'px'
            } catch (err) {}
            var wrapper = document.getElementById(
                'CybotCookiebotDialogBodyLevelWrapper'
              ),
              wrapperWidth = wrapper.offsetWidth - 2,
              buttonsWidth = 3 * (22 + buttonWidth)
            function rearrangeButtons (buttons, display) {
              for (var i = 0; i < buttons.length; i++)
                (buttons[i].style.display = display),
                  buttons[i].parentElement.appendChild(buttons[i])
            }
            wrapperWidth < buttonsWidth
              ? rearrangeButtons(
                  [AllowAllButton, AllowSelectionButton, DeclineAllButton],
                  'block'
                )
              : rearrangeButtons(
                  [DeclineAllButton, AllowSelectionButton, AllowAllButton],
                  ''
                )
          }
      }
    }
  }),
  (CookieControl.Dialog.prototype.hide = function (signalIAB) {
    ;(this.visible = !1),
      document.getElementById(this.DOMid) &&
        ('custom' === this.template
          ? this.runCustomScript(
              this.customTemplateDef.FunctionHideName,
              'hide'
            )
          : (this.fadeOut(),
            ('pushdown' !== this.template && 'pushdown-v2' !== this.template) ||
              (document.body &&
                (document.body.style.paddingTop =
                  this.bodyPaddingTopInit + 'px')))),
      signalIAB &&
        this.cookieconsent &&
        this.cookieconsent.hasFramework &&
        'iabv2' === this.cookieconsent.framework.toLowerCase() &&
        'object' == typeof CookieConsentIABCMP &&
        !this.cookieconsent.frameworkBlocked &&
        CookieConsentIABCMP.updateConsentFromBanner(),
      this.releaseBannerFocus()
  }),
  (CookieControl.Dialog.prototype.setVisibility = function (element, value) {
    element &&
      2 === this.version &&
      ('hide' === value
        ? element.classList.add('CybotCookiebotDialogHide')
        : element.classList.remove('CybotCookiebotDialogHide'))
  }),
  (CookieControl.Dialog.prototype.afterToggleStateChange = function () {
    if (2 === this.version && 'allowallorselection' === this.buttonMode) {
      var isDetailsTab = document
          .getElementById('CybotCookiebotDialogTabContent')
          .children[1].classList.contains('CybotCookiebotDialogActive'),
        levelOptinCheck = 'leveloptin' === this.responseMode,
        inlineOptinCheck = 'inlineoptin' === this.responseMode && isDetailsTab
      if (levelOptinCheck || inlineOptinCheck) {
        var denyButton = document.getElementById(
            'CybotCookiebotDialogBodyButtonDecline'
          ),
          selectionButton = document.getElementById(
            'CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection'
          ),
          isSelection =
            document.getElementById(
              'CybotCookiebotDialogBodyLevelButtonPreferences'
            ).checked ||
            document.getElementById(
              'CybotCookiebotDialogBodyLevelButtonStatistics'
            ).checked ||
            document.getElementById(
              'CybotCookiebotDialogBodyLevelButtonMarketing'
            ).checked
        this.setVisibility(denyButton, isSelection ? 'hide' : 'show'),
          this.setVisibility(selectionButton, isSelection ? 'show' : 'hide')
      }
    }
  }),
  (CookieControl.Dialog.prototype.checkCustomizeButtonState = function () {
    if (
      2 === this.version &&
      'ok' !== this.buttonMode &&
      'inlineoptin' === this.responseMode
    ) {
      var isDetailsTab = document
          .getElementById('CybotCookiebotDialogTabContent')
          .children[1].classList.contains('CybotCookiebotDialogActive'),
        customizeButton = document.getElementById(
          'CybotCookiebotDialogBodyLevelButtonCustomize'
        ),
        allowSelectionButton = document.getElementById(
          'CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection'
        ),
        denyButton = document.getElementById(
          'CybotCookiebotDialogBodyButtonDecline'
        )
      this.setVisibility(customizeButton, isDetailsTab ? 'hide' : 'show'),
        this.setVisibility(
          allowSelectionButton,
          isDetailsTab ? 'show' : 'hide'
        ),
        !isDetailsTab &&
          'allowallorselection' === this.buttonMode &&
          this.setVisibility(denyButton, 'hide'),
        this.afterToggleStateChange()
    }
  }),
  (CookieControl.Dialog.prototype.resize = function () {
    if (1 === this.version) {
      var that = this
      switch (this.template) {
        case 'top':
        case 'slidedown':
          ;(this.initHeight = 'auto'), (this.initWidth = '100%')
          break
        case 'pushdown':
          ;(this.initHeight = 'auto'),
            (this.initWidth = '100%'),
            document.body &&
              (document.body.style.paddingTop =
                this.bodyPaddingTopInit +
                parseInt(this.DOM.firstChild.offsetHeight) +
                'px')
          break
        case 'bottom':
        case 'slideup':
          ;(this.initHeight = 'auto'), (this.initWidth = '100%')
          var dialogHeight = parseInt(this.DOM.scrollHeight),
            newTop = this.viewport.winHeight() - dialogHeight
          newTop < 0 && (newTop = 0),
            (this.DOM.style.top = Math.round(newTop) + 'px')
          break
        case 'popup':
        case 'overlay':
          ;(this.initHeight = 'auto'),
            (this.initWidth = 'auto'),
            (this.DOM.style.marginLeft = '0px'),
            (this.DOM.style.marginTop = '0px'),
            (this.DOM.style.width = 'auto'),
            (this.DOM.style.height = 'auto')
          var DialogHeight = this.DOM.offsetHeight,
            newTop = Math.round((this.viewport.winHeight() - DialogHeight) / 4)
          newTop < 0 && (newTop = 0),
            (this.DOM.style.marginTop = newTop + 'px'),
            (this.DOM.style.marginLeft = '0px')
          var DialogWidth = this.DOM.offsetWidth,
            newLeft = Math.round(
              (this.viewport.winWidth() - DialogWidth) / 2 - 10
            )
          newLeft < 0 && (newLeft = 0),
            (this.DOM.style.marginLeft = newLeft + 'px')
          var underlay = document.getElementById(
            'CybotCookiebotDialogBodyUnderlay'
          )
          underlay &&
            ((underlay.style.height = this.viewport.docHeight() + 'px'),
            (underlay.style.width = this.viewport.docWidth() + 'px'))
      }
      setTimeout(function () {
        that.setButtonsSize(), that.setZoomLevel()
      }, 50)
    } else {
      var bottomWrapper = document.querySelector(
          '.CybotCookiebotDialogBodyBottomWrapper'
        ),
        scrollContainer = document.querySelector(
          '.CybotCookiebotScrollContainer'
        )
      if ('none' !== window.getComputedStyle(bottomWrapper).borderStyle) {
        var dialogFooter = document.getElementById(
            'CybotCookiebotDialogFooter'
          ),
          footerHeight = dialogFooter.offsetHeight
        scrollContainer.style.minHeight = footerHeight + 'px'
      } else scrollContainer.style.minHeight = null
    }
  }),
  (CookieControl.Dialog.prototype.slideDown = function () {
    ;(this.DOM.style.opacity = 1),
      (this.DOM.style.filter = 'alpha(opacity=100)')
    var dialogHeight = parseInt(this.DOM.offsetHeight),
      that = this
    ;(this.DOM.style.top = this.sliderPos - dialogHeight + 'px'),
      (this.sliderPos += 8),
      this.sliderPos < dialogHeight
        ? setTimeout(function () {
            that.slideDown()
          }, 5)
        : ((this.sliderPos = 0), this.resize())
  }),
  (CookieControl.Dialog.prototype.pushDown = function () {
    ;(this.DOM.style.opacity = 1),
      (this.DOM.style.filter = 'alpha(opacity=100)')
    var dialogHeight = parseInt(this.DOM.offsetHeight),
      that = this
    1 === this.version
      ? ((this.DOM.style.top = this.sliderPos - dialogHeight + 'px'),
        document.body &&
          (document.body.style.paddingTop =
            this.bodyPaddingTopInit + this.sliderPos + 'px'),
        (this.sliderPos += 8),
        this.sliderPos < dialogHeight
          ? setTimeout(function () {
              that.pushDown()
            }, 5)
          : ((this.sliderPos = 0),
            document.body &&
              (document.body.style.paddingTop =
                this.bodyPaddingTopInit + dialogHeight + 'px'),
            this.resize()))
      : ((document.body.style.transition = 'padding ease .5s'),
        (document.body.style.paddingTop =
          this.bodyPaddingTopInit + dialogHeight + 'px'),
        setTimeout(function () {
          document.body.style.transition = null
        }, 500))
  }),
  (CookieControl.Dialog.prototype.slideUp = function () {
    ;(this.DOM.style.opacity = 1),
      (this.DOM.style.filter = 'alpha(opacity=100)')
    var dialogHeight = parseInt(this.DOM.scrollHeight),
      that = this
    ;(this.DOM.style.top = this.viewport.winHeight() - this.sliderPos + 'px'),
      (this.sliderPos += 8),
      this.sliderPos < dialogHeight
        ? setTimeout(function () {
            that.slideUp()
          }, 5)
        : ((this.sliderPos = 0),
          (this.DOM.style.top =
            this.viewport.winHeight() - dialogHeight + 'px'),
          this.resize())
  }),
  (CookieControl.Dialog.prototype.fadeIn = function () {
    var that = this,
      underlay = document.getElementById('CybotCookiebotDialogBodyUnderlay')
    if (underlay) {
      var underlayOpacity = 80
      100 === this.faderPos &&
        (null != document.body.style.overflow &&
          void 0 !== document.body.style.overflow &&
          '' !== document.body.style.overflow &&
          (this.bodyOverflow = document.body.style.overflow),
        (document.body.style.overflow = 'hidden')),
        (underlay.style.height = this.viewport.docHeight() + 'px'),
        (underlay.style.width = this.viewport.docWidth() + 'px'),
        (underlay.style.display = 'block'),
        (underlay.style.opacity = (80 - this.faderPos) / 100),
        (underlay.style.filter = 'alpha(opacity=' + (80 - this.faderPos) + ')')
    }
    ;(this.faderPos -= 5),
      (this.DOM.style.opacity = (100 - this.faderPos) / 100),
      (this.DOM.style.filter = 'alpha(opacity=' + (100 - this.faderPos) + ')'),
      this.faderPos < 0 && (this.faderPos = 0),
      this.faderPos > 0
        ? setTimeout(function () {
            that.fadeIn()
          }, 1)
        : ((this.faderPos = 100), this.resize())
  }),
  (CookieControl.Dialog.prototype.fadeOut = function () {
    var that = this
    if (1 === this.version) {
      this.faderPos < 0 && (this.faderPos = 0)
      var underlay = document.getElementById('CybotCookiebotDialogBodyUnderlay')
      underlay &&
        ((underlay.style.height = this.viewport.docHeight() + 'px'),
        (underlay.style.display = 'block'),
        (underlay.style.opacity = (this.faderPos - 20) / 100),
        (underlay.style.filter =
          'alpha(opacity=' + (this.faderPos - 30) + ')')),
        (this.DOM.style.opacity = this.faderPos / 100),
        (this.DOM.style.filter = 'alpha(opacity=' + this.faderPos + ')'),
        (this.faderPos -= 5),
        this.faderPos < 0 && (this.faderPos = 0),
        this.faderPos > 0
          ? setTimeout(function () {
              that.fadeOut()
            }, 1)
          : ((this.DOM.style.display = 'none'),
            underlay &&
              ((underlay.style.display = 'none'),
              null != this.bodyOverflow
                ? (document.body.style.overflow = this.bodyOverflow)
                : (document.body.style.overflow = 'auto')),
            (this.faderPos = 100))
    } else {
      var transitionDuration = 200
      ;(this.DOM.style.transitionDuration = '0.2s'),
        (this.DOM.style.opacity = 0),
        setTimeout(function () {
          ;(that.DOM.style.display = 'none'),
            (that.DOM.style.transitionDuration = null),
            that.DOM.classList.remove('CybotCookiebotDialogActive'),
            (document.body.style.overflow = null)
        }, 200)
    }
  }),
  (CookieControl.Dialog.prototype.showAtTop = function () {
    ;(this.DOM.style.opacity = 1),
      (this.DOM.style.filter = 'alpha(opacity=100)'),
      (this.DOM.style.top = '0px'),
      this.resize()
  }),
  (CookieControl.Dialog.prototype.showAtBottom = function () {
    var that = this
    setTimeout(function () {
      ;(that.DOM.style.opacity = 1),
        (that.DOM.style.filter = 'alpha(opacity=100)')
      var dialogHeight = parseInt(that.DOM.scrollHeight)
      ;(that.DOM.style.top = that.viewport.winHeight() - dialogHeight + 'px'),
        that.resize()
    }, 100)
  }),
  (CookieControl.Dialog.prototype.submitConsent = function (
    isImpliedConsent,
    consentURL,
    loadAsync
  ) {
    var finalConsentURL = window.location.href
    if (
      (consentURL &&
        0 === consentURL.indexOf(location.protocol + '//' + location.host) &&
        (finalConsentURL = consentURL),
      this.demomode ||
        ((this.cookieconsent.consented = !0),
        (this.cookieconsent.declined = !1),
        (this.cookieconsent.hasResponse = !0),
        this.impliedConsentOnScroll && this.detachOnscrollEvent(),
        (this.cookieconsent.consent.preferences = !0),
        (this.cookieconsent.consent.statistics = !0),
        (this.cookieconsent.consent.marketing = !0),
        ('leveloptin' !== this.responseMode &&
          'inlineoptin' !== this.responseMode &&
          'custom' !== this.template) ||
          ('object' == typeof CookieConsent.dialog.prechecked &&
            'custom' !== this.template &&
            ((this.cookieconsent.consent.preferences = this.prechecked.preferences),
            (this.cookieconsent.consent.statistics = this.prechecked.statistics),
            (this.cookieconsent.consent.marketing = this.prechecked.marketing)),
          document.getElementById(
            'CybotCookiebotDialogBodyLevelButtonPreferences'
          )
            ? document.getElementById(
                'CybotCookiebotDialogBodyLevelButtonPreferences'
              ).checked
              ? (this.cookieconsent.consent.preferences = !0)
              : (this.cookieconsent.consent.preferences = !1)
            : document.getElementById(
                'CookieConsentDialogBodyLevelButtonPreferences'
              ) &&
              (document.getElementById(
                'CookieConsentDialogBodyLevelButtonPreferences'
              ).checked
                ? (this.cookieconsent.consent.preferences = !0)
                : (this.cookieconsent.consent.preferences = !1)),
          document.getElementById(
            'CybotCookiebotDialogBodyLevelButtonStatistics'
          )
            ? document.getElementById(
                'CybotCookiebotDialogBodyLevelButtonStatistics'
              ).checked
              ? (this.cookieconsent.consent.statistics = !0)
              : (this.cookieconsent.consent.statistics = !1)
            : document.getElementById(
                'CookieConsentDialogBodyLevelButtonStatistics'
              ) &&
              (document.getElementById(
                'CookieConsentDialogBodyLevelButtonStatistics'
              ).checked
                ? (this.cookieconsent.consent.statistics = !0)
                : (this.cookieconsent.consent.statistics = !1)),
          document.getElementById(
            'CybotCookiebotDialogBodyLevelButtonMarketing'
          )
            ? document.getElementById(
                'CybotCookiebotDialogBodyLevelButtonMarketing'
              ).checked
              ? (this.cookieconsent.consent.marketing = !0)
              : (this.cookieconsent.consent.marketing = !1)
            : document.getElementById(
                'CookieConsentDialogBodyLevelButtonMarketing'
              ) &&
              (document.getElementById(
                'CookieConsentDialogBodyLevelButtonMarketing'
              ).checked
                ? (this.cookieconsent.consent.marketing = !0)
                : (this.cookieconsent.consent.marketing = !1)),
          (this.cookieconsent.responseMode = this.responseMode))),
      this.hide(!0),
      'undefined' != typeof CookieDeclaration &&
        'function' == typeof CookieDeclaration.SetUserStatusLabel &&
        CookieDeclaration.SetUserStatusLabel(),
      !this.demomode)
    ) {
      var dnt = 'false'
      this.cookieconsent.doNotTrack && (dnt = 'true')
      var consentMethod = 'strict'
      isImpliedConsent && (consentMethod = 'implied')
      var asyncload = !0
      void 0 !== loadAsync && (asyncload = loadAsync)
      var pathUrlString = ''
      this.cookieconsent.pathlist.length > 0 &&
        (pathUrlString =
          '&path=' + encodeURIComponent(this.cookieconsent.pathlist.join(','))),
        this.cookieconsent.hasFramework &&
        this.cookieconsent.frameworkLoaded &&
        'iabv2' === this.cookieconsent.framework.toLowerCase() &&
        !this.cookieconsent.frameworkBlocked
          ? window.__tcfapi('getTCData', 2, function (result) {
              result.tcString
                ? (CookieConsent.IABConsentString = result.tcString)
                : (CookieConsent.IABConsentString = ''),
                'object' == typeof CookieConsentIABCMP &&
                CookieConsentIABCMP.encodeGACMString &&
                result.addtlConsent
                  ? (CookieConsent.GACMConsentString = CookieConsentIABCMP.encodeGACMString(
                      result.addtlConsent
                    ))
                  : (CookieConsent.GACMConsentString = ''),
                (pathUrlString +=
                  '&iab2=' +
                  CookieConsent.IABConsentString +
                  '&gacm=' +
                  CookieConsent.GACMConsentString),
                CookieConsent.getScript(
                  CookieConsent.host +
                    'logconsent.ashx?action=accept&nocache=' +
                    new Date().getTime() +
                    '&referer=' +
                    encodeURIComponent(finalConsentURL) +
                    '&dnt=' +
                    dnt +
                    '&method=' +
                    consentMethod +
                    '&clp=' +
                    CookieConsent.consent.preferences +
                    '&cls=' +
                    CookieConsent.consent.statistics +
                    '&clm=' +
                    CookieConsent.consent.marketing +
                    '&cbid=' +
                    CookieConsent.serial +
                    pathUrlString +
                    '&cbt=' +
                    CookieConsent.responseMode +
                    '&hasdata=true',
                  asyncload
                )
            })
          : this.cookieconsent.getScript(
              this.cookieconsent.host +
                'logconsent.ashx?action=accept&nocache=' +
                new Date().getTime() +
                '&referer=' +
                encodeURIComponent(finalConsentURL) +
                '&dnt=' +
                dnt +
                '&method=' +
                consentMethod +
                '&clp=' +
                this.cookieconsent.consent.preferences +
                '&cls=' +
                this.cookieconsent.consent.statistics +
                '&clm=' +
                this.cookieconsent.consent.marketing +
                '&cbid=' +
                this.cookieconsent.serial +
                pathUrlString +
                '&cbt=' +
                CookieConsent.responseMode +
                '&hasdata=true',
              asyncload
            )
    }
  }),
  (CookieControl.Dialog.prototype.submitDecline = function (e) {
    if ((this.hide(), !this.demomode)) {
      ;(this.cookieconsent.consent.preferences = !1),
        (this.cookieconsent.consent.statistics = !1),
        (this.cookieconsent.consent.marketing = !1),
        (this.cookieconsent.declined = !0),
        (this.cookieconsent.consented = !1),
        (this.cookieconsent.hasResponse = !0)
      var pathUrlString = ''
      this.cookieconsent.pathlist.length > 0 &&
        (pathUrlString =
          '&path=' + encodeURIComponent(this.cookieconsent.pathlist.join(','))),
        this.cookieconsent.hasFramework &&
        this.cookieconsent.frameworkLoaded &&
        'iabv2' === this.cookieconsent.framework.toLowerCase() &&
        !this.cookieconsent.frameworkBlocked
          ? (this.IABDeselectAll(!0),
            'object' == typeof CookieConsentIABCMP &&
              CookieConsentIABCMP.updateConsentFromBanner(),
            window.__tcfapi('getTCData', 2, function (result) {
              result.tcString
                ? (CookieConsent.IABConsentString = result.tcString)
                : (CookieConsent.IABConsentString = ''),
                'object' == typeof CookieConsentIABCMP &&
                CookieConsentIABCMP.encodeGACMString &&
                result.addtlConsent
                  ? (CookieConsent.GACMConsentString = CookieConsentIABCMP.encodeGACMString(
                      result.addtlConsent
                    ))
                  : (CookieConsent.GACMConsentString = ''),
                (pathUrlString +=
                  '&iab2=' +
                  CookieConsent.IABConsentString +
                  '&gacm=' +
                  CookieConsent.GACMConsentString),
                CookieConsent.getScript(
                  CookieConsent.host +
                    'logconsent.ashx?action=decline&nocache=' +
                    new Date().getTime() +
                    '&referer=' +
                    encodeURIComponent(window.location.href) +
                    '&cbid=' +
                    CookieConsent.serial +
                    pathUrlString +
                    '&cbt=' +
                    CookieConsent.responseMode +
                    '&hasdata=true'
                )
            }))
          : this.cookieconsent.getScript(
              this.cookieconsent.host +
                'logconsent.ashx?action=decline&nocache=' +
                new Date().getTime() +
                '&referer=' +
                encodeURIComponent(window.location.href) +
                '&cbid=' +
                this.cookieconsent.serial +
                pathUrlString +
                '&cbt=' +
                CookieConsent.responseMode +
                '&hasdata=true'
            ),
        this.cookieconsent.resetCookies()
    }
    'undefined' != typeof CookieDeclaration &&
      'function' == typeof CookieDeclaration.SetUserStatusLabel &&
      CookieDeclaration.SetUserStatusLabel()
  }),
  (CookieControl.Dialog.prototype.addStyle = function (templatename, css) {
    this.styles[templatename] = css
  }),
  (CookieControl.Dialog.prototype.appendStyle = function (templatename) {
    var head = document.head || document.getElementsByTagName('head')[0],
      s = document.createElement('style'),
      newstylesheet
    s.setAttribute('type', 'text/css'), (s.id = 'CookiebotDialogStyle')
    var isDefaultColorTheme = 'white' === this.theme || 'dark' === this.theme,
      isWhiteTheme = 'white' === this.theme
    if (
      ((newstylesheet =
        'custom' === templatename
          ? this.customTemplateDef.CSS
          : this.styles[templatename]),
      isDefaultColorTheme)
    )
      if (1 === this.version)
        (this.customColors.background = isWhiteTheme ? '#ffffff' : '#161616'),
          (this.customColors.text = isWhiteTheme ? '#2a2a2a' : '#ffffff'),
          (this.customColors.acceptbutton = '#188600'),
          (this.customColors.selectionbutton = '#188600'),
          (this.customColors.declinebutton = '#333333'),
          (this.customColors.buttontext = '#ffffff'),
          (this.customColors.tab = isWhiteTheme ? '#f6f6f9' : '#262626'),
          (this.customColors.border = isWhiteTheme ? '#cccccc' : '#404040')
      else {
        var primaryColor = isWhiteTheme ? '#1032CF' : '#2EA7FF',
          textColor = isWhiteTheme ? '#141414' : 'rgba(255, 255, 255, 0.87)'
        ;(this.customColors.background = isWhiteTheme ? '#ffffff' : '#141414'),
          (this.customColors.text = textColor),
          (this.customColors.highlight = primaryColor),
          (this.customColors.shade = isWhiteTheme
            ? '#D6D6D6'
            : 'rgba(255, 255, 255, 0.08)'),
          (this.customColors.acceptBackground = primaryColor),
          (this.customColors.acceptBorder = primaryColor),
          (this.customColors.acceptText = isWhiteTheme ? '#ffffff' : '#141414'),
          (this.customColors.selectionBackground = 'transparent'),
          (this.customColors.selectionBorder = primaryColor),
          (this.customColors.selectionText = textColor),
          (this.customColors.declineBackground = 'transparent'),
          (this.customColors.declineBorder = primaryColor),
          (this.customColors.declineText = textColor),
          (this.customColors.scrollbarHandle = isWhiteTheme
            ? '#141414'
            : '#e2e2e2')
      }
    if ('custom' !== templatename) {
      var isClassicBanner = 1 === this.version
      ;(newstylesheet = newstylesheet.replace(
        /\#000001/g,
        this.customColors.background
      )),
        (newstylesheet = newstylesheet.replace(
          /\#000002/g,
          this.customColors.text
        )),
        (newstylesheet = newstylesheet.replace(
          /\#000003/g,
          isClassicBanner
            ? this.customColors.acceptbutton
            : this.customColors.highlight
        )),
        (newstylesheet = newstylesheet.replace(
          /\#000004/g,
          isClassicBanner
            ? this.customColors.declinebutton
            : this.customColors.shade
        )),
        (newstylesheet = newstylesheet.replace(
          /\#000005/g,
          isClassicBanner
            ? this.customColors.buttontext
            : this.customColors.acceptBackground
        )),
        (newstylesheet = newstylesheet.replace(
          /\#000006/g,
          isClassicBanner
            ? this.customColors.tab
            : this.customColors.acceptBorder
        )),
        (newstylesheet = newstylesheet.replace(
          /\#000008/g,
          isClassicBanner
            ? this.customColors.border
            : this.customColors.acceptText
        )),
        (newstylesheet = newstylesheet.replace(
          /\#000009/g,
          isClassicBanner
            ? this.customColors.selectionbutton
            : this.customColors.selectionBackground
        )),
        (newstylesheet = newstylesheet.replace(
          /\#000010/g,
          this.customColors.selectionBorder
        )),
        (newstylesheet = newstylesheet.replace(
          /\#000012/g,
          this.customColors.selectionText
        )),
        (newstylesheet = newstylesheet.replace(
          /\#000013/g,
          this.customColors.declineBackground
        )),
        (newstylesheet = newstylesheet.replace(
          /\#000014/g,
          this.customColors.declineBorder
        )),
        (newstylesheet = newstylesheet.replace(
          /\#000015/g,
          this.customColors.declineText
        )),
        (newstylesheet = newstylesheet.replace(
          /\#000016/g,
          'dark' === this.theme
            ? 'rgba(255, 255, 255, 0.05)'
            : 'rgba(0, 0, 0, 0.05)'
        )),
        (newstylesheet = newstylesheet.replace(/\#000017/g, '#ffffff')),
        (newstylesheet = newstylesheet.replace(
          /\#000020/g,
          'dark' === this.theme ? '#ffffff' : this.customColors.text
        )),
        (newstylesheet = newstylesheet.replace(
          /\#000018/g,
          'dark' === this.theme ? '#202020' : '#f2f2f2'
        )),
        (newstylesheet = newstylesheet.replace(
          /\#000019/g,
          isDefaultColorTheme
            ? this.customColors.scrollbarHandle
            : this.customColors.text
        )),
        (newstylesheet = newstylesheet.replace(
          /url\(showdetails\.png\)/g,
          'url(' + this.customImages.showdetails + ')'
        )),
        (newstylesheet = newstylesheet.replace(
          /url\(hidedetails\.png\)/g,
          'url(' + this.customImages.hidedetails + ')'
        )),
        (newstylesheet = newstylesheet.replace(
          /url\(CheckedNofocus\.png\)/g,
          'url(' + this.customImages.cbCheckedNofocus + ')'
        )),
        (newstylesheet = newstylesheet.replace(
          /url\(CheckedFocus\.png\)/g,
          'url(' + this.customImages.cbCheckedFocus + ')'
        )),
        (newstylesheet = newstylesheet.replace(
          /url\(CheckedDisabled\.png\)/g,
          'url(' + this.customImages.cbCheckedDisabled + ')'
        )),
        (newstylesheet = newstylesheet.replace(
          /url\(NotCheckedFocus\.png\)/g,
          'url(' + this.customImages.cbNotCheckedFocus + ')'
        )),
        (newstylesheet = newstylesheet.replace(
          /url\(NotCheckedNoFocus\.png\)/g,
          'url(' + this.customImages.cbNotCheckedNoFocus + ')'
        ))
    }
    s.styleSheet
      ? (s.styleSheet.cssText = newstylesheet)
      : s.appendChild(document.createTextNode(newstylesheet)),
      head.appendChild(s)
  }),
  (CookieControl.Dialog.prototype.showDetails = function () {
    var detailsPane = document.getElementById('CybotCookiebotDialogDetail')
    ;(detailsPane.style.display = 'block'), this.resize()
  }),
  (CookieControl.Dialog.prototype.toggleEdgeDetails = function () {
    if (this.DOMid) {
      var dom = document.getElementById(this.DOMid)
      if (
        dom &&
        (document.body &&
          (document.body.style.paddingTop = this.bodyPaddingTopInit + 'px'),
        (dom.style.top = null),
        dom.setAttribute('data-template', 'popup'),
        dom.classList.toggle('CybotEdge'),
        dom.classList.contains('CybotEdge'))
      ) {
        var tab = document.getElementById('CybotCookiebotDialogNavDeclaration')
        tab.setAttribute('aria-selected', !1)
      }
    }
  }),
  (CookieControl.Dialog.prototype.hideDetails = function () {
    var detailsPane = document.getElementById('CybotCookiebotDialogDetail')
    ;(detailsPane.style.display = 'none'), this.resize()
  }),
  (CookieControl.Dialog.prototype.toggleDetails = function (e) {
    if (2 === this.version)
      this.ShowNavigationTab('CybotCookiebotDialogNavDetails')
    else {
      e && e.preventDefault(),
        (this.DOM.style.height = this.initHeight),
        (this.DOM.style.width = this.initWidth)
      var detailsPane = document.getElementById('CybotCookiebotDialogDetail'),
        toggleLink
      toggleLink =
        'leveloptin' === this.responseMode
          ? document.getElementById(
              'CybotCookiebotDialogBodyLevelDetailsButton'
            )
          : document.getElementById('CybotCookiebotDialogBodyButtonDetails')
      var DetailsCSSElement = new CookieControl.CSS(toggleLink)
      if (detailsPane) {
        var AcceptButton
        switch (this.template) {
          case 'top':
          case 'slidedown':
          case 'pushdown':
            'block' === detailsPane.style.display
              ? ('leveloptin' === this.responseMode
                  ? (DetailsCSSElement.removeClass(
                      'CybotCookiebotDialogBodyLevelDetailsButtonExpanded'
                    ),
                    (AcceptButton = document.getElementById(
                      'CybotCookiebotDialogBodyLevelButtonAccept'
                    )))
                  : (DetailsCSSElement.removeClass(
                      'CybotCookiebotDialogBodyLinkExpanded'
                    ),
                    (AcceptButton = document.getElementById(
                      'CybotCookiebotDialogBodyButtonAccept'
                    ))),
                this.hideDetails(),
                (toggleLink.innerHTML = this.showDetailsText),
                AcceptButton.focus())
              : ((toggleLink.innerHTML = this.hideDetailsText),
                'leveloptin' === this.responseMode
                  ? DetailsCSSElement.addClass(
                      'CybotCookiebotDialogBodyLevelDetailsButtonExpanded'
                    )
                  : DetailsCSSElement.addClass(
                      'CybotCookiebotDialogBodyLinkExpanded'
                    ),
                this.showDetails(),
                toggleLink.blur())
            break
          case 'bottom':
          case 'slideup':
            'block' === detailsPane.style.display
              ? ('leveloptin' === this.responseMode
                  ? (DetailsCSSElement.removeClass(
                      'CybotCookiebotDialogBodyLevelDetailsButtonExpanded'
                    ),
                    (AcceptButton = document.getElementById(
                      'CybotCookiebotDialogBodyLevelButtonAccept'
                    )))
                  : (DetailsCSSElement.removeClass(
                      'CybotCookiebotDialogBodyLinkExpanded'
                    ),
                    (AcceptButton = document.getElementById(
                      'CybotCookiebotDialogBodyButtonAccept'
                    ))),
                this.hideDetails(),
                (toggleLink.innerHTML = this.showDetailsText),
                AcceptButton.focus())
              : ((toggleLink.innerHTML = this.hideDetailsText),
                'leveloptin' === this.responseMode
                  ? DetailsCSSElement.addClass(
                      'CybotCookiebotDialogBodyLevelDetailsButtonExpanded'
                    )
                  : DetailsCSSElement.addClass(
                      'CybotCookiebotDialogBodyLinkExpanded'
                    ),
                this.showDetails(),
                toggleLink.blur())
            var thisDOMElement = document.getElementById(this.name),
              dialogHeight = parseInt(thisDOMElement.scrollHeight)
            thisDOMElement.style.top =
              this.viewport.winHeight() - dialogHeight + 'px'
            break
          case 'popup':
          case 'overlay':
            'block' === detailsPane.style.display
              ? ('leveloptin' === this.responseMode
                  ? (DetailsCSSElement.removeClass(
                      'CybotCookiebotDialogBodyLevelDetailsButtonExpanded'
                    ),
                    (AcceptButton = document.getElementById(
                      'CybotCookiebotDialogBodyLevelButtonAccept'
                    )))
                  : (DetailsCSSElement.removeClass(
                      'CybotCookiebotDialogBodyLinkExpanded'
                    ),
                    (AcceptButton = document.getElementById(
                      'CybotCookiebotDialogBodyButtonAccept'
                    ))),
                this.hideDetails(),
                (toggleLink.innerHTML = this.showDetailsText),
                AcceptButton.focus())
              : ((toggleLink.innerHTML = this.hideDetailsText),
                'leveloptin' === this.responseMode
                  ? DetailsCSSElement.addClass(
                      'CybotCookiebotDialogBodyLevelDetailsButtonExpanded'
                    )
                  : DetailsCSSElement.addClass(
                      'CybotCookiebotDialogBodyLinkExpanded'
                    ),
                this.showDetails(),
                toggleLink.blur())
        }
        if ('inlineoptin' === this.responseMode) {
          if ('block' === detailsPane.style.display) {
            var cookieTypeTabWrapper = document.getElementById(
              'CybotCookiebotDialogDetailBodyContentCookieContainerTypes'
            )
            if (parseInt(cookieTypeTabWrapper.clientHeight) > 0) {
              cookieTypeTabWrapper.style.paddingTop = '0px'
              var wrapperheight = 170,
                paddingsize = 170 - parseInt(cookieTypeTabWrapper.clientHeight)
              cookieTypeTabWrapper.style.paddingTop = paddingsize + 'px'
            }
          }
        } else if ('block' === detailsPane.style.display) {
          var cookieTypeTabWrapper = document.getElementById(
            'CybotCookiebotDialogDetailBodyContentCookieContainerNecessary'
          )
          cookieTypeTabWrapper.style.borderTop = '0px'
          var IABv2FirstTabWrapper = document.getElementById(
            'CybotCookiebotDialogDetailBodyContentIABv2Intro'
          )
          IABv2FirstTabWrapper && (IABv2FirstTabWrapper.style.borderTop = '0px')
        }
      }
      this.resize()
    }
  }),
  (CookieControl.Dialog.prototype.showDetailPane = function (paneID) {
    for (
      var paneIDs = [
          'CybotCookiebotDialogDetailBodyContentTextAbout',
          'CybotCookiebotDialogDetailBodyContentTextIABv2',
          'CybotCookiebotDialogDetailBodyContentTextOverview'
        ],
        i = 0;
      i < paneIDs.length;
      i++
    ) {
      var tempPane = document.getElementById(paneIDs[i])
      tempPane && (tempPane.style.display = 'none')
    }
    for (
      var tabIDs = [
          'CybotCookiebotDialogDetailBodyContentTabsAbout',
          'CybotCookiebotDialogDetailBodyContentTabsIABv2',
          'CybotCookiebotDialogDetailBodyContentTabsOverview'
        ],
        i = 0,
        detailsTab,
        detailsPane;
      i < tabIDs.length;
      i++
    ) {
      var tempTab = document.getElementById(tabIDs[i])
      tempTab &&
        (tempTab.className =
          'CybotCookiebotDialogDetailBodyContentTab CybotCookiebotDialogDetailBodyContentTabsItem')
    }
    switch (paneID.toLowerCase()) {
      case 'overview':
        ;(detailsTab = document.getElementById(
          'CybotCookiebotDialogDetailBodyContentTabsOverview'
        )),
          (detailsPane = document.getElementById(
            'CybotCookiebotDialogDetailBodyContentTextOverview'
          ))
        break
      case 'iabv2':
        ;(detailsTab = document.getElementById(
          'CybotCookiebotDialogDetailBodyContentTabsIABv2'
        )),
          (detailsPane = document.getElementById(
            'CybotCookiebotDialogDetailBodyContentTextIABv2'
          ))
        break
      default:
        ;(detailsTab = document.getElementById(
          'CybotCookiebotDialogDetailBodyContentTabsAbout'
        )),
          (detailsPane = document.getElementById(
            'CybotCookiebotDialogDetailBodyContentTextAbout'
          ))
    }
    detailsTab &&
      (detailsTab.className =
        'CybotCookiebotDialogDetailBodyContentTab CybotCookiebotDialogDetailBodyContentTabsItemSelected'),
      detailsPane && (detailsPane.style.display = 'block')
  }),
  (CookieControl.Dialog.prototype.htmlDecode = function (input) {
    var e = document.createElement('div')
    return (
      (e.innerHTML = input),
      0 === e.childNodes.length ? '' : e.childNodes[0].nodeValue
    )
  }),
  (CookieControl.Dialog.prototype.showCookieContainerDetailPane = function (
    cookiePaneID
  ) {
    for (
      var paneIDs = [
          'CybotCookiebotDialogDetailBodyContentCookieTabsNecessary',
          'CybotCookiebotDialogDetailBodyContentCookieTabsPreference',
          'CybotCookiebotDialogDetailBodyContentCookieTabsStatistics',
          'CybotCookiebotDialogDetailBodyContentCookieTabsAdvertising',
          'CybotCookiebotDialogDetailBodyContentCookieTabsUnclassified'
        ],
        i = 0;
      i < paneIDs.length;
      i++
    ) {
      var tempPane = document.getElementById(paneIDs[i])
      tempPane.style.display = 'none'
    }
    for (
      var tabIDs = [
          'CybotCookiebotDialogDetailBodyContentCookieContainerNecessary',
          'CybotCookiebotDialogDetailBodyContentCookieContainerPreference',
          'CybotCookiebotDialogDetailBodyContentCookieContainerStatistics',
          'CybotCookiebotDialogDetailBodyContentCookieContainerAdvertising',
          'CybotCookiebotDialogDetailBodyContentCookieContainerUnclassified'
        ],
        i = 0,
        detailsTab,
        detailsPane;
      i < tabIDs.length;
      i++
    ) {
      var tempTab = document.getElementById(tabIDs[i])
      tempTab.className =
        'CybotCookiebotDialogDetailBodyContentCookieContainerTypes'
    }
    switch (cookiePaneID.toLowerCase()) {
      case 'preference':
        ;(detailsTab = document.getElementById(
          'CybotCookiebotDialogDetailBodyContentCookieContainerPreference'
        )),
          (detailsPane = document.getElementById(
            'CybotCookiebotDialogDetailBodyContentCookieTabsPreference'
          ))
        break
      case 'statistics':
        ;(detailsTab = document.getElementById(
          'CybotCookiebotDialogDetailBodyContentCookieContainerStatistics'
        )),
          (detailsPane = document.getElementById(
            'CybotCookiebotDialogDetailBodyContentCookieTabsStatistics'
          ))
        break
      case 'advertising':
        ;(detailsTab = document.getElementById(
          'CybotCookiebotDialogDetailBodyContentCookieContainerAdvertising'
        )),
          (detailsPane = document.getElementById(
            'CybotCookiebotDialogDetailBodyContentCookieTabsAdvertising'
          ))
        break
      case 'unclassified':
        ;(detailsTab = document.getElementById(
          'CybotCookiebotDialogDetailBodyContentCookieContainerUnclassified'
        )),
          (detailsPane = document.getElementById(
            'CybotCookiebotDialogDetailBodyContentCookieTabsUnclassified'
          ))
        break
      default:
        ;(detailsTab = document.getElementById(
          'CybotCookiebotDialogDetailBodyContentCookieContainerNecessary'
        )),
          (detailsPane = document.getElementById(
            'CybotCookiebotDialogDetailBodyContentCookieTabsNecessary'
          ))
    }
    ;(detailsTab.className =
      'CybotCookiebotDialogDetailBodyContentCookieContainerTypesSelected'),
      detailsPane.scrollIntoView(!0),
      (detailsPane.style.display = 'block')
  }),
  (CookieControl.Dialog.prototype.showCookieContainerIABv2DetailPane = function (
    IABPaneID
  ) {
    if (2 === this.version)
      this.ToggleIabTab('CybotCookiebotDialogDetailBodyContentIABv2Partners')
    else {
      for (
        var paneIDs = [
            'CybotCookiebotDialogDetailBodyContentIABv2TabPurposes',
            'CybotCookiebotDialogDetailBodyContentIABv2TabFeatures',
            'CybotCookiebotDialogDetailBodyContentIABv2TabPartners'
          ],
          i = 0;
        i < paneIDs.length;
        i++
      ) {
        var tempPane = document.getElementById(paneIDs[i])
        tempPane && (tempPane.style.display = 'none')
      }
      for (
        var tabIDs = [
            'CybotCookiebotDialogDetailBodyContentIABv2Purposes',
            'CybotCookiebotDialogDetailBodyContentIABv2Features',
            'CybotCookiebotDialogDetailBodyContentIABv2Partners'
          ],
          i = 0,
          detailsTab,
          detailsPane;
        i < tabIDs.length;
        i++
      ) {
        var tempTab = document.getElementById(tabIDs[i])
        tempTab &&
          (tempTab.className =
            'CybotCookiebotDialogDetailBodyContentCookieContainerTypes')
      }
      switch (IABPaneID.toLowerCase()) {
        case 'features':
          ;(detailsTab = document.getElementById(
            'CybotCookiebotDialogDetailBodyContentIABv2Features'
          )),
            (detailsPane = document.getElementById(
              'CybotCookiebotDialogDetailBodyContentIABv2TabFeatures'
            ))
          break
        case 'partners':
          ;(detailsTab = document.getElementById(
            'CybotCookiebotDialogDetailBodyContentIABv2Partners'
          )),
            (detailsPane = document.getElementById(
              'CybotCookiebotDialogDetailBodyContentIABv2TabPartners'
            ))
          break
        default:
          ;(detailsTab = document.getElementById(
            'CybotCookiebotDialogDetailBodyContentIABv2Purposes'
          )),
            (detailsPane = document.getElementById(
              'CybotCookiebotDialogDetailBodyContentIABv2TabPurposes'
            ))
      }
      detailsTab &&
        (detailsTab.className =
          'CybotCookiebotDialogDetailBodyContentIABv2TabSelected'),
        detailsPane &&
          (detailsPane.scrollIntoView(!0),
          (detailsPane.style.display = 'block'))
    }
  }),
  (CookieControl.Dialog.prototype.setStateUnchecked = function () {
    setTimeout(function () {
      document.getElementById(
        'CybotCookiebotDialogBodyLevelButtonPreferences'
      ) &&
        (document.getElementById(
          'CybotCookiebotDialogBodyLevelButtonPreferences'
        ).checked = !1),
        document.getElementById(
          'CybotCookiebotDialogBodyLevelButtonStatistics'
        ) &&
          (document.getElementById(
            'CybotCookiebotDialogBodyLevelButtonStatistics'
          ).checked = !1),
        document.getElementById(
          'CybotCookiebotDialogBodyLevelButtonMarketing'
        ) &&
          (document.getElementById(
            'CybotCookiebotDialogBodyLevelButtonMarketing'
          ).checked = !1),
        this.cookieconsent.hasFramework &&
          'iabv2' === this.cookieconsent.framework.toLowerCase() &&
          !this.cookieconsent.frameworkBlocked &&
          this.IABDeselectAll(!0)
    }, 100)
  }),
  (CookieControl.Dialog.prototype.getIAB2PurposeById = function (PurposeID) {
    for (var k in this.IABGVL.purposes)
      if (this.IABGVL.purposes[k].id === PurposeID)
        return this.IABGVL.purposes[k].name
    return ''
  }),
  (CookieControl.Dialog.prototype.getIAB2SpecialPurposeById = function (
    SpecialPurposeID
  ) {
    for (var k in this.IABGVL.specialPurposes)
      if (this.IABGVL.specialPurposes[k].id === SpecialPurposeID)
        return this.IABGVL.specialPurposes[k].name
    return ''
  }),
  (CookieControl.Dialog.prototype.getIAB2FeatureById = function (FeatureID) {
    for (var k in this.IABGVL.features)
      if (this.IABGVL.features[k].id === FeatureID)
        return this.IABGVL.features[k].name
    return ''
  }),
  (CookieControl.Dialog.prototype.getIAB2SpecialFeatureById = function (
    SpecialFeatureID
  ) {
    for (var k in this.IABGVL.specialFeatures)
      if (this.IABGVL.specialFeatures[k].id === SpecialFeatureID)
        return this.IABGVL.specialFeatures[k].name
    return ''
  }),
  (CookieControl.Dialog.prototype.IABSelectPurposes = function () {
    for (
      var IABelements = document.getElementsByClassName(
          'CybotCookiebotDialogBodyIABButtonPurposes'
        ),
        i = 0;
      i < IABelements.length;
      i++
    )
      IABelements[i].checked = !0
    IABelements = document.getElementsByClassName(
      'CybotCookiebotDialogBodyIABButtonPurposesLegitimateInterestSelection'
    )
    for (var i = 0; i < IABelements.length; i++) IABelements[i].checked = !0
  }),
  (CookieControl.Dialog.prototype.IABDeselectPurposes = function (
    exemptLegInt
  ) {
    for (
      var IABelements = document.getElementsByClassName(
          'CybotCookiebotDialogBodyIABButtonPurposes'
        ),
        i = 0;
      i < IABelements.length;
      i++
    )
      IABelements[i].checked = !1
    IABelements = document.getElementsByClassName(
      'CybotCookiebotDialogBodyIABButtonPurposesLegitimateInterestSelection'
    )
    for (var i = 0; i < IABelements.length; i++)
      exemptLegInt || (IABelements[i].checked = !1)
  }),
  (CookieControl.Dialog.prototype.IABSelectFeatures = function () {
    for (
      var IABelements = document.getElementsByClassName(
          'CybotCookiebotDialogBodyIABButtonFeatures'
        ),
        i = 0;
      i < IABelements.length;
      i++
    )
      IABelements[i].checked = !0
  }),
  (CookieControl.Dialog.prototype.IABDeselectFeatures = function () {
    for (
      var IABelements = document.getElementsByClassName(
          'CybotCookiebotDialogBodyIABButtonFeatures'
        ),
        i = 0;
      i < IABelements.length;
      i++
    )
      IABelements[i].checked = !1
  }),
  (CookieControl.Dialog.prototype.IABSelectVendors = function () {
    for (
      var IABelements = document.getElementsByClassName(
          'CybotCookiebotDialogBodyIABButtonVendors'
        ),
        i = 0;
      i < IABelements.length;
      i++
    )
      IABelements[i].checked = !0
    IABelements = document.getElementsByClassName(
      'CybotCookiebotDialogBodyIABButtonVendorsLegitimateInterestSelection'
    )
    for (var i = 0; i < IABelements.length; i++) IABelements[i].checked = !0
  }),
  (CookieControl.Dialog.prototype.IABDeselectVendors = function (exemptLegInt) {
    for (
      var IABelements = document.getElementsByClassName(
          'CybotCookiebotDialogBodyIABButtonVendors'
        ),
        i = 0;
      i < IABelements.length;
      i++
    )
      IABelements[i].checked = !1
    IABelements = document.getElementsByClassName(
      'CybotCookiebotDialogBodyIABButtonVendorsLegitimateInterestSelection'
    )
    for (var i = 0; i < IABelements.length; i++)
      exemptLegInt || (IABelements[i].checked = !1)
  }),
  (CookieControl.Dialog.prototype.IABSelectAll = function () {
    this.IABSelectPurposes(), this.IABSelectFeatures(), this.IABSelectVendors()
  }),
  (CookieControl.Dialog.prototype.ShowNavigationTab = function (domId) {
    2 === this.version &&
      this.DOM.classList.contains('CybotEdge') &&
      this.toggleEdgeDetails()
    for (
      var tabs = document.getElementsByClassName(
          'CybotCookiebotDialogNavItemLink'
        ),
        panels = document.getElementsByClassName(
          'CybotCookiebotDialogTabPanel'
        ),
        i = 0;
      i < tabs.length;
      i++
    )
      tabs[i].classList.remove('CybotCookiebotDialogActive'),
        tabs[i].setAttribute('aria-selected', !1)
    for (var j = 0; j < panels.length; j++) {
      var panel = panels[j]
      this.setVisibility(panel, 'hide'),
        panel.parentNode.classList.contains('CybotCookiebotScrollContainer') &&
          (this.setVisibility(panel.parentNode, 'hide'),
          panel.parentNode.classList.remove('CybotCookiebotDialogActive'))
    }
    var el = document.getElementById(domId)
    if (el) {
      el.focus(),
        el.setAttribute('aria-selected', !0),
        el.classList.add('CybotCookiebotDialogActive')
      var id = el.getAttribute('data-target')
      if (id) {
        var panel = document.getElementById(id)
        this.setVisibility(panel, 'show'),
          panel.parentNode.classList.contains(
            'CybotCookiebotScrollContainer'
          ) &&
            (this.setVisibility(panel.parentNode, 'show'),
            panel.parentNode.classList.add('CybotCookiebotDialogActive'))
      }
    }
    this.checkCustomizeButtonState()
  }),
  (CookieControl.Dialog.prototype.ToggleIabTab = function (domId) {
    var el = document.getElementById(domId)
    el.classList.toggle('CybotCookiebotDialogCollapsed')
    var id = el.getAttribute('data-target')
    if (id) {
      var target = document.getElementById(id)
      target &&
        (target.classList.remove('CybotCookiebotDialogHide'),
        target.setAttribute('aria-expanded', 'true'),
        target.scrollIntoView(!0))
    }
  }),
  (CookieControl.Dialog.prototype.ShowIABVendors = function (e) {
    e && e.preventDefault(),
      2 === this.version
        ? (this.ShowNavigationTab('CybotCookiebotDialogNavAdSettings'),
          this.ToggleIabTab(
            'CybotCookiebotDialogDetailBodyContentIABv2Partners'
          ))
        : (document.getElementById('CybotCookiebotDialogDetail') &&
            'block' !==
              document.getElementById('CybotCookiebotDialogDetail').style
                .display &&
            this.toggleDetails(),
          this.showDetailPane('iabv2'),
          this.showCookieContainerIABv2DetailPane('partners'))
  }),
  (CookieControl.Dialog.prototype.IABDeselectAll = function (excemptLegInt) {
    this.IABDeselectPurposes(excemptLegInt),
      this.IABDeselectFeatures(),
      this.IABDeselectVendors(excemptLegInt)
  }),
  (CookieControl.Dialog.prototype.IABToggleContainer = function (
    toggleElementContainer
  ) {
    var toggleElementContainerNode = document.getElementById(
      toggleElementContainer
    )
    if (toggleElementContainerNode) {
      var DetailsCSSElement = new CookieControl.CSS(toggleElementContainerNode)
      if (
        (DetailsCSSElement.toggleClass(
          'CybotCookiebotDialogBodyLevelButtonIABContainer',
          'CybotCookiebotDialogBodyLevelButtonIABContainerCollapsed'
        ),
        toggleElementContainerNode.firstChild)
      ) {
        var DetailsCSSToggleElement = new CookieControl.CSS(
          toggleElementContainerNode.firstChild
        )
        DetailsCSSToggleElement.toggleClass(
          'CybotCookiebotDialogBodyLevelButtonIABContainerToggleShow',
          'CybotCookiebotDialogBodyLevelButtonIABContainerToggleHide'
        ),
          DetailsCSSToggleElement.hasClass(
            'CybotCookiebotDialogBodyLevelButtonIABContainerToggleShow'
          )
            ? (toggleElementContainerNode.firstChild.title = this.IABResourceStrings.expand)
            : (toggleElementContainerNode.firstChild.title = this.IABResourceStrings.collapse)
      }
      if (2 === this.version) {
        var target = toggleElementContainerNode.querySelector(
            '.CybotCookiebotDialogBodyLevelButtonIABDescription'
          ),
          isExpanded = null !== target.offsetParent
        toggleElementContainerNode.setAttribute('aria-expanded', isExpanded)
      }
    }
  }),
  (CookieControl.Dialog.prototype.IABShowDetailedInformation = function (
    caller
  ) {
    var vendorId = caller.dataset.iabvendorid,
      vendor = this.IABGVL.vendors[vendorId],
      container = document.getElementById(
        'CybotCookiebotDialogBodyLevelButtonIABVendorContainer' + vendorId
      ),
      detailsContainer = container.getElementsByClassName(
        'CybotCookiebotDialogBodyIABDetails'
      )[0]
    detailsContainer.innerHTML = this.IABResourceStrings.loadingText
    var successCallback = this.IABCreateStorageDeviceDisclosure.bind(this),
      errorCallback = this.IABStorageDeviceDisclosureFailure.bind(this),
      xhr = new XMLHttpRequest()
    xhr.open('GET', vendor.deviceStorageDisclosureUrl, !0),
      (xhr.onload = function (e) {
        4 === xhr.readyState &&
          (200 === xhr.status
            ? successCallback(
                detailsContainer,
                caller,
                vendor,
                xhr.responseText
              )
            : errorCallback(detailsContainer, xhr.statusText))
      }),
      (xhr.onerror = function (e) {
        errorCallback(detailsContainer, xhr.statusText)
      }),
      xhr.send(null)
  }),
  (CookieControl.Dialog.prototype.IABStorageDeviceDisclosureFailure = function (
    detailsContainer,
    statusText
  ) {
    detailsContainer.innerHTML = this.IABResourceStrings.errorText
  }),
  (CookieControl.Dialog.prototype.IABCreateStorageDeviceDisclosure = function (
    detailsContainer,
    caller,
    vendor,
    text
  ) {
    var trackerList
    try {
      var disclosureInformation = JSON.parse(text)
      trackerList = disclosureInformation.disclosures
    } catch (exception) {
      return void this.IABStorageDeviceDisclosureFailure(
        vendor,
        exception.message
      )
    }
    var newVendorContent =
      '<table class="CybotCookiebotDialogDetailBodyContentCookieTypeTable">'
    ;(newVendorContent += '<thead><tr>'),
      (newVendorContent +=
        '<th scope="col">' + this.IABResourceStrings.name + '</th>'),
      (newVendorContent +=
        '<th scope="col">' + this.IABResourceStrings.domain + '</th>'),
      (newVendorContent +=
        '<th scope="col">' + this.IABResourceStrings.purpose + '</th>'),
      (newVendorContent +=
        '<th scope="col">' + this.IABResourceStrings.expiry + '</th>'),
      (newVendorContent +=
        '<th scope="col">' + this.IABResourceStrings.type + '</th>'),
      (newVendorContent += '</thead></tr>'),
      (newVendorContent += '<tbody>')
    for (var z = 0; z < trackerList.length; z++) {
      var tracker = trackerList[z]
      ;(newVendorContent += '<tr>'),
        (newVendorContent += '<td>' + tracker.identifier + '</td>'),
        (newVendorContent += '<td>'),
        tracker.domain && (newVendorContent += tracker.domain),
        (newVendorContent += '</td>'),
        (newVendorContent +=
          '<td><ul class="CybotCookiebotDialogBodyLevelButtonIABBullet">')
      for (var trackerX = 0; trackerX < tracker.purposes.length; trackerX++)
        newVendorContent +=
          '<li>' + this.getIAB2PurposeById(tracker.purposes[trackerX]) + '</li>'
      if (
        ((newVendorContent += '</ul></td>'),
        (newVendorContent += '<td>'),
        tracker.maxAgeSeconds)
      ) {
        var refreshMessage = tracker.cookieRefresh
          ? '<br /><i>' + this.IABResourceStrings.expiryRefreshText + '</i>'
          : ''
        newVendorContent +=
          this.CalculateHumanDuration(
            tracker.maxAgeSeconds,
            this.IABResourceStrings
          ) + refreshMessage
      }
      newVendorContent += '</td>'
      var trackingTypeStr = null
      switch (tracker.type) {
        case 'app':
          trackingTypeStr = this.IABResourceStrings.trackingTypeApp
          break
        case 'cookie':
          trackingTypeStr = this.IABResourceStrings.trackingTypeCookie
          break
        default:
          trackingTypeStr = this.IABResourceStrings.trackingTypeWeb
      }
      ;(newVendorContent += '<td>' + trackingTypeStr + '</td>'),
        (newVendorContent += '</tr>')
    }
    ;(newVendorContent += '</tbody></table>'),
      (detailsContainer.innerHTML = newVendorContent),
      (caller.parentElement.style.display = 'none')
  }),
  (CookieControl.Dialog.prototype.CalculateHumanDuration = function (
    seconds,
    iabStrings
  ) {
    if (seconds <= 0) return iabStrings.session
    for (
      var levels = [
          [Math.floor(seconds / 31536e3), [iabStrings.year, iabStrings.years]],
          [
            Math.floor((seconds % 31536e3) / 86400),
            [iabStrings.day, iabStrings.days]
          ],
          [
            Math.floor(((seconds % 31536e3) % 86400) / 3600),
            [iabStrings.hour, iabStrings.hours]
          ],
          [
            Math.floor((((seconds % 31536e3) % 86400) % 3600) / 60),
            [iabStrings.minutes, iabStrings.minutes]
          ],
          [
            (((seconds % 31536e3) % 86400) % 3600) % 60,
            [iabStrings.second, iabStrings.seconds]
          ]
        ],
        returntext = '',
        i = 0,
        max = levels.length;
      i < max;
      i++
    )
      0 !== levels[i][0] &&
        (returntext +=
          ' ' +
          levels[i][0] +
          ' ' +
          (1 === levels[i][0] ? levels[i][1][0] : levels[i][1][1]))
    return returntext.trim()
  }),
  (CookieControl.Viewport = function () {
    ;(this.docHeight = function () {
      var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0]
      return Math.max(
        Math.max(d.body.scrollHeight, d.documentElement.scrollHeight),
        Math.max(d.body.offsetHeight, d.documentElement.offsetHeight),
        Math.max(d.body.clientHeight, d.documentElement.clientHeight),
        w.innerHeight || e.clientHeight || g.clientHeight
      )
    }),
      (this.docWidth = function () {
        var w = window,
          d = document,
          e = d.documentElement,
          g = d.getElementsByTagName('body')[0]
        return Math.max(
          Math.max(d.body.scrollWidth, d.documentElement.scrollWidth),
          Math.max(d.body.offsetWidth, d.documentElement.offsetWidth),
          Math.max(d.body.clientWidth, d.documentElement.clientWidth),
          w.innerWidth || e.clientWidth || g.clientWidth
        )
      }),
      (this.winHeight = function () {
        var w = window,
          d = document,
          e = d.documentElement,
          g = d.getElementsByTagName('body')[0]
        return w.innerHeight || e.clientHeight || g.clientHeight
      }),
      (this.winWidth = function () {
        var w = window,
          d = document,
          e = d.documentElement,
          g = d.getElementsByTagName('body')[0]
        return w.innerWidth || e.clientWidth || g.clientWidth
      }),
      (this.findPos = function (obj) {
        var curtop = 0,
          curleft = 0
        if (obj.offsetParent)
          do {
            ;(curleft += obj.offsetLeft), (curtop += obj.offsetTop)
          } while ((obj = obj.offsetParent))
        return [curleft, curtop]
      }),
      (this.getPageScroll = function () {
        var xScroll, yScroll
        return (
          self.pageYOffset
            ? ((yScroll = self.pageYOffset), (xScroll = self.pageXOffset))
            : document.documentElement && document.documentElement.scrollTop
            ? ((yScroll = document.documentElement.scrollTop),
              (xScroll = document.documentElement.scrollLeft))
            : document.body &&
              ((yScroll = document.body.scrollTop),
              (xScroll = document.body.scrollLeft)),
          [xScroll, yScroll]
        )
      }),
      (this.findPosRelativeToViewport = function (obj) {
        var objPos = this.findPos(obj),
          scroll = this.getPageScroll()
        return [objPos[0] - scroll[0], objPos[1] - scroll[1]]
      }),
      (this.addResizeEvent = function (func) {
        window.addEventListener
          ? (window.addEventListener(
              'resize',
              function () {
                func()
              },
              !1
            ),
            window.addEventListener(
              'orientationchange',
              function () {
                func()
              },
              !1
            ))
          : (window.attachEvent('onresize', function () {
              func()
            }),
            window.attachEvent('orientationchange', function () {
              func()
            }))
      })
  }),
  (CookieControl.Viewport.prototype.isIE = function () {
    var myNav = navigator.userAgent.toLowerCase()
    return -1 !== myNav.indexOf('msie') && parseInt(myNav.split('msie')[1])
  }),
  (CookieControl.Dialog.prototype.clearDOM = function () {
    var dialogs = document.getElementsByName(this.DOMid)
    if (dialogs.length > 0)
      for (var i = 0; i < dialogs.length; i++)
        dialogs[i].parentNode.removeChild(dialogs[i])
    var dialogstyle = document.getElementById('CookiebotDialogStyle')
    dialogstyle && dialogstyle.parentNode.removeChild(dialogstyle)
    var overlay = document.getElementById('CybotCookiebotDialogBodyUnderlay')
    overlay && overlay.parentNode.removeChild(overlay)
  }),
  (CookieControl.CSS = function (ele) {
    this.HTMLElement = ele
  }),
  (CookieControl.CSS.prototype.hasClass = function (cls) {
    return (
      this.HTMLElement.className &&
      this.HTMLElement.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
    )
  }),
  (CookieControl.CSS.prototype.addClass = function (cls) {
    this.hasClass(cls) || (this.HTMLElement.className += ' ' + cls)
  }),
  (CookieControl.CSS.prototype.removeClass = function (cls) {
    if (this.hasClass(cls)) {
      var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
      this.HTMLElement.className = this.HTMLElement.className.replace(reg, ' ')
    }
  }),
  (CookieControl.CSS.prototype.replaceClass = function (oldClass, newClass) {
    this.hasClass(oldClass) &&
      (this.removeClass(oldClass), this.addClass(newClass))
  }),
  (CookieControl.CSS.prototype.toggleClass = function (cls1, cls2) {
    this.hasClass(cls1)
      ? this.replaceClass(cls1, cls2)
      : this.hasClass(cls2)
      ? this.replaceClass(cls2, cls1)
      : this.addClass(cls1)
  })

CookieConsent.consentLifetime = 12
CookieConsent.responseMode = 'leveloptin'
CookieControl.Dialog.prototype.loadTemplates = function () {
  this.templates['bottom'] =
    '<div id="CybotCookiebotDialog" name="CybotCookiebotDialog" role="dialog" aria-describedby="CybotCookiebotDialogBodyContentTitle" lang="[#LANGUAGE#]" dir="[#TEXTDIRECTION#]" ng-non-bindable><div id="CybotCookiebotDialogBody"><div id="CybotCookiebotDialogPoweredbyLink"><img id="CybotCookiebotDialogPoweredbyImage" src="[#LOGO#]" alt="[#LOGOALT#]" /></div><div id="CybotCookiebotDialogBodyContent"><h2 id="CybotCookiebotDialogBodyContentTitle" lang="[#LANGUAGE#]">[#TITLE#]</h2><div id="CybotCookiebotDialogBodyContentText" lang="[#LANGUAGE#]">[#TEXT#]</div></div><div id="CybotCookiebotDialogBodyContentControls"><div class="CybotCookiebotDialogBodyContentControlsWrapper"><input type="checkbox" id="CybotCookiebotDialogBodyContentCheckboxPersonalInformation" class="CybotCookiebotDialogBodyLevelButton" tabindex="0" /><label class="CybotCookiebotDialogBodyContentLabelPersonalInformation" for="CybotCookiebotDialogBodyContentCheckboxPersonalInformation">[#OOI_PERSONAL_INFORMATION#]</label></div></div><div id="CybotCookiebotDialogBodyButtons"><a id="CybotCookiebotDialogBodyButtonDecline" class="CybotCookiebotDialogBodyButton" href="#" tabindex="0" lang="[#LANGUAGE#]">[#DECLINE#]</a> <a id="CybotCookiebotDialogBodyButtonAccept" class="CybotCookiebotDialogBodyButton" href="#" tabindex="0" lang="[#LANGUAGE#]">[#ACCEPT#]</a> <a id="CybotCookiebotDialogBodyButtonDetails" class="CybotCookiebotDialogBodyLink" href="#" tabindex="0" lang="[#LANGUAGE#]">[#DETAILS#]</a></div><div id="CybotCookiebotDialogBodyLevelWrapper"><div id="CybotCookiebotDialogBodyLevelButtonAcceptWrapper"><a id="CybotCookiebotDialogBodyLevelButtonAccept" href="#" tabindex="0" lang="[#LANGUAGE#]">[#MULTIACCEPT#]</a></div><div id="CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelectionWrapper" style="display:none"><a id="CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll" class="CybotCookiebotDialogBodyButton" href="#" tabindex="0" lang="[#LANGUAGE#]">[#DECLINE#]</a> <a id="CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection" class="CybotCookiebotDialogBodyButton" href="#" tabindex="0" lang="[#LANGUAGE#]">[#LEVELOPTIN_ALLOW_SELECTION#]</a> <a id="CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll" class="CybotCookiebotDialogBodyButton" href="#" tabindex="0" lang="[#LANGUAGE#]">[#LEVELOPTIN_ALLOWALL#]</a></div><div id="CybotCookiebotDialogBodyLevelButtons"><div id="CybotCookiebotDialogBodyLevelButtonsTable"><div id="CybotCookiebotDialogBodyLevelButtonsRow"><div id="CybotCookiebotDialogBodyLevelButtonsSelectPane"><div class="CybotCookiebotDialogBodyLevelButtonWrapper"><input type="checkbox" id="CybotCookiebotDialogBodyLevelButtonNecessary" class="CybotCookiebotDialogBodyLevelButton CybotCookiebotDialogBodyLevelButtonDisabled" disabled="disabled" checked="checked" /><label for="CybotCookiebotDialogBodyLevelButtonNecessary">[#COOKIETYPE_NECESSARY_RAW#]</label></div><div class="CybotCookiebotDialogBodyLevelButtonWrapper"><input type="checkbox" id="CybotCookiebotDialogBodyLevelButtonPreferences" class="CybotCookiebotDialogBodyLevelButton" checked="checked" tabindex="0" /><label for="CybotCookiebotDialogBodyLevelButtonPreferences">[#COOKIETYPE_PREFERENCE_RAW#]</label></div><div class="CybotCookiebotDialogBodyLevelButtonWrapper"><input type="checkbox" id="CybotCookiebotDialogBodyLevelButtonStatistics" class="CybotCookiebotDialogBodyLevelButton" checked="checked" tabindex="0" /><label for="CybotCookiebotDialogBodyLevelButtonStatistics">[#COOKIETYPE_STATISTICS_RAW#]</label></div><div class="CybotCookiebotDialogBodyLevelButtonWrapper"><input type="checkbox" id="CybotCookiebotDialogBodyLevelButtonMarketing" class="CybotCookiebotDialogBodyLevelButton" checked="checked" tabindex="0" /><label for="CybotCookiebotDialogBodyLevelButtonMarketing">[#COOKIETYPE_ADVERTISING_RAW#]</label></div></div><div id="CybotCookiebotDialogBodyLevelDetailsWrapper"><a id="CybotCookiebotDialogBodyLevelDetailsButton" class="CybotCookiebotDialogBodyLink" href="#" tabindex="0" lang="[#LANGUAGE#]">[#DETAILS#]</a></div></div></div></div></div></div><div id="CybotCookiebotDialogDetail"><div id="CybotCookiebotDialogDetailBody"><div id="CybotCookiebotDialogDetailBodyContentTabs"><a id="CybotCookiebotDialogDetailBodyContentTabsOverview" class="CybotCookiebotDialogDetailBodyContentTab CybotCookiebotDialogDetailBodyContentTabsItemSelected" href="#" lang="[#LANGUAGE#]">[#COOKIESOVERVIEW#]</a> <a id="CybotCookiebotDialogDetailBodyContentTabsIABv2" class="CybotCookiebotDialogDetailBodyContentTab CybotCookiebotDialogDetailBodyContentTabsItem" href="#" lang="[#LANGUAGE#]">[#IABV2SETTINGS#]</a> <a id="CybotCookiebotDialogDetailBodyContentTabsAbout" class="CybotCookiebotDialogDetailBodyContentTab CybotCookiebotDialogDetailBodyContentTabsItem" href="#" lang="[#LANGUAGE#]">[#ABOUTCOOKIES#]</a></div><div id="CybotCookiebotDialogDetailBodyContent"><div id="CybotCookiebotDialogDetailBodyContentTextOverview" lang="[#LANGUAGE#]"><div id="CybotCookiebotDialogDetailBodyContentCookieContainer"><div id="CybotCookiebotDialogDetailBodyContentCookieContainerTypes"><a id="CybotCookiebotDialogDetailBodyContentCookieContainerNecessary" href="#" class="CybotCookiebotDialogDetailBodyContentCookieContainerTypesSelected" lang="[#LANGUAGE#]" aria-label="[#COOKIETYPE_NECESSARY#]"><label for="CybotCookiebotDialogDetailBodyContentCookieContainerNecessary" aria-hidden> </label>[#COOKIETYPE_NECESSARY#]</a> <a id="CybotCookiebotDialogDetailBodyContentCookieContainerPreference" href="#" class="CybotCookiebotDialogDetailBodyContentCookieContainerTypes" lang="[#LANGUAGE#]" aria-label="[#COOKIETYPE_PREFERENCE#]"><label for="CybotCookiebotDialogDetailBodyContentCookieContainerPreference" aria-hidden> </label>[#COOKIETYPE_PREFERENCE#]</a> <a id="CybotCookiebotDialogDetailBodyContentCookieContainerStatistics" href="#" class="CybotCookiebotDialogDetailBodyContentCookieContainerTypes" lang="[#LANGUAGE#]" aria-label="[#COOKIETYPE_STATISTICS#]"><label for="CybotCookiebotDialogDetailBodyContentCookieContainerStatistics" aria-hidden> </label>[#COOKIETYPE_STATISTICS#]</a> <a id="CybotCookiebotDialogDetailBodyContentCookieContainerAdvertising" href="#" class="CybotCookiebotDialogDetailBodyContentCookieContainerTypes" lang="[#LANGUAGE#]" aria-label="[#COOKIETYPE_ADVERTISING#]"><label for="CybotCookiebotDialogDetailBodyContentCookieContainerAdvertising" aria-hidden> </label>[#COOKIETYPE_ADVERTISING#]</a> <a id="CybotCookiebotDialogDetailBodyContentCookieContainerUnclassified" href="#" class="CybotCookiebotDialogDetailBodyContentCookieContainerTypes" lang="[#LANGUAGE#]" aria-label="[#COOKIETYPE_UNCLASSIFIED#]"><label for="CybotCookiebotDialogDetailBodyContentCookieContainerUnclassified" aria-hidden> </label>[#COOKIETYPE_UNCLASSIFIED#]</a></div><div id="CybotCookiebotDialogDetailBodyContentCookieContainerTypeDetails"><div id="CybotCookiebotDialogDetailBodyContentCookieTabsNecessary"><div class="CybotCookiebotDialogDetailBodyContentCookieTypeIntro">[#COOKIETYPEINTRO_NECESSARY#]</div><div class="CybotCookiebotDialogDetailBodyContentCookieTypeTableContainer">[#COOKIETABLE_NECESSARY#]</div></div><div id="CybotCookiebotDialogDetailBodyContentCookieTabsPreference"><div class="CybotCookiebotDialogDetailBodyContentCookieTypeIntro">[#COOKIETYPEINTRO_PREFERENCE#]</div><div class="CybotCookiebotDialogDetailBodyContentCookieTypeTableContainer">[#COOKIETABLE_PREFERENCE#]</div></div><div id="CybotCookiebotDialogDetailBodyContentCookieTabsStatistics"><div class="CybotCookiebotDialogDetailBodyContentCookieTypeIntro">[#COOKIETYPEINTRO_STATISTICS#]</div><div class="CybotCookiebotDialogDetailBodyContentCookieTypeTableContainer">[#COOKIETABLE_STATISTICS#]</div></div><div id="CybotCookiebotDialogDetailBodyContentCookieTabsAdvertising"><div class="CybotCookiebotDialogDetailBodyContentCookieTypeIntro">[#COOKIETYPEINTRO_ADVERTISING#]</div><div class="CybotCookiebotDialogDetailBodyContentCookieTypeTableContainer">[#COOKIETABLE_ADVERTISING#]</div></div><div id="CybotCookiebotDialogDetailBodyContentCookieTabsUnclassified"><div class="CybotCookiebotDialogDetailBodyContentCookieTypeIntro">[#COOKIETYPEINTRO_UNCLASSIFIED#]</div><div class="CybotCookiebotDialogDetailBodyContentCookieTypeTableContainer">[#COOKIETABLE_UNCLASSIFIED#]</div></div></div></div></div><div id="CybotCookiebotDialogDetailBodyContentTextIABv2" lang="[#LANGUAGE#]"><div id="CybotCookiebotDialogDetailBodyContentIABContainer"><div id="CybotCookiebotDialogDetailBodyContentIABv2Tabs"><a id="CybotCookiebotDialogDetailBodyContentIABv2Purposes" href="#" class="CybotCookiebotDialogDetailBodyContentIABv2TabSelected" lang="[#LANGUAGE#]" aria-label="[#IABV2_LABEL_PURPOSES#]"><label for="CybotCookiebotDialogDetailBodyContentIABv2Purposes" aria-hidden> </label>[#IABV2_LABEL_PURPOSES#]</a> <a id="CybotCookiebotDialogDetailBodyContentIABv2Features" href="#" class="CybotCookiebotDialogDetailBodyContentIABv2Tab" lang="[#LANGUAGE#]" aria-label="[#IABV2_LABEL_FEATURES#]"><label for="CybotCookiebotDialogDetailBodyContentIABv2Features" aria-hidden> </label>[#IABV2_LABEL_FEATURES#]</a> <a id="CybotCookiebotDialogDetailBodyContentIABv2Partners" href="#" class="CybotCookiebotDialogDetailBodyContentIABv2Tab" lang="[#LANGUAGE#]" aria-label="[#IABV2_LABEL_PARTNERS#]"><label for="CybotCookiebotDialogDetailBodyContentIABv2Partners" aria-hidden> </label>[#IABV2_LABEL_PARTNERS#]</a></div><div id="CybotCookiebotDialogDetailBodyContentIABv2Details"><div id="CybotCookiebotDialogDetailBodyContentIABv2TabPurposes"><div class="CybotCookiebotDialogDetailBodyContentIABv2PurposesBody">[#IABV2_BODY_PURPOSES#]</div></div><div id="CybotCookiebotDialogDetailBodyContentIABv2TabFeatures"><div class="CybotCookiebotDialogDetailBodyContentIABv2FeaturesBody">[#IABV2_BODY_FEATURES#]</div></div><div id="CybotCookiebotDialogDetailBodyContentIABv2TabPartners"><div class="CybotCookiebotDialogDetailBodyContentIABv2PartnersBody">[#IABV2_BODY_PARTNERS#]</div></div></div></div></div><div id="CybotCookiebotDialogDetailBodyContentTextAbout" lang="[#LANGUAGE#]">[#COOKIESGENERALINTRO#]</div></div><div id="CybotCookiebotDialogDetailFooter" lang="[#LANGUAGE#]">[#LASTUPDATED#]</div></div></div></div>'
  this.addStyle(
    'bottom',
    '#CybotCookiebotDialog{clip:auto;text-rendering:geometricPrecision;animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:transparent;background-color:#000001;background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-bottom-left-radius:0;border-bottom-right-radius:0;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;bottom:auto;box-shadow:none;box-shadow:2px 2px 14px 2px #121212;caption-side:top;clear:none;color:inherit;color:#000002;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;display:inline;empty-cells:show;filter:Alpha(opacity=100);float:none;font:normal;font-family:inherit;font-family:Segoe UI,Arial,Helvetica,Verdana,sans-serif;font-size:medium;font-size:8pt;font-style:normal;font-variant:normal;font-weight:400;height:auto;hyphens:none;left:auto;left:0;letter-spacing:normal;line-height:normal;line-height:1.231;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0 0 8px;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;position:fixed;right:auto;tab-size:8;table-layout:auto;text-align:inherit;text-align:left;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;top:auto;top:-800px;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;width:auto;width:100%;word-spacing:normal;z-index:auto;z-index:2147483645}#CybotCookiebotDialog,#CybotCookiebotDialog:after,#CybotCookiebotDialog :after,#CybotCookiebotDialog:before,#CybotCookiebotDialog :before,#CybotCookiebotDialogBody *,#CybotCookiebotDialogDetail *{box-sizing:content-box}#CybotCookiebotDialog[dir=rtl]{text-align:right}#CybotCookiebotDialog a{font-family:Segoe UI,Arial,Helvetica,Verdana,sans-serif;line-height:1.231}#CybotCookiebotDialog a,#CybotCookiebotDialog a:hover{color:#000002;text-decoration:underline}#CybotCookiebotDialog div{font-family:Segoe UI,Arial,Helvetica,Verdana,sans-serif;line-height:1.231}#CybotCookiebotDialog br,#CybotCookiebotDialog td{line-height:1.231}#CybotCookiebotDialogDetailBodyContentCookieContainerAdvertising,#CybotCookiebotDialogDetailBodyContentCookieContainerNecessary,#CybotCookiebotDialogDetailBodyContentCookieContainerPreference,#CybotCookiebotDialogDetailBodyContentCookieContainerStatistics,#CybotCookiebotDialogDetailBodyContentCookieContainerUnclassified{margin:0}#CybotCookiebotDialogPoweredbyLink{height:36px;margin-left:6px;margin-right:0;margin-top:12px;position:absolute;width:48px;z-index:2147483646}div[dir=rtl] #CybotCookiebotDialogPoweredbyLink{margin-left:0;margin-right:6px}#CybotCookiebotDialogPoweredbyImage{border:none;margin:2px 0 0 3px;padding:0;width:46px}#CybotCookiebotDialogBody{margin-left:auto;margin-right:auto;max-width:640px;overflow:hidden;padding-left:0;padding-right:8px;vertical-align:top}div[dir=rtl] #CybotCookiebotDialogBody{padding-left:8px;padding-right:0}#CybotCookiebotDialogBodyContent{font-size:9.5pt;font-weight:400;line-height:130%;min-height:32px;padding:12px 0 8px 80px}div[dir=rtl] #CybotCookiebotDialogBodyContent{padding-left:0;padding-right:80px}#CybotCookiebotDialogBodyContentControls{font-family:Segoe UI,Arial,Helvetica,Verdana,sans-serif;font-size:9.5pt;font-weight:400;line-height:130%;min-height:10px;padding:12px 0 8px 80px}div[dir=rtl] #CybotCookiebotDialogBodyContentControls{padding-left:0;padding-right:80px}.CybotCookiebotDialogBodyContentControlsWrapper{display:inline-block;line-height:16px;margin-left:0;margin-right:14px;position:relative}div[dir=rtl] .CybotCookiebotDialogBodyContentControlsWrapper{margin-left:14px;margin-right:0}#CybotCookiebotDialogBodyContentTitle{color:#000002;display:block;float:none;font-family:Segoe UI,Arial,Helvetica,Verdana,sans-serif;font-size:12pt;font-weight:700;letter-spacing:normal;line-height:100%;margin:2px 0 6px;padding:0;position:static;text-align:left;visibility:visible}div[dir=rtl] #CybotCookiebotDialogBodyContentTitle{text-align:right}#CybotCookiebotDialogBodyContentText{text-align:left}#CybotCookiebotDialogBodyContentText ul{display:block;list-style-type:disc;margin:1em 0 1.25em;padding:0 0 0 40px}#CybotCookiebotDialogBodyContentText ul li{display:list-item;list-style-type:disc;margin:0;padding:0}div[dir=rtl] #CybotCookiebotDialogBodyContentText{text-align:right}#CybotCookiebotDialogBodyButtons{display:block;margin:0 0 6px 6px;padding-left:63px;padding-right:0;z-index:10}div[dir=rtl] #CybotCookiebotDialogBodyButtons{margin:0 6px 6px 0;padding-left:0;padding-right:63px}#CybotCookiebotDialogBodyButtons a,#CybotCookiebotDialogBodyButtons a:hover{color:#000005;text-decoration:none}.CybotCookiebotDialogBodyButton{box-sizing:content-box;display:inline-block;font-size:9.5pt;font-weight:600;margin-left:12px;margin-right:0;margin-top:8px;min-width:80px;padding:2px 4px;text-align:center;white-space:nowrap;z-index:10}.CybotCookiebotDialogBodyButton:after,.CybotCookiebotDialogBodyButton:before{box-sizing:content-box}div[dir=rtl] .CybotCookiebotDialogBodyButton{margin-left:0;margin-right:12px}#CybotCookiebotDialogBodyButtonAccept{background-color:#000003;border:1px solid #000003}#CybotCookiebotDialogBodyButtonDecline{background-color:#000004;border:1px solid #000004}#CybotCookiebotDialogBodyButtons .CybotCookiebotDialogBodyLink,#CybotCookiebotDialogBodyLevelDetailsButton{background-image:url(showdetails.png);background-position:right 12px;background-position-x:right;background-position-y:12px;background-repeat:no-repeat;border-left:0;border-right:5px solid transparent;color:#000002;display:inline-block;font-size:9pt;margin-top:8px;padding:7px 19px 0 0;text-align:right;text-decoration:none}div[dir=rtl] #CybotCookiebotDialogBodyButtons .CybotCookiebotDialogBodyLink,div[dir=rtl] #CybotCookiebotDialogBodyLevelDetailsButton{background-position:left 12px;background-position-x:left;background-position-y:12px;border-left:5px solid transparent;border-right:0;padding-left:19px;padding-right:0}div[dir=rtl] #CybotCookiebotDialogBodyLevelDetailsButton{background-position:left 5px!important;background-position-x:left!important;background-position-y:5px!important}#CybotCookiebotDialogBodyButtons .CybotCookiebotDialogBodyLink:hover,#CybotCookiebotDialogBodyLevelDetailsButton:hover{color:#000002;text-decoration:underline}.CybotCookiebotDialogBodyLevelDetailsButtonExpanded,.CybotCookiebotDialogBodyLinkExpanded{background-image:url(hidedetails.png)!important}div[dir=rtl] .CybotCookiebotDialogBodyLevelDetailsButtonExpanded{background-position:left 5px!important;background-position-x:left!important;background-position-y:5px!important}a#CybotCookiebotDialogBodyLevelDetailsButton{background-position:right 5px;background-position-x:right;background-position-y:5px;color:#000002;line-height:16px;margin:1px 0 0;padding-left:4px;padding-top:0;text-align:left;text-decoration:none}div[dir=rtl] a#CybotCookiebotDialogBodyLevelDetailsButton{text-align:right}a#CybotCookiebotDialogBodyLevelDetailsButton:hover{color:#000002;text-decoration:none}#CybotCookiebotDialogBodyButtonDetails{display:inline-block;float:right;outline:none}div[dir=rtl] #CybotCookiebotDialogBodyButtonDetails{float:left}#CybotCookiebotDialogBodyButtonDetails:focus,#CybotCookiebotDialogBodyLevelDetailsButton:focus{text-decoration:underline}#CybotCookiebotDialogBodyLevelWrapper{display:none;pointer-events:none;text-align:right}div[dir=rtl] #CybotCookiebotDialogBodyLevelWrapper{text-align:left}#CybotCookiebotDialogBodyLevelButtons{float:left;font-size:9pt;margin-left:8px;margin-right:0;pointer-events:auto}div[dir=rtl] #CybotCookiebotDialogBodyLevelButtons{float:right;margin-left:0;margin-right:8px}#CybotCookiebotDialogBodyLevelButtonsTable{display:inline-table;margin:5px 0}div[dir=rtl] #CybotCookiebotDialogBodyLevelButtonsTable{margin-left:16px;margin-right:0}#CybotCookiebotDialogBodyLevelButtonsRow{display:table-row}#CybotCookiebotDialogBodyLevelButtonsSelectPane{border:1px solid #000008;-webkit-border-radius:4px 0 0 4px;-moz-border-radius:4px 0 0 4px;border-radius:4px 0 0 4px;display:table-cell;padding:4px 3px 3px 9px;text-align:left;vertical-align:top}div[dir=rtl] #CybotCookiebotDialogBodyLevelButtonsSelectPane{-webkit-border-radius:0 4px 4px 0;-moz-border-radius:0 4px 4px 0;border-radius:0 4px 4px 0;text-align:right}#CybotCookiebotDialogBodyLevelButtonAcceptWrapper{display:inline-block;float:right;margin-left:0;margin-right:0;pointer-events:auto}div[dir=rtl] #CybotCookiebotDialogBodyLevelButtonAcceptWrapper{display:inline-block;float:left;margin-left:0;margin-right:0}a#CybotCookiebotDialogBodyLevelButtonAccept{background-color:#000003;border:1px solid #000003;color:#000005;display:inline-block;font-size:9.5pt;font-weight:600;margin-left:0;margin-right:0;margin-top:6px;min-width:80px;padding:3px 10px;text-align:center;text-decoration:none;white-space:nowrap;z-index:10}a#CybotCookiebotDialogBodyLevelButtonAccept:hover{color:#000005;text-decoration:none}#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelectionWrapper{display:inline-block;float:right;margin-left:0;margin-right:0;padding-bottom:2px;pointer-events:auto}div[dir=rtl] #CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelectionWrapper{display:inline-block;float:left;margin-left:0;margin-right:0;padding-bottom:2px}a#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll,a#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection,a#CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll{color:#000005;display:inline-block;font-size:9.5pt;font-weight:600;height:16px;margin-top:6px;padding:2px 4px;text-align:center;text-decoration:none;white-space:nowrap;z-index:10}a#CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll{background-color:#000004;border:1px solid #000004}a#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll{background-color:#000003;border:1px solid #000003}a#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection{background-color:#000009;border:1px solid #000009}a#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll:hover,a#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection:hover,a#CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll:hover{color:#000005;text-decoration:none}.CybotCookiebotDialogBodyLevelButtonWrapper{display:inline-block;line-height:16px;margin-left:0;margin-right:14px;position:relative}div[dir=rtl] .CybotCookiebotDialogBodyLevelButtonWrapper{margin-left:14px;margin-right:0}.CybotCookiebotDialogBodyLevelButtonWrapper:last-of-type{margin-left:0;margin-right:7px}div[dir=rtl] .CybotCookiebotDialogBodyLevelButtonWrapper:last-of-type{margin-left:7px;margin-right:0}.CybotCookiebotDialogBodyLevelButtonWrapper label{white-space:nowrap}input[type=checkbox].CybotCookiebotDialogBodyLevelButton{cursor:pointer;left:0;opacity:0;position:absolute;top:0;z-index:2}input[type=checkbox].CybotCookiebotDialogBodyLevelButton+label:after,input[type=checkbox].CybotCookiebotDialogBodyLevelButton+label:before{content:normal}input [type=checkbox].CybotCookiebotDialogBodyLevelButton.CybotCookiebotDialogBodyLevelButtonDisabled{cursor:default}input[type=checkbox].CybotCookiebotDialogBodyLevelButton+label{background-image:url(NotCheckedNoFocus.png);background-position:left 1px;background-repeat:no-repeat;color:inherit;cursor:pointer;display:inline-block;font-size:inherit;height:auto;left:0;line-height:16px;margin-bottom:0;margin-top:0;min-height:14px;padding:1px 0 0 17px;position:relative;top:0;vertical-align:top;width:auto;z-index:1}div[dir=rtl] input[type=checkbox].CybotCookiebotDialogBodyLevelButton+label{background-position:right 1px;padding:2px 17px 0 0}input[type=checkbox].CybotCookiebotDialogBodyLevelButton:checked+label{background-image:url(CheckedNofocus.png);background-position:left 1px;background-repeat:no-repeat;display:inline-block;height:auto;line-height:16px;min-height:14px;padding:1px 0 0 17px;vertical-align:top;width:auto}div[dir=rtl] input[type=checkbox].CybotCookiebotDialogBodyLevelButton:checked+label{background-position:right 1px;padding:2px 17px 0 0}input[type=checkbox].CybotCookiebotDialogBodyLevelButton.CybotCookiebotDialogBodyLevelButtonDisabled+label{background-image:url(CheckedDisabled.png);background-position:left 1px;background-repeat:no-repeat;cursor:default;display:inline-block;height:auto;left:0;line-height:16px;min-height:14px;padding:1px 0 0 17px;position:relative;top:0;vertical-align:top;width:auto;z-index:1}div[dir=rtl] input[type=checkbox].CybotCookiebotDialogBodyLevelButton.CybotCookiebotDialogBodyLevelButtonDisabled+label{background-position:right 1px;padding:2px 17px 0 0}input[type=checkbox].CybotCookiebotDialogBodyLevelButton:focus+label{background-image:url(NotCheckedFocus.png);background-position:left 1px;background-repeat:no-repeat;display:inline-block;height:auto;line-height:16px;min-height:14px;padding:1px 0 0 17px;vertical-align:top;width:auto}div[dir=rtl] input[type=checkbox].CybotCookiebotDialogBodyLevelButton:focus+label{background-position:right 1px;padding:2px 17px 0 0}input[type=checkbox].CybotCookiebotDialogBodyLevelButton:checked:focus+label{background-image:url(CheckedFocus.png);background-position:left 1px;background-repeat:no-repeat;display:inline-block;height:auto;line-height:16px;min-height:14px;padding:1px 0 0 17px;vertical-align:top;width:auto}div[dir=rtl] input[type=checkbox].CybotCookiebotDialogBodyLevelButton:checked:focus+label{background-position:right 1px;padding:2px 17px 0 0}#CybotCookiebotDialogBodyLevelDetailsWrapper{background-color:#000006;border:1px solid #000008;border-left:none;cursor:pointer;display:table-cell;height:14px;padding:4px 0 4px 4px;text-align:left;vertical-align:top}div[dir=rtl] #CybotCookiebotDialogBodyLevelDetailsWrapper{border:1px solid #000008;border-right:none;padding:4px 4px 4px 0;text-align:right}#CybotCookiebotDialogDetail{background-color:#000001;display:none;overflow:auto;padding-bottom:1px;padding-top:0}#CybotCookiebotDialogDetailBody{margin-left:auto;margin-right:auto;max-width:632px;vertical-align:top;width:100%}div[dir=rtl] #CybotCookiebotDialogDetailBody{text-align:right}#CybotCookiebotDialogDetailBodyContent{background-color:#000001;border:solid #000008;border-width:1px 1px 4px;color:#000002;height:170px}#CybotCookiebotDialogDetailBodyContent a{font-size:9pt}#CybotCookiebotDialogDetailBodyContentTabs a{font-size:10.5pt}#CybotCookiebotDialogDetailBodyContentText{font-size:10pt;padding:8px}#CybotCookiebotDialogDetailBodyContentTabs{display:inline-block;height:auto;position:relative;white-space:nowrap}a.CybotCookiebotDialogDetailBodyContentTabsItem{margin:0;text-decoration:none!important}a.CybotCookiebotDialogDetailBodyContentTabsItem:focus,a.CybotCookiebotDialogDetailBodyContentTabsItem:hover{background-color:#000001!important;border-right:1px solid #000008;border-top:1px solid #000008;color:#000002!important;opacity:.9;text-decoration:none!important}a.CybotCookiebotDialogDetailBodyContentTabsItemSelected{color:#000002!important;margin:0;opacity:1;text-decoration:none!important}a.CybotCookiebotDialogDetailBodyContentTabsItemSelected:focus,a.CybotCookiebotDialogDetailBodyContentTabsItemSelected:hover{border-right:1px solid #000008;border-top:1px solid #000008;color:#000002!important;cursor:default;text-decoration:none!important}.CybotCookiebotDialogDetailBodyContentTabsItem{background:#000006;border-right:1px solid #000008;border-top:1px solid #000008;color:#000002!important;cursor:pointer;display:inline-block;font-size:10.5pt;font-weight:400;line-height:100%;margin:1px 0 0;opacity:.85;padding:7px 18px 5px;position:relative;top:1px;white-space:normal;z-index:10}.CybotCookiebotDialogDetailBodyContentTabsItem:first-of-type{border-left:1px solid #000008}.CybotCookiebotDialogDetailBodyContentTabsItemSelected{background:#000001;border-right:1px solid #000008;border-top:1px solid #000008;color:#000002;display:inline-block;font-size:10.5pt;font-weight:400;line-height:100%;opacity:1;padding:8px 18px 6px;position:relative;top:1px;white-space:normal;z-index:10}.CybotCookiebotDialogDetailBodyContentTab:first-child{border-left:1px solid #000008;-webkit-border-radius:4px 0 0 0;-moz-border-radius:4px 0 0 0;border-radius:4px 0 0 0}div[dir=rtl] .CybotCookiebotDialogDetailBodyContentTab:first-child{border-left:none;-webkit-border-radius:0 4px 0 0;-moz-border-radius:0 4px 0 0;border-radius:0 4px 0 0}.CybotCookiebotDialogDetailBodyContentTab{border-left:none}div[dir=rtl] .CybotCookiebotDialogDetailBodyContentTab{border-left:1px solid #000008}#CybotCookiebotDialogDetailFooter{background-color:#000001;color:#000002;opacity:.85;padding-right:2px;padding-top:4px;text-align:right}div[dir=rtl] #CybotCookiebotDialogDetailFooter{text-align:left}#CybotCookiebotDialogDetailFooter a{color:#000002}#CybotCookiebotDialogDetailBodyContentTextAbout{display:none;font-size:9pt;height:140px;overflow:auto;padding:18px 12px 12px}#CybotCookiebotDialogDetailBodyContentTextOverview{display:inline-block}#CybotCookiebotDialogDetailBodyContentTextIABv2{word-wrap:break-word;display:none;text-overflow:ellipsis}#CybotCookiebotDialogDetailBodyContentTabsIABv2,#CybotCookiebotDialogDetailBodyContentTextIABv2{display:none}#CybotCookiebotDialogDetailBodyContentCookieContainerTypes,#CybotCookiebotDialogDetailBodyContentIABv2Tabs{background-color:#000006;float:left;font-size:9pt;padding:0;white-space:nowrap}div[dir=rtl] #CybotCookiebotDialogDetailBodyContentCookieContainerTypes,div[dir=rtl] #CybotCookiebotDialogDetailBodyContentIABv2Tabs{float:right}#CybotCookiebotDialogDetailBodyContentCookieContainerTypeDetails,#CybotCookiebotDialogDetailBodyContentIABv2Details{font-size:9pt;height:146px;max-height:146px;overflow:auto;padding:12px}.CybotCookiebotDialogDetailBodyContentCookieContainerTypesSelected,.CybotCookiebotDialogDetailBodyContentIABv2TabSelected{background-color:#000001;border-bottom:1px solid #000008;border-left:none;border-right:1px solid #000001;color:#000002!important;display:block;padding:8px;text-decoration:none!important}div[dir=rtl] .CybotCookiebotDialogDetailBodyContentCookieContainerTypesSelected,div[dir=rtl] .CybotCookiebotDialogDetailBodyContentIABv2TabSelected{border-left:1px solid #000001;border-right:none}.CybotCookiebotDialogDetailBodyContentCookieContainerTypes,.CybotCookiebotDialogDetailBodyContentIABv2Tab{background-color:#000006;border-bottom:1px solid #000008;border-left:none;border-right:1px solid #000008;color:#000002!important;cursor:pointer;display:block;opacity:1;padding:8px;text-decoration:none!important}.CybotCookiebotDialogDetailBodyContentCookieContainerTypes:first-child,.CybotCookiebotDialogDetailBodyContentIABv2Tab:first-child{border-top:1px solid #000008}.CybotCookiebotDialogDetailBodyContentCookieContainerTypesSelected:first-child{border-top:1px solid #000001}#CybotCookiebotDialogDetailBodyContentIABv2Tabs a:first-child{border-top:0}.CybotCookiebotDialogDetailBodyContentCookieContainerTypes label,.CybotCookiebotDialogDetailBodyContentCookieContainerTypesSelected label,.CybotCookiebotDialogDetailBodyContentIABv2Tab label,.CybotCookiebotDialogDetailBodyContentIABv2TabSelected label{cursor:pointer;display:none;margin:0}div[dir=rtl] .CybotCookiebotDialogDetailBodyContentCookieContainerTypes,div[dir=rtl] .CybotCookiebotDialogDetailBodyContentIABv2Tab{border-left:1px solid #000008;border-right:none}a.CybotCookiebotDialogDetailBodyContentCookieContainerTypes:focus,a.CybotCookiebotDialogDetailBodyContentCookieContainerTypes:hover,a.CybotCookiebotDialogDetailBodyContentIABv2Tab:focus,a.CybotCookiebotDialogDetailBodyContentIABv2Tab:hover{background:#000001!important;border-bottom:1px solid #000008;border-left:none;border-right:1px solid #000008;color:#000002!important;opacity:1;text-decoration:none!important}a.CybotCookiebotDialogDetailBodyContentCookieContainerTypesSelected:focus,a.CybotCookiebotDialogDetailBodyContentCookieContainerTypesSelected:hover,a.CybotCookiebotDialogDetailBodyContentIABv2TabSelected:focus,a.CybotCookiebotDialogDetailBodyContentIABv2TabSelected:hover{border-bottom:1px solid #000008;border-left:none;border-right:1px solid #000001;color:#000002!important;cursor:default;text-decoration:none!important}#CybotCookiebotDialogDetailBodyContentCookieTabsAdvertising,#CybotCookiebotDialogDetailBodyContentCookieTabsPreference,#CybotCookiebotDialogDetailBodyContentCookieTabsStatistics,#CybotCookiebotDialogDetailBodyContentCookieTabsUnclassified,#CybotCookiebotDialogDetailBodyContentIABv2TabFeatures,#CybotCookiebotDialogDetailBodyContentIABv2TabPartners{display:none}.CybotCookiebotDialogBodyLevelButtonIABContainer,.CybotCookiebotDialogBodyLevelButtonIABContainerCollapsed{border:1px solid #ccc;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;margin-bottom:8px;overflow:hidden;padding:4px 4px 4px 8px}.CybotCookiebotDialogBodyLevelButtonIABContainerCollapsed{height:18px}.CybotCookiebotDialogBodyLevelButtonIABContainerToggleShow{background-image:url(showdetails.png);background-position:left 6px;background-position-x:left;background-position-y:6px;background-repeat:no-repeat;display:inline-block;float:right;height:20px;position:relative;width:16px}.CybotCookiebotDialogBodyLevelButtonIABContainerToggleHide{background-image:url(hidedetails.png);background-position:left 6px;background-position-x:left;background-position-y:6px;background-repeat:no-repeat;display:inline-block;float:right;height:20px;position:relative;width:16px}.CybotCookiebotDialogDetailBodyContentCookieTypeTable{border-collapse:collapse;border-spacing:0;font-size:9pt;margin:8px 0 0;padding:0;width:100%}.CybotCookiebotDialogDetailBodyContentCookieTypeTable thead td,.CybotCookiebotDialogDetailBodyContentCookieTypeTable thead th{background-color:#000006!important;border-bottom:1px solid #000008;color:#000002!important;font-weight:400;padding:2px;text-align:left;vertical-align:top}div[dir=rtl] .CybotCookiebotDialogDetailBodyContentCookieTypeTable thead td,div[dir=rtl] .CybotCookiebotDialogDetailBodyContentCookieTypeTable thead th{text-align:right}.CybotCookiebotDialogDetailBodyContentCookieTypeTable tbody td{border-bottom:1px solid #000008;border-right:1px solid #000006;color:#000002!important;font-size:9pt;max-width:72px;overflow:hidden;padding:4px;text-align:left;vertical-align:top}.CybotCookiebotDialogDetailBodyContentCookieTypeTable tbody td:last-child{border-right:0}div[dir=rtl] .CybotCookiebotDialogDetailBodyContentCookieTypeTable tbody td{text-align:right}.CybotCookiebotDialogDetailBodyContentCookieTypeTable tbody td.CybotCookiebotDialogDetailBodyContentCookieTypeTableEmpty{border:none;border-top:1px solid #000008;padding:4px 0 0}#CybotCookiebotDialogBodyIABIntro,.CybotCookiebotDialogBodyIABIntroContainer{margin-bottom:12px}.CybotCookiebotDialogBodyLevelButtonIABHeader{font-weight:700;text-transform:uppercase}.CybotCookiebotDialogBodyLevelButtonIABHeader,.CybotCookiebotDialogBodyLevelSectionIAB{border-top:1px solid #000008;margin-bottom:12px;margin-top:2px;padding-top:8px}.CybotCookiebotDialogBodyLevelButtonIABDescription{margin-bottom:12px;margin-top:8px}.CybotCookiebotDialogBodyLevelButtonIABLabel{font-weight:700}ul.CybotCookiebotDialogBodyLevelButtonIABBullet{list-style-type:disc;margin:3px 0 0;padding-inline-start:18px}.CybotCookiebotDialogBodyLevelButtonIABHeaderToggle{float:right}.CybotCookiebotDialogBodyContentLabelPersonalInformation{font-weight:400!important}'
  )
}
var CookiebotDialog, CookieConsentDialog
CookiebotDialog = CookieConsentDialog = new CookieControl.Dialog(
  CookieConsent,
  'bottom_customcolor',
  'Στο Πλαίσιο χρησιμοποιούμε Cookies!',
  '<p>&Chi;&rho;&eta;&sigma;&iota;&mu;&omicron;&pi;&omicron;&iota;&omicron;ύ&mu;&epsilon; cookies, &gamma;&iota;&alpha; &nu;&alpha; &sigma;&omicron;&upsilon; &pi;&rho;&omicron;&sigma;&phi;έ&rho;&omicron;&upsilon;&mu;&epsilon; &pi;&rho;&omicron;&sigma;&omega;&pi;&omicron;&pi;&omicron;&iota;&eta;&mu;έ&nu;&eta; &epsilon;&mu;&pi;&epsilon;&iota;&rho;ί&alpha; &pi;&epsilon;&rho;&iota;ή&gamma;&eta;&sigma;&eta;&sigmaf;.<br />&Kappa;ά&nu;&epsilon; &laquo;&kappa;&lambda;&iota;&kappa;&raquo; &sigma;&tau;&omicron; &kappa;&omicron;&upsilon;&mu;&pi;ί <strong>&laquo;&Alpha;&pi;&omicron;&delta;&omicron;&chi;ή ό&lambda;&omega;&nu;&raquo;</strong> &kappa;&alpha;&iota; &beta;&omicron;ή&theta;&eta;&sigma;έ &mu;&alpha;&sigmaf; &nu;&alpha; &pi;&rho;&omicron;&sigma;&alpha;&rho;&mu;ό&sigma;&omicron;&upsilon;&mu;&epsilon; &tau;&iota;&sigmaf; &pi;&rho;&omicron;&tau;ά&sigma;&epsilon;&iota;&sigmaf; &mu;&alpha;&sigmaf; &alpha;&pi;&omicron;&kappa;&lambda;&epsilon;&iota;&sigma;&tau;&iota;&kappa;ά &sigma;&tau;&omicron; &pi;&epsilon;&rho;&iota;&epsilon;&chi;ό&mu;&epsilon;&nu;&omicron; &pi;&omicron;&upsilon; &sigma;&epsilon; &epsilon;&nu;&delta;&iota;&alpha;&phi;έ&rho;&epsilon;&iota;. &Epsilon;&nu;&alpha;&lambda;&lambda;&alpha;&kappa;&tau;&iota;&kappa;ά &kappa;&lambda;ί&kappa;&alpha;&rho;&epsilon; &alpha;&upsilon;&tau;ά &pi;&omicron;&upsilon; &theta;&epsilon;&sigmaf; &kappa;&alpha;&iota; &pi;ά&tau;&alpha; <strong>&laquo;&Alpha;&pi;&omicron;&delta;&omicron;&chi;ή &epsilon;&pi;&iota;&lambda;&omicron;&gamma;ώ&nu;&raquo;</strong>! <a href="https://www.plaisio.gr/Cookies-Policy" style="color:#008cb9;text-decoration:none;" target="_blank">&laquo;&Epsilon;&delta;ώ&raquo;</a> &theta;&alpha; &beta;&rho;&epsilon;&iota;&sigmaf; ό&lambda;&epsilon;&sigmaf; &tau;&iota;&sigmaf; &pi;&lambda;&eta;&rho;&omicron;&phi;&omicron;&rho;ί&epsilon;&sigmaf; &pi;&omicron;&upsilon; &chi;&rho;&epsilon;&iota;ά&zeta;&epsilon;&sigma;&alpha;&iota;.</p><style>a#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection{ float: left;    margin-left:0;background-color: #15c4a0; padding: 3px 14px; border:none;color:#fff}a#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection{ float: left;    margin-left:0;background-color: #15c4a0; padding: 3px 14px; border:none;color:#fff}a#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection:hover{    color: #fff;}div#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelectionWrapper{    width:100%;	margin-right: -8px;}</style>',
  'Επιτρέπονται όλα τα cookies',
  'Χρησιμοποιήστε μόνο τα απαραίτητα cookies',
  'leveloptin',
  null,
  false,
  'strict',
  'el',
  '<p style="">&Tau;&alpha; cookies &epsilon;ί&nu;&alpha;&iota; &mu;&iota;&kappa;&rho;ά &alpha;&rho;&chi;&epsilon;ί&alpha; &kappa;&epsilon;&iota;&mu;έ&nu;&omicron;&upsilon; &pi;&omicron;&upsilon; &chi;&rho;&eta;&sigma;&iota;&mu;&omicron;&pi;&omicron;&iota;&omicron;ύ&nu;&tau;&alpha;&iota; &alpha;&pi;ό &tau;&omicron;&upsilon;&sigmaf; &delta;&iota;&kappa;&tau;&upsilon;&alpha;&kappa;&omicron;ύ&sigmaf; &tau;ό&pi;&omicron;&upsilon;&sigmaf; &gamma;&iota;&alpha; &nu;&alpha; &kappa;ά&nu;&omicron;&upsilon;&nu; &tau;&eta;&nu; &epsilon;&mu;&pi;&epsilon;&iota;&rho;ί&alpha; &tau;&omicron;&upsilon; &chi;&rho;ή&sigma;&tau;&eta; &pi;&iota;&omicron; &alpha;&pi;&omicron;&tau;&epsilon;&lambda;&epsilon;&sigma;&mu;&alpha;&tau;&iota;&kappa;ή.</p><p style="">&Omicron; &nu;ό&mu;&omicron;&sigmaf; &alpha;&nu;&alpha;&phi;έ&rho;&epsilon;&iota; ό&tau;&iota; &mu;&pi;&omicron;&rho;&omicron;ύ&mu;&epsilon; &nu;&alpha; &alpha;&pi;&omicron;&theta;&eta;&kappa;&epsilon;ύ&sigma;&omicron;&upsilon;&mu;&epsilon; &tau;&alpha; cookies &sigma;&tau;&eta; &sigma;&upsilon;&sigma;&kappa;&epsilon;&upsilon;ή &sigma;&alpha;&sigmaf;, &epsilon;&phi;ό&sigma;&omicron;&nu; &epsilon;ί&nu;&alpha;&iota; &alpha;&pi;&omicron;&lambda;ύ&tau;&omega;&sigmaf; &alpha;&nu;&alpha;&gamma;&kappa;&alpha;ί&alpha; &gamma;&iota;&alpha; &tau;&eta; &lambda;&epsilon;&iota;&tau;&omicron;&upsilon;&rho;&gamma;ί&alpha; &alpha;&upsilon;&tau;ή&sigmaf; &tau;&eta;&sigmaf; &iota;&sigma;&tau;&omicron;&sigma;&epsilon;&lambda;ί&delta;&alpha;&sigmaf;. &Gamma;&iota;&alpha; ό&lambda;&omicron;&upsilon;&sigmaf; &tau;&omicron;&upsilon;&sigmaf; ά&lambda;&lambda;&omicron;&upsilon;&sigmaf; &tau;ύ&pi;&omicron;&upsilon;&sigmaf; cookies &chi;&rho;&epsilon;&iota;&alpha;&zeta;ό&mu;&alpha;&sigma;&tau;&epsilon; &tau;&eta;&nu; ά&delta;&epsilon;&iota;ά &sigma;&alpha;&sigmaf;.</p><p style="">&Mu;&pi;&omicron;&rho;&epsilon;ί&tau;&epsilon; &nu;&alpha; &alpha;&lambda;&lambda;ά&xi;&epsilon;&tau;&epsilon; ή &nu;&alpha; &kappa;&alpha;&tau;&alpha;&rho;&gamma;ή&sigma;&epsilon;&tau;&epsilon; &tau;&eta; &sigma;&upsilon;&nu;&alpha;ί&nu;&epsilon;&sigma;ή &sigma;&alpha;&sigmaf; &alpha;&nu;ά &pi;ά&sigma;&alpha; &sigma;&tau;&iota;&gamma;&mu;ή &mu;έ&sigma;&omega; &tau;&eta;&sigmaf; &Delta;ή&lambda;&omega;&sigma;&eta;&sigmaf; &gamma;&iota;&alpha; &tau;&alpha; Cookies &sigma;&tau;&eta;&nu; &iota;&sigma;&tau;&omicron;&sigma;&epsilon;&lambda;ί&delta;&alpha; &mu;&alpha;&sigmaf;.</p><p style="">&Mu;ά&theta;&epsilon;&tau;&epsilon; &pi;&epsilon;&rho;&iota;&sigma;&sigma;ό&tau;&epsilon;&rho;&alpha; &sigma;&chi;&epsilon;&tau;&iota;&kappa;ά &mu;&epsilon; &tau;&omicron; &pi;&omicron;&iota;&omicron;&iota; &epsilon;ί&mu;&alpha;&sigma;&tau;&epsilon;, &mu;&epsilon; &tau;&omicron; &pi;&omega;&sigmaf; &mu;&pi;&omicron;&rho;&epsilon;ί&tau;&epsilon; &nu;&alpha; <a href="https://www.plaisio.gr/contact.aspx" style="">&epsilon;&pi;&iota;&kappa;&omicron;&iota;&nu;&omega;&nu;ή&sigma;&epsilon;&tau;&epsilon; &mu;&alpha;&zeta;ί &mu;&alpha;&sigmaf;</a> &kappa;&alpha;&iota; &mu;&epsilon; &tau;&omicron; &pi;&omega;&sigmaf; &epsilon;&pi;&epsilon;&xi;&epsilon;&rho;&gamma;&alpha;&zeta;ό&mu;&alpha;&sigma;&tau;&epsilon; &tau;&alpha; &pi;&rho;&omicron;&sigma;&omega;&pi;&iota;&kappa;ά &delta;&epsilon;&delta;&omicron;&mu;έ&nu;&alpha; &sigma;&tau;&eta;&nu; <a href="https://www.plaisio.gr/CorporateTerms.aspx?show=00.PlaisioTermsOfUse" style="">&Pi;&omicron;&lambda;&iota;&tau;&iota;&kappa;ή &Pi;&rho;&omicron;&sigma;&tau;&alpha;&sigma;ί&alpha;&sigmaf; &Pi;&rho;&omicron;&sigma;&omega;&pi;&iota;&kappa;ώ&nu; &Delta;&epsilon;&delta;&omicron;&mu;έ&nu;&omega;&nu;</a> &mu;&alpha;&sigmaf;.</p>',
  '&Tau;&alpha; &alpha;&pi;&alpha;&rho;&alpha;ί&tau;&eta;&tau;&alpha; cookies &epsilon;&pi;&iota;&tau;&rho;έ&pi;&omicron;&upsilon;&nu; &tau;&eta;&nu; &epsilon;&kappa;&tau;έ&lambda;&epsilon;&sigma;&eta; &beta;&alpha;&sigma;&iota;&kappa;ώ&nu; &lambda;&epsilon;&iota;&tau;&omicron;&upsilon;&rho;&gamma;&iota;ώ&nu; &tau;&omicron;&upsilon; site, ό&pi;&omega;&sigmaf; &tau;&eta;&nu; &pi;&rho;&omicron;&sigma;&theta;ή&kappa;&eta; &pi;&rho;&omicron;ϊό&nu;&tau;&omega;&nu; &sigma;&tau;&omicron; &kappa;&alpha;&lambda;ά&theta;&iota; &tau;&eta;&nu; &eta;&lambda;&epsilon;&kappa;&tau;&rho;&omicron;&nu;&iota;&kappa;ή &pi;&lambda;&eta;&rho;&omega;&mu;ή &kappa;&alpha;&iota; &tau;&eta;&nu; &alpha;&pi;&omicron;&theta;ή&kappa;&epsilon;&upsilon;&sigma;&eta; &pi;&rho;&omicron;ϊό&nu;&tau;&omega;&nu; &sigma;&tau;&eta; wish-list. &Chi;&omega;&rho;ί&sigmaf; &alpha;&upsilon;&tau;ά &pi;&lambda;ή&tau;&tau;&epsilon;&tau;&alpha;&iota; ά&mu;&epsilon;&sigma;&alpha; &eta; &omicron;&mu;&alpha;&lambda;ή &lambda;&epsilon;&iota;&tau;&omicron;&upsilon;&rho;&gamma;ί&alpha; &tau;&omicron;&upsilon; e-shop &kappa;&alpha;&iota; &upsilon;&pi;&omicron;&beta;&alpha;&theta;&mu;ί&zeta;&epsilon;&tau;&alpha;&iota; &kappa;&alpha;&iota; &eta; &pi;&rho;&omicron;&sigma;&omega;&pi;&iota;&kappa;ή &sigma;&omicron;&upsilon; &epsilon;&mu;&pi;&epsilon;&iota;&rho;ί&alpha; &pi;&lambda;&omicron;ή&gamma;&eta;&sigma;&eta;&sigmaf;.',
  '&Tau;&alpha; cookies &lambda;&epsilon;&iota;&tau;&omicron;&upsilon;&rho;&gamma;&iota;&kappa;ό&tau;&eta;&tau;&alpha;&sigmaf; &laquo;&alpha;&pi;&omicron;&mu;&nu;&eta;&mu;&omicron;&nu;&epsilon;ύ&omicron;&upsilon;&nu;&raquo; &tau;&iota;&sigmaf; &pi;&rho;&omicron;&tau;&iota;&mu;ή&sigma;&epsilon;&iota;&sigmaf; &sigma;&omicron;&upsilon; &kappa;&alpha;&tau;ά &tau;&eta;&nu; &pi;&epsilon;&rho;&iota;ή&gamma;&eta;&sigma;&eta; &sigma;&omicron;&upsilon; &sigma;&tau;&omicron; site &mu;&alpha;&sigmaf;, ώ&sigma;&tau;&epsilon; &nu;&alpha; &mu;&pi;&omicron;&rho;&omicron;ύ&mu;&epsilon; &nu;&alpha; &sigma;&omicron;&upsilon; &pi;&rho;&omicron;&tau;&epsilon;ί&nu;&omicron;&upsilon;&mu;&epsilon; &tau;&alpha; &kappa;&alpha;&tau;ά&lambda;&lambda;&eta;&lambda;&alpha; &pi;&rho;&omicron;ϊό&nu;&tau;&alpha; &kappa;&alpha;&iota; &tau;&omicron; &alpha;&pi;&alpha;&rho;&alpha;ί&tau;&eta;&tau;&omicron; &pi;&epsilon;&rho;&iota;&epsilon;&chi;ό&mu;&epsilon;&nu;&omicron; &mu;&epsilon; &beta;ά&sigma;&eta; &tau;&iota;&sigmaf; &alpha;&nu;ά&gamma;&kappa;&epsilon;&sigmaf; &sigma;&omicron;&upsilon;. &Mu;&epsilon; &alpha;&upsilon;&tau;ά &tau;&alpha; cookies &alpha;&pi;&omicron;&lambda;&alpha;&mu;&beta;ά&nu;&epsilon;&iota;&sigmaf; &mu;&iota;&alpha; &epsilon;&xi;&alpha;&tau;&omicron;&mu;&iota;&kappa;&epsilon;&upsilon;&mu;έ&nu;&eta; &epsilon;&kappa;&delta;&omicron;&chi;ή &tau;&omicron;&upsilon; plaisio.gr &mu;&epsilon; &alpha;&pi;&omicron;&tau;έ&lambda;&epsilon;&sigma;&mu;&alpha; &nu;&alpha; &beta;&rho;ί&sigma;&kappa;&epsilon;&iota;&sigmaf; &pi;&omicron;&lambda;ύ &pi;&iota;&omicron; &epsilon;ύ&kappa;&omicron;&lambda;&alpha; &alpha;&upsilon;&tau;ό &pi;&omicron;&upsilon; &alpha;&nu;&alpha;&zeta;&eta;&tau;ά&sigmaf;. &Omicron;&iota; &pi;&lambda;&eta;&rho;&omicron;&phi;&omicron;&rho;ί&epsilon;&sigmaf; &epsilon;ί&nu;&alpha;&iota; &alpha;&nu;ώ&nu;&upsilon;&mu;&epsilon;&sigmaf;.',
  '&Tau;&alpha; &sigma;&tau;&alpha;&tau;&iota;&sigma;&tau;&iota;&kappa;ά cookies ή analytics cookies &epsilon;ί&nu;&alpha;&iota; &upsilon;&pi;&omicron;&sigma;ύ&nu;&omicron;&lambda;&omicron; &tau;&omega;&nu; cookies &lambda;&epsilon;&iota;&tau;&omicron;&upsilon;&rho;&gamma;&iota;&kappa;ό&tau;&eta;&tau;&alpha;&sigmaf; &kappa;&alpha;&iota; &mu;&alpha;&sigmaf; &delta;ί&nu;&omicron;&upsilon;&nu; &tau;&eta; &delta;&upsilon;&nu;&alpha;&tau;ό&tau;&eta;&tau;&alpha; &nu;&alpha; &alpha;&xi;&iota;&omicron;&lambda;&omicron;&gamma;&omicron;ύ&mu;&epsilon; &tau;&eta;&nu; &alpha;&pi;&omicron;&tau;&epsilon;&lambda;&epsilon;&sigma;&mu;&alpha;&tau;&iota;&kappa;ό&tau;&eta;&tau;&alpha; &tau;&omega;&nu; &delta;&iota;ά&phi;&omicron;&rho;&omega;&nu; &lambda;&epsilon;&iota;&tau;&omicron;&upsilon;&rho;&gamma;&iota;ώ&nu; &tau;&omicron;&upsilon; site &mu;&alpha;&sigmaf; ώ&sigma;&tau;&epsilon; &nu;&alpha; &beta;&epsilon;&lambda;&tau;&iota;ώ&nu;&omicron;&upsilon;&mu;&epsilon; &sigma;&upsilon;&nu;&epsilon;&chi;ώ&sigmaf; &tau;&eta;&nu; &epsilon;&mu;&pi;&epsilon;&iota;&rho;ί&alpha; &pi;&omicron;&upsilon; &sigma;&omicron;&upsilon; &pi;&rho;&omicron;&sigma;&phi;έ&rho;&omicron;&upsilon;&mu;&epsilon;.',
  '&Tau;&alpha; cookies &pi;&rho;&omicron;ώ&theta;&eta;&sigma;&eta;&sigmaf; &chi;&rho;&eta;&sigma;&iota;&mu;&omicron;&pi;&omicron;&iota;&omicron;ύ&nu;&tau;&alpha;&iota; &gamma;&iota;&alpha; &nu;&alpha; &laquo;&sigma;&epsilon;&rho;&beta;ί&rho;&omicron;&upsilon;&nu;&raquo; &delta;&iota;&alpha;&phi;&eta;&mu;ί&sigma;&epsilon;&iota;&sigmaf; &pi;&iota;&omicron; &sigma;&chi;&epsilon;&tau;&iota;&kappa;έ&sigmaf; &mu;&epsilon; &epsilon;&sigma;έ&nu;&alpha; &kappa;&alpha;&iota; &tau;&alpha; &epsilon;&nu;&delta;&iota;&alpha;&phi;έ&rho;&omicron;&nu;&tau;ά &sigma;&omicron;&upsilon;. &Chi;&rho;&eta;&sigma;&iota;&mu;&omicron;&pi;&omicron;&iota;&omicron;ύ&nu;&tau;&alpha;&iota; &epsilon;&pi;ί&sigma;&eta;&sigmaf; &gamma;&iota;&alpha; &tau;&eta;&nu; &alpha;&pi;&omicron;&sigma;&tau;&omicron;&lambda;ή &sigma;&tau;&omicron;&chi;&epsilon;&upsilon;&mu;έ&nu;&eta;&sigmaf; &delta;&iota;&alpha;&phi;ή&mu;&iota;&sigma;&eta;&sigmaf; &mu;&epsilon; &sigma;&tau;ό&chi;&omicron; &tau;&omicron;&nu; &pi;&epsilon;&rho;&iota;&omicron;&rho;&iota;&sigma;&mu;ό &tau;&omega;&nu; &mu;&alpha;&zeta;&iota;&kappa;ώ&nu;, &alpha;&nu;&epsilon;&pi;&iota;&theta;ύ&mu;&eta;&tau;&omega;&nu; &kappa;&alpha;&iota; &alpha;&nu;&omicron;ύ&sigma;&iota;&omega;&nu; &delta;&iota;&alpha;&phi;&eta;&mu;&iota;&sigma;&tau;&iota;&kappa;ώ&nu; &mu;&eta;&nu;&upsilon;&mu;ά&tau;&omega;&nu;.',
  '&Tau;&alpha; Cookies &alpha;&upsilon;&tau;ά &beta;&rho;ί&sigma;&kappa;&omicron;&nu;&tau;&alpha;&iota; &sigma;&epsilon; &sigma;&tau;ά&delta;&iota;&omicron; &tau;&alpha;&xi;&iota;&nu;ό&mu;&eta;&sigma;&eta;&sigmaf;, &sigma;&epsilon; &sigma;&upsilon;&nu;&epsilon;&rho;&gamma;&alpha;&sigma;ί&alpha; &mu;&epsilon; &tau;&omicron;&upsilon;&sigmaf; &pi;&alpha;&rho;ό&chi;&omicron;&upsilon;&sigmaf; &tau;&omicron;&upsilon;&sigmaf;.',
  'OK',
  'Αποδοχή όλων',
  'Αποδοχή επιλογών',
  'allowallorselection',
  'Απόκρυψη λεπτομερειών',
  'Προβολή λεπτομερειών',
  'Προσαρμογή'
)
CookieConsentDialog.noCookiesTypeText =
  'Δεν χρησιμοποιούμε cookies αυτού του τύπου'
CookieConsentDialog.aboutCookiesText = 'Σχετικά'
CookieConsentDialog.cookiesOverviewText = 'Δήλωση Cookie'
CookieConsentDialog.cookieHeaderTypeNecessary = 'Αναγκαία ({0})'
CookieConsentDialog.cookieHeaderTypePreference = 'Λειτουργικότητας ({0})'
CookieConsentDialog.cookieHeaderTypeStatistics = 'Στατιστικά ({0})'
CookieConsentDialog.cookieHeaderTypeAdvertising = 'Προώθησης ({0})'
CookieConsentDialog.cookieHeaderTypeUnclassified = 'Αταξινόμητα ({0})'
CookieConsentDialog.cookieTableHeaderName = 'Όνομα'
CookieConsentDialog.cookieTableHeaderProvider = 'Πάροχος'
CookieConsentDialog.cookieTableHeaderPurpose = 'Σκοπός'
CookieConsentDialog.cookieTableHeaderType = 'Τύπος'
CookieConsentDialog.cookieTableHeaderExpiry = 'Λήξη'
CookieConsentDialog.bulkconsentDomainsString = ''
CookieConsentDialog.impliedConsentOnScroll = true
CookieConsentDialog.impliedConsentOnRefresh = false
CookieConsentDialog.showLogo = true
CookieConsentDialog.mandatoryText =
  'Υποχρεωτικά - δεν μπορείτε να μην επιλέξετε.'
CookieConsentDialog.logoAltText = 'λογότυπο'
CookieConsentDialog.logo =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAtaSURBVGhDxVkJVFZlGv5F2ZNFFNwIyCVFQQVzQ1wQtFQEF1DHEALF3MV9Cdz3Lc00NU1b1VFRSc0FNM3MUufoZDVLU53jjDWd6ZTjOU6T+szzfD+X6O9HCdF5z3nOvf+9373vc7/vXb/f9oAlnfiC+A9xgVhHDCRCiIcuUcTLxFoiWBfKkLQqNhtSOnTArAEDMKRzZ7Rt3Bj+3t7gvTvEGWIk4Uc8cNFMXW9Svz5CatUSgSuEt244kctxERH44/PP46Plyw3eX7IEBTNnYklaGrq3bAlPNze94yrRzzzxACXdw9UV7y1ahFfHj5dSobW580tJJvDC8OGG7LE5c0pwYv58fLB0KT5ctgw7J03CoI4dkREX9/mitLT2fKa5efoBSKsqVaog8YknEBseLtLfE7XMnZ/lEeLLzs2a4RwJlibtiFMLF5oxn6xdi2VDh+p9MqFVBK2s8iWNuEjIRjvrgoNs9fXywp5p03CaxJwRdsTxuXNxasECTE1Ohlu1avqAI8RDsX1LWmpFclNSjE0fnT3bKdHSkOm8S9I6XlixAi89+ywCqlcX+fNEgHnrb5BA4m5fLPOoYT/9hTzt7eGBglmzcJJEnBEVjhJF8+YZW9fYN3NycDg31/w+T/L6HeTrK/LnCC/z5nuIBm0nfiC+IXKJ0tKBOEFcJ74j9hKPEZZ0cnFxwcujR+M0HdgZaUGzK6R2iIGLzUUE4eHihuyE7uY5rZac38fTU/f2mDffQ5b5Mc7OZNzNio9HtapV9WBf+y1bS+JmJEPhrN69MalHDzwaEKD7XxGWgyqu/7hwyBCcLcMxjxPvL14MhUqORd74JOS/MhHjMuLN78EdY82z50l+RXo6bDQ9Xp9E3FUuKWF8tWkTrtDTw4OD9dBL9lu2/Mdr18ahCRNwYupUnJo+Ha8z3NWwJ5R59iHGxK7nDRxolt0Z8TMkvY7PcRzeWj0CuJEPXHsT+Pc+LJrUz1zfwTApu7+4ciXSmLh47b9EU6JM2dWwTh3smjwZa4YNs5ZqlP2W7cus2Fi8y2ixd8wY7KU56DyuaVONOWofYgslflrK0HbWIX5bUPzOTugBTy9X3PpkM/CXrbj9KY9fbse191Ya4vMGDTbPG5OiL4TZk90xKShLGhJ/qko75VF4h/AkJJd7t2iBMzNmYN/YsSgYN87MfKR9VXbah9h6uHBpZZ+K0c6IK25PSeoLm4sN35xdDVx9A3dE/J87cCE/z+hd/UymWRk58Tl+6OJBgyw+8VJSliiBJBLdzK+fZbKyZm5iIo5OnIjD9PxsLqPqEd7raR9iWxcaGGgiRiFjszPiijb7+fFuVashKaElrn9G0l+/ha8vrkPryBDUqu5rntU7NL6Qx9NERL160qPA8JulKvEmgYYkV+yYwgJC4k/8K7NbNxMVHAlb0CzKDJammUwJP18PRLd+DO7uVeHl6o7No0aZ2S79zAf8nZeUZOmLJCokmt1lhAgrPFqy0YcZU7N5ko5VWrEjRF7O+wZXbVBMLGIaNUVG1ziTbVXbOCauIq5SAR020J6YltjVVY5kEpjRv79xPhErrdgZNEZ+oPGyYx31wc6ePU5TOcNjIn2Mej42GitBxhFIjYkxBFR3OCq+X+idp4nZ9C/quk3UleKKisrQAwTSu3Y1ScNyqMqGiBfxuC0zE+4MENR51+jiTDoSKwnVEGjKLLoiI8Mss7xftqnEoZnXh8iOK2UF9A6+ez9D8KM1aoj4WKLcEkHcCQsKQnLbtqZ+VmizMqRIq4zdw9jeO6o1w1cIxvXqZey4rNBYHijCfMgodY5Oe4bdU+vQUBFfbRiVU+YEsmLTy1R+KqSVJqQsd4gVXnDNmvD390TXTqbRYIfD2oNjrXHlhVZKzz1P8+gd9QR6RLTC8tRUxNsbmB2GUTlEHcln6nxU/DhTpIw4NZkZkWS/KFoK3DqE+TnJ5rf6TH2Ys+fKgkwtq5u98AoJroFGDQLNubebu44FRLlkohqEraxR1G86U/Qr4rcrTlw61mdnm2cX8B34B4uwv23FK5NMVBH2E/cUd+JGWpcuxgmdKRJKTCXAbipxnZsZJRUxFWXelHYxqFXzEeCL7cSrwMW1YApFbMSjeq96hjKlGhG7ZfTo7Bezs2/J5hQ5nCkSlDgs5+xV7JxjK+icIp7aPgY1A7w509tYOZL4uRXA2UWIaW6ILzQMKaoAtc2gzZ7uhDqfj1UlvsWC6g+rVpVL+S/CIWe5ouFQpqLekxyQOyYRd74i8Y+WY/OEXlD1yesZhK028akGCSJbl7EyqU0bbKFNi4izlz9o6KNHsMsSp3p1/BBaz/SgFtoQtpzafn7YMGIENo4cie0M8u/k5Rlnk03rBWq17icWVwRWOKSZok+raCS3iELPiEiV0TfI2UfEM2r5+Jh0LbLGJnmuKm0nO6GZ/QYw2aSbAkgOWJ4CqjKhBHSCbeJHdPwEewwvEmmJCpZbcwcPNsQ1WDO8moHf1cVszhjENGlqbxDu4qCVDVWFh1gmq9t6jX2ql32v0WoljRRqJ1VmIXJaJl9PbyTEhuPqpfU4vGUCu20bxvbsZRzPmZKKQM4sR5RJCDp3rMX3kXTRlCkY3qmTSMtM1JCXSJK8Vd2HQpG6bF5DwcaxzIAH2YHnozEzV6cmze7a3VjQFoRMS45dVlSRyckMZMNRIQ0QHdbQRBKr19RsH2Ro3c8AkU8E0ZzJydpxKBGl9Eux7Ni1kyRbDvTxRbuoMFw5vQJvrLRvJ0zuk1RSVDmDZks+IuW7p0wt2WYwZBxmUtd1X1vNrZoHIzK8PrQL9nvOrt5xhDatnQQ15JmxsdL/IxFG/Ep6EKbq+3jNGmzg1/t4eBnCwpOtWhllZUUXzZKWejcVtWnQqOS5sJpBJmLJFEqTl8lN7mMvCfD5Ntxip6/zmf0HGF/bN348Dk+YgG1ZWfB2N/WJ2sUyZWddf38TDlVMHTCb8EONYpG6W6Og/Y8jJFavRgCCAqtj87Is7NgwBm1ahDJpuOA1Eim9e6v3yTSpE5kpMUjr296cv0KbPsrecx/N4xhXJDokRNf1d0xZfyAY0e7o37s0b14SGhUWpeReGVAzOOapnma/5PPjS4Dv9wDf7sRPf96C+nX90Dmc73RwbJnQ9H794OPuDT/P6shl2Vo0axb28oNOkvzv2rUzH0N0Erl7ibqcW0/Ti1V3lzf8yWm7hkfg8UZB9mqOS3/7k03Ad7uRmdoRgd7+ZkPTcQI0MbomlCY9sXt3i/Q99w1LyxAC2iORyZQn8SjLZnSJg4dnNfxw8UWzM4Wrr5t9weZN6iIqtIFTx1b0UBR6mzVRfvG23rSePaEymhz0B9lvliwCAzp0MKZihSlHxRbkuHup1MPVjdHoMZzdPxuXjy1GerHtrh02zLzDGm/N8mEmmPziLb0iOvYoNt4aT6wnKiz9iRvRDRpgB2fECpWlCVvQR2nZN4x4FoHV/SzlcKviiudSUkpm28wwCR957jkcyMkxs3ycpYVi9VPFW8/EXOK+pQVxQSFpDO3uKBWqcVWCsWbNdOEW+eJZXZM1DCsznsEB2q2cUoR1/TAj1QFOgqKG9iAVOeYmJyPY3r1/S6RKaWWJGzGfuBkSEICJLDf3cbbeJ5n3uAJFxcQtKGzKLM7QxAoZIg+xSHqbs1rAuKz99UKeH+Rxcf/+aBMWZs3yLuKB/ePchNhK3Kzp7Y3EyEgs6NsXO5isjpCMqriTtFkdC2nvhcyCIilodmUWLwwZAu2zN65d2yKsak/J76GI9tHziEsECzJPsw38JON/Wvv2GE0Hy0lIwPj4eAxjWO0XHY329JN6rPs1ntC/yZuJWOL/JvrzKoVQStb/k38lVMWJ4E/ENeIDQkRHEGoPZXr3ITbb/wBPxbUKq/AFIwAAAABJRU5ErkJggg=='
CookieConsentDialog.customImages.showdetails =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAGCAMAAAAmGUT3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI3NDEyNDEwNzk0MjExRTQ5RUE5RkRFMUQ3MEU1NTZDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI3NDEyNDExNzk0MjExRTQ5RUE5RkRFMUQ3MEU1NTZDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Qjc0MTI0MEU3OTQyMTFFNDlFQTlGREUxRDcwRTU1NkMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Qjc0MTI0MEY3OTQyMTFFNDlFQTlGREUxRDcwRTU1NkMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz70ohqeAAAABlBMVEVgYGAAAAAPhzbbAAAAAnRSTlP/AOW3MEoAAAAjSURBVHjaYmBkYAQBBkYGIAAxQBQcQ/ggCiLFCGFBCIAAAwADkwAg7Yr51AAAAABJRU5ErkJggg=='
CookieConsentDialog.customImages.hidedetails =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAGCAYAAAARx7TFAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU0QzAwODExNzk0MjExRTQ4QzBERTBGMTkxMUY2M0M0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU0QzAwODEyNzk0MjExRTQ4QzBERTBGMTkxMUY2M0M0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTRDMDA4MEY3OTQyMTFFNDhDMERFMEYxOTExRjYzQzQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTRDMDA4MTA3OTQyMTFFNDhDMERFMEYxOTExRjYzQzQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz576KdnAAAATklEQVR42kyO2xEAMQgCJZ3afxFcyGRz+uMD3EHdXbYrJSltrz4Dt4UBNfsWPG614oRwO2Q/Eg+IwvnDj8kjk+48MzmZeNYI/4jRPwEGAFy/MS7NcXxJAAAAAElFTkSuQmCC'
CookieConsentDialog.customImages.cbCheckedNofocus =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADYSURBVDhPlZHBDcIwEAS3Ah6g4IBEBXRAIXTAg7ffCKFgix8V0EEqoINUgFIABdAB3tPZWJAQWOkUZ2/Hulzwj4oKq9LBjvcYqTUshqcet/KIO59qD6v0uBCS8mjo2aGabNGYHR4R5MjBl2av5hUWHC2CxuOgrRdoTljqMck41AIQ9LiqLRIwBM4ScFiLGzRz2MTxCL5fbGXNGogwQ7lXWLSaT5L/wjHyIDeXnTnixy7E6IRDcTFcUMzlSkYXzO/Udj9IEc4WVatNfQejuDBeoq9UJ/hrqYAn9gdqnPTA1H8AAAAASUVORK5CYII='
CookieConsentDialog.customImages.cbCheckedDisabled =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACqSURBVDhPlZAhEoMwEEWj6qpwPUBdVRUOhcJV1VVxgZ4GieaS/BfyZ8I0pemfeROS7MssG/7MRdzFKe4qQ/FLjGmtTi+Q4MnBu4JJLMIiLceLo5wFrVlsRUwuNmnNMwgExAcHjsVOUHCNuy034fYQdw8j0rMLLFOUn81iF0RGTRt5IZPzN3cfs/BBSQYGw4C+iqQk85/kUCTIHhQTdX6KDgPjEaco1pISwgqF8iXhkRBi4QAAAABJRU5ErkJggg=='
CookieConsentDialog.customImages.cbNotCheckedFocus =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAfSURBVDhPYxhaYBMJGAVgCOAAoxrxgKGukVgMBQwMAJF8G9GNgjddAAAAAElFTkSuQmCC'
CookieConsentDialog.customImages.cbCheckedFocus =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADbSURBVDhPlZCxDcIwFERvAoRAJAGJCdiAQSjpaGjpaBAKtuiYgA1SpWQDJqCmoGEBWnxf38YCh8BJX0nO96yfwz8alJgWBqveBh212sVwZnEpdrjxqXa7CosjIRmLM726bbpzXLM1Hh7kys6Xw0aNSoy5mgdzi60evcB8j4m+BuUGFQEBLU5qiwR0gYPcaDAT12losPDrEXy/uJaaNeBhhmKvv8Rd80E1q+YacZDNRe9c8aMLMZKwGxbDgnwuVjBSMP9Tj5tBinBUVKU29R30YmG8RD+pJPjrqIAnjdJzEmY21JIAAAAASUVORK5CYII='
CookieConsentDialog.customImages.cbNotCheckedNoFocus =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAfSURBVDhPYxhaoJgEjAIwBHCAUY14wFDXSCyGAgYGAFZ4Efmvu6AAAAAAAElFTkSuQmCC'
CookieConsentDialog.prechecked.preferences = false
CookieConsentDialog.prechecked.statistics = false
CookieConsentDialog.prechecked.marketing = false
CookieConsentDialog.optionaloptinSettings.displayConsentBanner = true
CookieConsentDialog.bannerCloseButtonEnabled = false
CookieConsentDialog.customColors.background = '#ffffff'
CookieConsentDialog.customColors.text = '#000000'
CookieConsentDialog.customColors.acceptbutton = '#15c4a0'
CookieConsentDialog.customColors.selectionbutton = '#188600'
CookieConsentDialog.customColors.declinebutton = '#333333'
CookieConsentDialog.customColors.buttontext = '#ffffff'
CookieConsentDialog.customColors.tab = '#f5f5f5'
CookieConsentDialog.customColors.border = '#cccccc'
CookieConsentDialog.lastUpdatedText =
  'Η δήλωση Cookie ενημερώθηκε τελευταία φορά στις {0} από το <a href="https://www.cookiebot.com" target="_blank" rel="noopener" title="Cookiebot">Cookiebot</a>'
CookieConsentDialog.lastUpdatedDate = 1637875256040
CookieConsentDialog.cookieTableNecessary = [
  [
    '__lc_cid',
    'accounts.livechatinc.com',
    "Necessary for the functionality of the website's chat-box function. ",
    '2 έτη',
    'HTTP',
    '1',
    '',
    'accounts.livechatinc.com'
  ],
  [
    '__lc_cst',
    'accounts.livechatinc.com',
    "Necessary for the functionality of the website's chat-box function. ",
    '2 έτη',
    'HTTP',
    '1',
    '',
    'accounts.livechatinc.com'
  ],
  [
    'gdpr',
    'aralego.com<br/>id5-sync.com',
    'Determines whether the visitor has accepted the cookie consent box. This ensures that the cookie consent box will not be presented again upon re-entry.  ',
    '1 έτος',
    'HTTP',
    '1',
    '',
    'aralego.com<br/>id5-sync.com'
  ],
  [
    'SERVERID',
    'cdn.e-satisfaction.com<br/>collection.e-satisfaction.com',
    'This cookie is used to assign the visitor to a specific server - this function is necessary for the functionality of the website.',
    'Session',
    'HTTP',
    '1',
    '',
    'cdn.e-satisfaction.com<br/>collection.e-satisfaction.com'
  ],
  [
    'AWSALBCORS',
    'gis.goinstore.com',
    'Registers which server-cluster is serving the visitor. This is used in context with load balancing, in order to optimize user experience.  ',
    '6 ημέρες',
    'HTTP',
    '1',
    '',
    'gis.goinstore.com'
  ],
  [
    '__cf_bm',
    'mgid.com',
    'This cookie is used to distinguish between humans and bots. This is beneficial for the website, in order to make valid reports on the use of their website.',
    '1 ημέρα',
    'HTTP',
    '1',
    '',
    'mgid.com'
  ],
  [
    'AI_buffer',
    'plaisio.gr',
    'Used in context with the "AI_sentBuffer" in order to limit the number of data-server-updates (Azure).  This synergy also allows the website to detect any duplicate data-server-updates. ',
    'Session',
    'HTML',
    '2',
    '',
    'az416426.vo.msecnd.net'
  ],
  [
    'AI_sentBuffer',
    'plaisio.gr',
    'Used in context with the "AI_buffer" in order to limit the number of data-server-updates (Azure). This synergy also allows the website to detect any duplicate data-server-updates. ',
    'Session',
    'HTML',
    '2',
    '',
    'az416426.vo.msecnd.net'
  ],
  [
    'ai_session',
    'plaisio.gr',
    'Preserves users states across page requests.',
    '1 ημέρα',
    'HTTP',
    '1',
    '',
    'az416426.vo.msecnd.net'
  ],
  [
    'AITR_OnError',
    'plaisio.gr',
    "This cookie is used to detect errors on the website - this information is sent to the website's support staff in order to optimize the visitor's experience on the website.",
    'Session',
    'HTML',
    '2',
    '',
    'az416426.vo.msecnd.net'
  ],
  [
    'AITR_TransmissionFailed',
    'plaisio.gr',
    "This cookie is used to detect errors on the website - this information is sent to the website's support staff in order to optimize the visitor's experience on the website.",
    'Session',
    'HTML',
    '2',
    '',
    'www.plaisio.gr'
  ],
  [
    'ak_bmsc',
    'plaisio.gr',
    'This cookie is used to distinguish between humans and bots. This is beneficial for the website, in order to make valid reports on the use of their website.',
    '1 ημέρα',
    'HTTP',
    '1',
    '',
    'www.plaisio.gr'
  ],
  [
    'algoliasearch-client-js',
    'plaisio.gr',
    "Necessary in order to optimize the website's search-bar function. The cookie ensures accurate and fast search results.",
    'Persistent',
    'HTML',
    '2',
    '',
    'www.plaisio.gr'
  ],
  [
    'ASP.NET_SessionId',
    'plaisio.gr',
    "Preserves the visitor's session state across page requests.",
    'Session',
    'HTTP',
    '1',
    '',
    'www.plaisio.gr'
  ],
  [
    'bm_mi',
    'plaisio.gr',
    "Used in context with the website's BotManager. The BotManager detects, categorizes and compiles reports on potential bots trying to access the website.",
    '1 ημέρα',
    'HTTP',
    '1',
    '',
    'www.plaisio.gr'
  ],
  [
    'bm_sv',
    'plaisio.gr',
    "Used in context with the website's BotManager. The BotManager detects, categorizes and compiles reports on potential bots trying to access the website.",
    '1 ημέρα',
    'HTTP',
    '1',
    '',
    'www.plaisio.gr'
  ],
  [
    'CookieConsent',
    'plaisio.gr',
    "Stores the user's cookie consent state for the current domain",
    '1 έτος',
    'HTTP',
    '1',
    '',
    'cookiebot.com'
  ],
  [
    'debug',
    'plaisio.gr',
    "This cookie is used to detect errors on the website - this information is sent to the website's support staff in order to optimize the visitor's experience on the website.",
    'Persistent',
    'HTML',
    '2',
    '',
    'www.plaisio.gr'
  ],
  [
    'RT',
    'plaisio.gr',
    'This cookie is used to identify the visitor through an application. This allows the visitor to login to a website through their LinkedIn application for example.',
    '6 ημέρες',
    'HTTP',
    '1',
    '',
    's.go-mpulse.net'
  ],
  [
    'opt_out',
    'postrelease.com',
    'Used to detect if the visitor has accepted the marketing category in the cookie banner. This cookie is necessary for GDPR-compliance of the website.  ',
    '1 έτος',
    'HTTP',
    '1',
    '',
    'postrelease.com'
  ],
  [
    'CONSENT',
    'youtube.com',
    'Used to detect if the visitor has accepted the marketing category in the cookie banner. This cookie is necessary for GDPR-compliance of the website.  ',
    '2 έτη',
    'HTTP',
    '1',
    '',
    'youtube.com'
  ],
  [
    'azuappgwplsgr',
    'cdn.plaisio.gr<br/>plaisio.gr',
    'Σε αναμονή',
    'Session',
    'HTTP',
    '1',
    '',
    'www.plaisio.gr'
  ],
  [
    'azuappgwplsgrCORS',
    'cdn.plaisio.gr<br/>plaisio.gr',
    'Σε αναμονή',
    'Session',
    'HTTP',
    '1',
    '',
    'www.plaisio.gr'
  ],
  [
    'gis',
    'plaisio.gr',
    'Σε αναμονή',
    'Persistent',
    'HTML',
    '2',
    '',
    'www.plaisio.gr'
  ],
  [
    'pls_cid',
    'plaisio.gr',
    'Σε αναμονή',
    '7 ημέρες',
    'HTTP',
    '1',
    '',
    'plaisio.gr'
  ],
  [
    'pls_uid',
    'plaisio.gr',
    'Σε αναμονή',
    '1 έτος',
    'HTTP',
    '1',
    '',
    'www.plaisio.gr'
  ],
  [
    '12244530:state',
    'secure-fra.livechatinc.com',
    'Σε αναμονή',
    'Persistent',
    'HTML',
    '2',
    '',
    'secure-fra.livechatinc.com'
  ],
  [
    'side_storage_12244530',
    'secure-fra.livechatinc.com',
    'Σε αναμονή',
    'Persistent',
    'HTML',
    '2',
    '',
    'secure-fra.livechatinc.com'
  ]
]
CookieConsentDialog.cookieTablePreference = [
  [
    '_ALGOLIA',
    'plaisio.gr',
    "Necessary in order to optimize the website's search-bar function. The cookie ensures accurate and fast search results.",
    '179 ημέρες',
    'HTTP',
    '1',
    '',
    'cdn.jsdelivr.net'
  ],
  [
    '@@lc_auth_token:#',
    'secure-fra.livechatinc.com',
    'Identifies the visitor across devices and visits, in order to optimize the chat-box function on the website. ',
    'Persistent',
    'HTML',
    '2',
    '^@@lc_auth_token:d+(:d+)?$',
    'secure-fra.livechatinc.com'
  ],
  [
    'yt-player-bandaid-host',
    'youtube.com',
    "Used to determine the optimal video quality based on the visitor's device and network settings. ",
    'Persistent',
    'HTML',
    '2',
    '',
    'youtube.com'
  ],
  [
    'yt-player-bandwidth',
    'youtube.com',
    "Used to determine the optimal video quality based on the visitor's device and network settings. ",
    'Persistent',
    'HTML',
    '2',
    '',
    'youtube.com'
  ]
]
CookieConsentDialog.cookieTableStatistics = [
  [
    'bounce',
    'adnxs.com',
    'Determines if a user leaves the website straight away. This information is used for internal statistics and analytics by the website operator.  ',
    'Session',
    'Pixel',
    '5',
    '',
    'secure.adnxs.com'
  ],
  [
    'collect',
    'google-analytics.com',
    "Used to send data to Google Analytics about the visitor's device and behavior. Tracks the visitor across devices and marketing channels.",
    'Session',
    'Pixel',
    '5',
    '^[r/]*collect$',
    'www.google-analytics.com'
  ],
  [
    'VID',
    'mail.ru',
    "Collects data on visitor interaction with the website's video-content - This data is used to make the website's video-content more relevant towards the visitor.  ",
    '1 έτος',
    'HTTP',
    '1',
    '',
    'mail.ru'
  ],
  [
    'cksync.php',
    'media.net',
    'This cookie is used to determine if cookie data synchronization is enabled or disabled – cookie data synchronization is used to synchronize and gather visitor data on several domains.',
    'Session',
    'Pixel',
    '5',
    '',
    'contextual.media.net'
  ],
  [
    'visitor-id',
    'media.net',
    "This cookie is used to collect information on the visitor. This information will be stored for internal analytics at the website's operator – Internal analytics is used by websites to optimize their domains.",
    '1 έτος',
    'HTTP',
    '1',
    '',
    'media.net'
  ],
  [
    '_dc_gtm_UA-#',
    'plaisio.gr',
    'Used by Google Tag Manager to control the loading of a Google Analytics script tag.',
    '1 ημέρα',
    'HTTP',
    '1',
    '^_dc_gtm_UA-.*',
    'www.google-analytics.com'
  ],
  [
    '_ga',
    'plaisio.gr',
    'Registers a unique ID that is used to generate statistical data on how the visitor uses the website.',
    '2 έτη',
    'HTTP',
    '1',
    '',
    'www.google-analytics.com'
  ],
  [
    '_ga_#',
    'plaisio.gr',
    'Used by Google Analytics to collect data on the number of times a user has visited the website as well as dates for the first and most recent visit. ',
    '2 έτη',
    'HTTP',
    '1',
    '^_ga_[A-Z0-9]{8,}$',
    'www.googletagmanager.com'
  ],
  [
    '_gat',
    'plaisio.gr',
    'Used by Google Analytics to throttle request rate',
    '1 ημέρα',
    'HTTP',
    '1',
    '^_gat(_.+)*$',
    'www.google-analytics.com'
  ],
  [
    '_gid',
    'plaisio.gr',
    'Registers a unique ID that is used to generate statistical data on how the visitor uses the website.',
    '1 ημέρα',
    'HTTP',
    '1',
    '',
    'www.google-analytics.com'
  ],
  [
    'ai_user',
    'plaisio.gr',
    'Used by Microsoft Application Insights software to collect statistical usage and telemetry information. The cookie stores a unique identifier to recognize users on returning visits over time.',
    '1 έτος',
    'HTTP',
    '1',
    '',
    'az416426.vo.msecnd.net'
  ],
  [
    'SC_ANALYTICS_GLOBAL_COOKIE',
    'plaisio.gr',
    'Used by Sitecore Engagement Analytics to identify the visitor on repeat visits to the website.',
    '10 έτη',
    'HTTP',
    '1',
    '',
    'www.plaisio.gr'
  ],
  [
    'PugT',
    'pubmatic.com',
    "Used to determine the number of times the cookies have been updated in the visitor's browser. Used to optimize the website's server efficiency.  ",
    '29 ημέρες',
    'HTTP',
    '1',
    '',
    'pubmatic.com'
  ],
  [
    '_livechat_has_visited',
    'secure-fra.livechatinc.com',
    'Identifies the visitor across devices and visits, in order to optimize the chat-box function on the website. ',
    'Persistent',
    'HTML',
    '2',
    '',
    'secure-fra.livechatinc.com'
  ],
  [
    'yandexuid',
    'yandex.ru',
    "Registers data on visitors' website-behaviour. This is used for internal analysis and website optimization. ",
    '10 έτη',
    'HTTP',
    '1',
    '',
    'yandex.ru'
  ],
  [
    'yt-player-headers-readable',
    'youtube.com',
    "Used to determine the optimal video quality based on the visitor's device and network settings. ",
    'Persistent',
    'HTML',
    '2',
    '',
    'youtube.com'
  ]
]
CookieConsentDialog.cookieTableAdvertising = [
  [
    'tuuid',
    '360yield.com<br/>bidswitch.net',
    "Collects visitor data related to the user's visits to the website, such as the number of visits, average time spent on the website and what pages have been loaded, with the purpose of displaying targeted ads.",
    '3 μήνες',
    'HTTP',
    '1',
    '',
    '360yield.com<br/>bidswitch.net'
  ],
  [
    'tuuid_lu',
    '360yield.com<br/>bidswitch.net',
    'Contains a unique visitor ID, which allows Bidswitch.com to track the visitor across multiple websites. This allows Bidswitch to optimize advertisement relevance and ensure that the visitor does not see the same ads multiple times.  ',
    '3 μήνες',
    'HTTP',
    '1',
    '',
    '360yield.com<br/>bidswitch.net'
  ],
  [
    'um',
    '360yield.com',
    "Registers the visitor's behavior on social media - can be used to optimize ad-relevance and general targeting.",
    '3 μήνες',
    'HTTP',
    '1',
    '',
    '360yield.com'
  ],
  [
    'umeh',
    '360yield.com',
    "Used to track visitors on multiple websites, in order to present relevant advertisement based on the visitor's preferences. ",
    '3 μήνες',
    'HTTP',
    '1',
    '',
    '360yield.com'
  ],
  [
    'tluid',
    '3lift.com',
    'This cookie is used to identify the visitor and optimize ad-relevance by collecting visitor data from multiple websites – this exchange of visitor data is normally provided by a third-party data-center or ad-exchange.',
    '3 μήνες',
    'HTTP',
    '1',
    '',
    '3lift.com'
  ],
  [
    'xuid',
    '3lift.com',
    'Presents the user with relevant content and advertisement. The service is provided by third-party advertisement hubs, which facilitate real-time bidding for advertisers.',
    'Session',
    'Pixel',
    '5',
    '',
    'eb2.3lift.com'
  ],
  [
    'v1/sync',
    'ad.as.amanad.adtdp.com',
    'Used for data-synchronization with advertisement networks.',
    'Session',
    'Pixel',
    '5',
    '',
    'ad.as.amanad.adtdp.com'
  ],
  [
    'na_id',
    'addthis.com',
    'Used to recognize the visitor upon re-entry. This allows the website to register the visitor’s behaviour and facilitate the social sharing function provided by Addthis.com.  ',
    '1 έτος',
    'HTTP',
    '1',
    '',
    'addthis.com'
  ],
  [
    'ouid',
    'addthis.com',
    'Sets an ID-string for the specific visitor. This is used to recognize the visitor upon re-entry. This allows the website to register the visitor’s behaviour and facilitate the social media sharing function provided by Addthis.com.   ',
    '1 έτος',
    'HTTP',
    '1',
    '',
    'addthis.com'
  ],
  [
    'uid',
    'addthis.com<br/>adtdp.com<br/>criteo.com<br/>turn.com',
    'Creates a unique, machine-generated user ID. AddThis, which is owned by Clearspring Technologies, uses the user ID to make it possible for the user to share content across social networks and provide detailed statistics to various providers.',
    '1 έτος',
    'HTTP',
    '1',
    '',
    'addthis.com<br/>adtdp.com<br/>criteo.com<br/>turn.com'
  ],
  [
    'anj',
    'adnxs.com',
    "Registers a unique ID that identifies a returning user's device. The ID is used for targeted ads.",
    '3 μήνες',
    'HTTP',
    '1',
    '',
    'adnxs.com'
  ],
  [
    'uuid2',
    'adnxs.com',
    "Registers a unique ID that identifies a returning user's device. The ID is used for targeted ads.",
    '3 μήνες',
    'HTTP',
    '1',
    '',
    'adnxs.com'
  ],
  [
    'cct',
    'adscale.de',
    'Necessary for the shopping cart functionality on the website.',
    '1 έτος',
    'HTTP',
    '1',
    '',
    'adscale.de'
  ],
  [
    'tu',
    'adscale.de',
    "Used to target ads by registering the user's movements across websites.",
    '1 έτος',
    'HTTP',
    '1',
    '',
    'ih.adscale.de'
  ],
  [
    'uu',
    'adscale.de',
    "Used to target ads by registering the user's movements across websites.",
    '1 έτος',
    'HTTP',
    '1',
    '',
    'adscale.de'
  ],
  [
    'pr_legacy',
    'adtdp.com',
    'Sets a unique ID for the visitor, that allows third party advertisers to target the visitor with relevant advertisement. This pairing service is provided by third party advertisement hubs, which facilitates real-time bidding for advertisers.',
    '2 έτη',
    'HTTP',
    '1',
    '',
    'ad.as.amanad.adtdp.com'
  ],
  [
    'uid_legacy',
    'adtdp.com',
    'Collects information on user behaviour on multiple websites. This information is used in order to optimize the relevance of advertisement on the website.',
    '2 έτη',
    'HTTP',
    '1',
    '',
    'ad.as.amanad.adtdp.com'
  ],
  [
    'APID',
    'advertising.com<br/>yahoo.com',
    'Collects information on user behaviour on multiple websites. This information is used in order to optimize the relevance of advertisement on the website.',
    '1 έτος',
    'HTTP',
    '1',
    '',
    'advertising.com<br/>yahoo.com'
  ],
  [
    'IDSYNC',
    'analytics.yahoo.com',
    'Used to identify the visitor across visits and devices. This allows the website to present the visitor with relevant advertisement - The service is provided by third party advertisement hubs, which facilitate real-time bidding for advertisers. ',
    '1 έτος',
    'HTTP',
    '1',
    '',
    'analytics.yahoo.com'
  ],
  [
    'spp.pl',
    'analytics.yahoo.com',
    'Collects information on user behaviour on multiple websites. This information is used in order to optimize the relevance of advertisement on the website.',
    'Session',
    'Pixel',
    '5',
    '',
    'sp.analytics.yahoo.com'
  ],
  [
    'b1004',
    'as.amanad.adtdp.com',
    'Collects information on user behaviour on multiple websites. This information is used in order to optimize the relevance of advertisement on the website.',
    '6 ημέρες',
    'HTTP',
    '1',
    '',
    'as.amanad.adtdp.com'
  ],
  [
    'b1005',
    'as.amanad.adtdp.com',
    'Collects information on user behaviour on multiple websites. This information is used in order to optimize the relevance of advertisement on the website.',
    '6 ημέρες',
    'HTTP',
    '1',
    '',
    'as.amanad.adtdp.com'
  ],
  [
    'c',
    'bidswitch.net',
    'Regulates synchronisation of user identification and exchange of user data between various ad services.',
    '1 έτος',
    'HTTP',
    '1',
    '',
    'bidswitch.net'
  ],
  [
    'sync',
    'bidswitch.net',
    'Collects data on user behaviour and interaction in order to optimize the website and make advertisement on the website more relevant. ',
    'Session',
    'Pixel',
    '5',
    '',
    'x.bidswitch.net'
  ],
  [
    'ul_cb/sync',
    'bidswitch.net',
    'Collects information on user behaviour on multiple websites. This information is used in order to optimize the relevance of advertisement on the website.',
    'Session',
    'Pixel',
    '5',
    '',
    'x.bidswitch.net'
  ],
  [
    'rum',
    'casalemedia.com',
    "Collects data related to the user's visits to the website, such as the number of visits, average time spent on the website and what pages have been loaded, with the purpose of displaying targeted ads.",
    'Session',
    'Pixel',
    '5',
    '',
    'r.casalemedia.com'
  ],
  [
    'mg_sync',
    'cm.mgid.com',
    'Used for data-synchronization with advertisement networks.',
    '29 ημέρες',
    'HTTP',
    '1',
    '',
    'cm.mgid.com'
  ],
  [
    'MUID',
    'bing.com',
    'Used widely by Microsoft as a unique user ID. The cookie enables user tracking by synchronising the ID across many Microsoft domains.',
    '1 έτος',
    'HTTP',
    '1',
    '',
    'bing.com'
  ],
  [
    'CMID',
    'casalemedia.com',
    "Collects visitor data related to the user's visits to the website, such as the number of visits, average time spent on the website and what pages have been loaded, with the purpose of displaying targeted ads.",
    '1 έτος',
    'HTTP',
    '1',
    '',
    'casalemedia.com'
  ],
  [
    'CMPRO',
    'casalemedia.com',
    'Collects data on visitor behaviour from multiple websites, in order to present more relevant advertisement - This also allows the website to limit the number of times that they are shown the same advertisement. ',
    '3 μήνες',
    'HTTP',
    '1',
    '',
    'casalemedia.com'
  ],
  [
    'CMPS',
    'casalemedia.com',
    "Collects visitor data related to the user's visits to the website, such as the number of visits, average time spent on the website and what pages have been loaded, with the purpose of displaying targeted ads.",
    '3 μήνες',
    'HTTP',
    '1',
    '',
    'casalemedia.com'
  ],
  [
    'CMRUM3',
    'casalemedia.com',
    "Collects visitor data related to the user's visits to the website, such as the number of visits, average time spent on the website and what pages have been loaded, with the purpose of displaying targeted ads.",
    '1 έτος',
    'HTTP',
    '1',
    '',
    'casalemedia.com'
  ],
  [
    'CMST',
    'casalemedia.com',
    "Collects visitor data related to the user's visits to the website, such as the number of visits, average time spent on the website and what pages have been loaded, with the purpose of displaying targeted ads.",
    '1 ημέρα',
    'HTTP',
    '1',
    '',
    'casalemedia.com'
  ],
  [
    'dis/rtb/appnexus/cookiematch.aspx',
    'criteo.com',
    'Sets a unique ID for the visitor, that allows third party advertisers to target the visitor with relevant advertisement. This pairing service is provided by third party advertisement hubs, which facilitates real-time bidding for advertisers.',
    'Session',
    'Pixel',
    '5',
    '',
    'dis.criteo.com'
  ],
  [
    'dis/rtb/google/cookiematch.aspx',
    'criteo.com',
    'Sets a unique ID for the visitor, that allows third party advertisers to target the visitor with relevant advertisement. This pairing service is provided by third party advertisement hubs, which facilitates real-time bidding for advertisers.',
    'Session',
    'Pixel',
    '5',
    '',
    'dis.criteo.com'
  ],
  [
    'IDE',
    'doubleclick.net',
    "Used by Google DoubleClick to register and report the website user's actions after viewing or clicking one of the advertiser's ads with the purpose of measuring the efficacy of an ad and to present targeted ads to the user.",
    '1 έτος',
    'HTTP',
    '1',
    '',
    'doubleclick.net'
  ],
  [
    'test_cookie',
    'doubleclick.net',
    "Used to check if the user's browser supports cookies.",
    '1 ημέρα',
    'HTTP',
    '1',
    '',
    'stats.g.doubleclick.net'
  ],
  [
    'tr',
    'facebook.com',
    'Used by Facebook to deliver a series of advertisement products such as real time bidding from third party advertisers.',
    'Session',
    'Pixel',
    '5',
    '',
    'www.facebook.com'
  ],
  [
    'ads/ga-audiences',
    'google.com',
    "Used by Google AdWords to re-engage visitors that are likely to convert to customers based on the visitor's online behaviour across websites.",
    'Session',
    'Pixel',
    '5',
    '',
    'www.google.ie'
  ],
  [
    'pagead/1p-user-list/#',
    'google.com',
    'Tracks if the user has shown interest in specific products or events across multiple websites and detects how the user navigates between sites. This is used for measurement of advertisement efforts and facilitates payment of referral-fees between websites.',
    'Session',
    'Pixel',
    '5',
    '',
    'www.google.com'
  ],
  [
    'callback',
    'id5-sync.com',
    'Collects data on visitor behaviour from multiple websites, in order to present more relevant advertisement - This also allows the website to limit the number of times that they are shown the same advertisement. ',
    '1 ημέρα',
    'HTTP',
    '1',
    '',
    'id5-sync.com'
  ],
  [
    'car',
    'id5-sync.com',
    'Presents the user with relevant content and advertisement. The service is provided by third-party advertisement hubs, which facilitate real-time bidding for advertisers.',
    '1 ημέρα',
    'HTTP',
    '1',
    '',
    'id5-sync.com'
  ],
  [
    'cf',
    'id5-sync.com',
    'Sets a unique ID for the visitor, that allows third party advertisers to target the visitor with relevant advertisement. This pairing service is provided by third party advertisement hubs, which facilitates real-time bidding for advertisers.',
    '1 ημέρα',
    'HTTP',
    '1',
    '',
    'id5-sync.com'
  ],
  [
    'cip',
    'id5-sync.com',
    'Presents the user with relevant content and advertisement. The service is provided by third-party advertisement hubs, which facilitate real-time bidding for advertisers.',
    '1 ημέρα',
    'HTTP',
    '1',
    '',
    'id5-sync.com'
  ],
  [
    'cnac',
    'id5-sync.com',
    'Presents the user with relevant content and advertisement. The service is provided by third-party advertisement hubs, which facilitate real-time bidding for advertisers.',
    '1 ημέρα',
    'HTTP',
    '1',
    '',
    'id5-sync.com'
  ],
  [
    'api/v1/dsync/Criteo',
    'kargo.com',
    'Used for data-synchronization with advertisement networks.',
    'Session',
    'Pixel',
    '5',
    '',
    'crb.kargo.com'
  ],
  [
    '_li_ss',
    'liadm.com',
    'Sets a unique ID for the visitor, that allows third party advertisers to target the visitor with relevant advertisement. This pairing service is provided by third party advertisement hubs, which facilitates real-time bidding for advertisers.',
    '29 ημέρες',
    'HTTP',
    '1',
    '',
    'i.liadm.com'
  ],
  [
    'lidid',
    'liadm.com',
    "Collects data on visitors' behaviour and interaction - This is used to make advertisement on the website more relevant. The cookie also allows the website to detect any referrals from other websites.  ",
    '2 έτη',
    'HTTP',
    '1',
    '',
    'liadm.com'
  ],
  [
    'data-c',
    'media.net',
    'Presents the user with relevant content and advertisement. The service is provided by third-party advertisement hubs, which facilitate real-time bidding for advertisers.',
    '29 ημέρες',
    'HTTP',
    '1',
    '',
    'media.net'
  ],
  [
    'data-c-ts',
    'media.net',
    'Collects data on the user across websites - This data is used to make advertisement more relevant.',
    '29 ημέρες',
    'HTTP',
    '1',
    '',
    'media.net'
  ],
  [
    'mCookie',
    'mediawallahscript.com',
    'Collects data on visitor behaviour from multiple websites, in order to present more relevant advertisement - This also allows the website to limit the number of times that they are shown the same advertisement. ',
    '2 έτη',
    'HTTP',
    '1',
    '',
    'mediawallahscript.com'
  ],
  [
    'mUserCookie',
    'mediawallahscript.com',
    'Collects data on visitor behaviour from multiple websites, in order to present more relevant advertisement - This also allows the website to limit the number of times that they are shown the same advertisement. ',
    '2 έτη',
    'HTTP',
    '1',
    '',
    'mediawallahscript.com'
  ],
  [
    'muidn',
    'mgid.com',
    'Sets a unique ID for the visitor, that allows third party advertisers to target the visitor with relevant advertisement. This pairing service is provided by third party advertisement hubs, which facilitates real-time bidding for advertisers.',
    '5898 ημέρες',
    'HTTP',
    '1',
    '',
    'mgid.com'
  ],
  [
    'criteo',
    'outbrain.com<br/>tpmn.co.kr',
    'Sets a unique ID for the visitor, that allows third party advertisers to target the visitor with relevant advertisement. This pairing service is provided by third party advertisement hubs, which facilitates real-time bidding for advertisers. ',
    '29 ημέρες',
    'HTTP',
    '1',
    '',
    'outbrain.com<br/>tpmn.co.kr'
  ],
  [
    'obuid',
    'outbrain.com',
    'Sets a unique ID for the visitor, that allows third party advertisers to target the visitor with relevant advertisement. This pairing service is provided by third party advertisement hubs, which facilitates real-time bidding for advertisers. ',
    '3 μήνες',
    'HTTP',
    '1',
    '',
    'outbrain.com'
  ],
  [
    '_boomr_akamaiXhrRetry',
    'plaisio.gr',
    'Collects information on user preferences and/or interaction with web-campaign content - This is used on CRM-campaign-platform used by website owners for promoting events or products.',
    'Persistent',
    'HTML',
    '2',
    '',
    's.go-mpulse.net'
  ],
  [
    '_fbp',
    'plaisio.gr',
    'Used by Facebook to deliver a series of advertisement products such as real time bidding from third party advertisers.',
    '3 μήνες',
    'HTTP',
    '1',
    '',
    'connect.facebook.net'
  ],
  [
    '_gcl_au',
    'plaisio.gr',
    'Used by Google AdSense for experimenting with advertisement efficiency across websites using their services.  ',
    '3 μήνες',
    'HTTP',
    '1',
    '',
    'www.googletagmanager.com'
  ],
  [
    'AITR_InvalidBackendResponse',
    'plaisio.gr',
    "This cookie is used to detect errors on the website - this information is sent to the website's support staff in order to optimize the visitor's experience on the website.",
    'Session',
    'HTML',
    '2',
    '',
    'www.plaisio.gr'
  ],
  [
    'criteo_write_test',
    'plaisio.gr',
    'Sets a unique ID for the visitor, that allows third party advertisers to target the visitor with relevant advertisement. This pairing service is provided by third party advertisement hubs, which facilitates real-time bidding for advertisers.',
    '1 ημέρα',
    'HTTP',
    '1',
    '',
    'static.criteo.net'
  ],
  [
    'cto_bundle',
    'plaisio.gr',
    'Presents the user with relevant content and advertisement. The service is provided by third-party advertisement hubs, which facilitate real-time bidding for advertisers.',
    '13 μήνες',
    'HTML',
    '1',
    '',
    'static.criteo.net'
  ],
  [
    'cto_tld_test',
    'plaisio.gr',
    'Used to identify the visitor across visits and devices. This allows the website to present the visitor with relevant advertisement - The service is provided by third party advertisement hubs, which facilitate real-time bidding for advertisers. ',
    '1 ημέρα',
    'HTTP',
    '1',
    '',
    'static.criteo.net'
  ],
  [
    'logglytrackingsession',
    'plaisio.gr',
    'Collects data on user behaviour and interaction in order to optimize the website and make advertisement on the website more relevant. ',
    'Session',
    'HTTP',
    '1',
    '',
    'www.plaisio.gr'
  ],
  [
    'tt_appInfo',
    'plaisio.gr',
    'Used by the social networking service, TikTok, for tracking the use of embedded services.',
    'Session',
    'HTML',
    '2',
    '',
    'analytics.tiktok.com'
  ],
  [
    'tt_sessionId',
    'plaisio.gr',
    'Used by the social networking service, TikTok, for tracking the use of embedded services.',
    'Session',
    'HTML',
    '2',
    '',
    'analytics.tiktok.com'
  ],
  [
    'AdServer/Pug',
    'pubmatic.com',
    'Sets a timestamp for when the visitor entered the website. This is used for analytical purposes on the website. ',
    'Session',
    'Pixel',
    '5',
    '',
    'simage2.pubmatic.com'
  ],
  [
    'KRTBCOOKIE_#',
    'pubmatic.com',
    "Registers a unique ID that identifies the user's device during return visits across websites that use the same ad network. The ID is used to allow targeted ads.",
    '29 ημέρες',
    'HTTP',
    '1',
    '^KRTBCOOKIE_d+',
    'pubmatic.com'
  ],
  [
    'PUBMDCID',
    'pubmatic.com',
    "Registers a unique ID that identifies the user's device during return visits across websites that use the same ad network. The ID is used to allow targeted ads.",
    '3 μήνες',
    'HTTP',
    '1',
    '',
    'pubmatic.com'
  ],
  [
    'cv',
    'recs.richrelevance.com',
    "Collects data of the user's navigation and interaction on the website in order to personalise the purchasing experience.",
    '1 έτος',
    'HTTP',
    '1',
    '',
    'recs.richrelevance.com'
  ],
  [
    'n',
    'recs.richrelevance.com',
    "Collects anonymous data of the user's navigation and interaction on the website in order to personalise the purchasing experience.",
    '1 έτος',
    'HTTP',
    '1',
    '',
    'recs.richrelevance.com'
  ],
  [
    'pv',
    'recs.richrelevance.com',
    "Collects data of the user's navigation and interaction on the website in order to personalise the purchasing experience.",
    '1 έτος',
    'HTTP',
    '1',
    '',
    'recs.richrelevance.com'
  ],
  [
    's',
    'recs.richrelevance.com',
    "Collects anonymous data of the user's navigation and interaction on the website in order to personalise the purchasing experience.",
    '1 ημέρα',
    'HTTP',
    '1',
    '',
    'recs.richrelevance.com'
  ],
  [
    'uc',
    'recs.richrelevance.com',
    "Collects data of the user's navigation and interaction on the website in order to personalise the purchasing experience.",
    '1 έτος',
    'HTTP',
    '1',
    '',
    'recs.richrelevance.com'
  ],
  [
    '__ID',
    'revcontent.com',
    'Sets a unique ID for the visitor, that allows third party advertisers to target the visitor with relevant advertisement. This pairing service is provided by third party advertisement hubs, which facilitates real-time bidding for advertisers.',
    '50 έτη',
    'HTTP',
    '1',
    '',
    'revcontent.com'
  ],
  [
    'v1_151',
    'revcontent.com',
    'Registers user behaviour and navigation on the website, and any interaction with active campaigns. This is used for optimizing advertisement and for efficient retargeting.  ',
    '29 ημέρες',
    'HTTP',
    '1',
    '',
    'revcontent.com'
  ],
  [
    'mvtid',
    'richrelevance.com',
    "Collects data of the user's navigation and interaction on the website in order to personalise the purchasing experience.",
    '1 έτος',
    'HTTP',
    '1',
    '',
    'richrelevance.com'
  ],
  [
    'pxrc',
    'rlcdn.com',
    'This cookie registers data on the visitor. The information is used to optimize advertisement relevance. ',
    '2 μήνες',
    'HTTP',
    '1',
    '',
    'rlcdn.com'
  ],
  [
    'rlas3',
    'rlcdn.com',
    "Collects visitor data related to the user's visits to the website, such as the number of visits, average time spent on the website and what pages have been loaded, with the purpose of displaying targeted ads.",
    '1 έτος',
    'HTTP',
    '1',
    '',
    'rlcdn.com'
  ],
  [
    'stx_user_id',
    'sharethrough.com',
    'Sets a unique ID for a specific visitor. This ID can be used to recognize the visitor upon re-entry and implement any preference choices made. The cookie also allows the website to track the visitor on multiple websites for marketing purposes. ',
    '1 έτος',
    'HTTP',
    '1',
    '',
    'sharethrough.com'
  ],
  [
    'sp',
    'skynet.reevoo.com',
    'Used to implement audio-content from Spotify on the website. Can also be used to register user interaction and preferences in context with audio-content - This can serve statistics and marketing purposes.  ',
    '1 έτος',
    'HTTP',
    '1',
    '',
    'skynet.reevoo.com'
  ],
  [
    't_gid',
    'taboola.com',
    'This cookie assigns a specific visitor ID, when the visitor interacts with ads or content from the website - this allows the website to target the visitor with similar ads or content.',
    '1 έτος',
    'HTTP',
    '1',
    '',
    'taboola.com'
  ],
  [
    'idsync/ex/receive/check',
    'tapad.com',
    'This cookie is set by the audience manager of the website to determine the time and frequencies of visitor data synchronization - cookie data synchronization is used to synchronize and gather visitor data from several websites.',
    'Session',
    'Pixel',
    '5',
    '',
    'pixel.tapad.com'
  ],
  [
    'TapAd_3WAY_SYNCS',
    'tapad.com',
    'Used for data-synchronization with advertisement networks.',
    '2 μήνες',
    'HTTP',
    '1',
    '',
    'tapad.com'
  ],
  [
    'TapAd_DID',
    'tapad.com',
    'Used to determine what type of devices (smartphones, tablets, computers, TVs etc.) is used by a user.',
    '2 μήνες',
    'HTTP',
    '1',
    '',
    'tapad.com'
  ],
  [
    'TapAd_TS',
    'tapad.com',
    'Used to determine what type of devices (smartphones, tablets, computers, TVs etc.) is used by a user.',
    '2 μήνες',
    'HTTP',
    '1',
    '',
    'tapad.com'
  ],
  [
    'uuid',
    'tpmn.co.kr',
    'This cookie is used to optimize ad relevance by collecting visitor data from multiple websites – this exchange of visitor data is normally provided by a third-party data-center or ad-exchange.',
    '1 έτος',
    'HTTP',
    '1',
    '',
    'tpmn.co.kr'
  ],
  [
    'A3',
    'yahoo.com',
    'Collects information on user behaviour on multiple websites. This information is used in order to optimize the relevance of advertisement on the website.',
    '1 έτος',
    'HTTP',
    '1',
    '',
    'yahoo.com'
  ],
  [
    'APIDTS',
    'yahoo.com',
    "Collects data on visitors' preferences and behaviour on the website - This information is used make content and advertisement more relevant to the specific visitor. ",
    '1 ημέρα',
    'HTTP',
    '1',
    '',
    'yahoo.com'
  ],
  [
    'B',
    'yahoo.com',
    "Collects anonymous data related to the user's website visits, such as the number of visits, average time spent on the website and what pages have been loaded. The registered data is used to categorise the users' interest and demographical profiles with the purpose of customising the website content depending on the visitor.",
    '1 έτος',
    'HTTP',
    '1',
    '',
    'sp.analytics.yahoo.com'
  ],
  [
    'yuidss',
    'yandex.ru',
    'Collects information on user behaviour on multiple websites. This information is used in order to optimize the relevance of advertisement on the website.',
    '10 έτη',
    'HTTP',
    '1',
    '',
    'yandex.ru'
  ],
  [
    'id',
    'yieldlab.net',
    "Registers a unique ID that identifies a returning user's device. The ID is used for targeted ads.",
    '1 έτος',
    'HTTP',
    '1',
    '',
    'yieldlab.net'
  ],
  [
    'VISITOR_INFO1_LIVE',
    'youtube.com',
    "Tries to estimate the users' bandwidth on pages with integrated YouTube videos.",
    '179 ημέρες',
    'HTTP',
    '1',
    '',
    'youtube.com'
  ],
  [
    'YSC',
    'youtube.com',
    'Registers a unique ID to keep statistics of what videos from YouTube the user has seen.',
    'Session',
    'HTTP',
    '1',
    '',
    'youtube.com'
  ],
  [
    'yt.innertube::nextId',
    'youtube.com',
    'Registers a unique ID to keep statistics of what videos from YouTube the user has seen.',
    'Persistent',
    'HTML',
    '2',
    '',
    'youtube.com'
  ],
  [
    'yt.innertube::requests',
    'youtube.com',
    'Registers a unique ID to keep statistics of what videos from YouTube the user has seen.',
    'Persistent',
    'HTML',
    '2',
    '',
    'youtube.com'
  ],
  [
    'yt-remote-cast-available',
    'youtube.com',
    "Stores the user's video player preferences using embedded YouTube video",
    'Session',
    'HTML',
    '2',
    '',
    'youtube.com'
  ],
  [
    'yt-remote-cast-installed',
    'youtube.com',
    "Stores the user's video player preferences using embedded YouTube video",
    'Session',
    'HTML',
    '2',
    '',
    'youtube.com'
  ],
  [
    'yt-remote-connected-devices',
    'youtube.com',
    "Stores the user's video player preferences using embedded YouTube video",
    'Persistent',
    'HTML',
    '2',
    '',
    'youtube.com'
  ],
  [
    'yt-remote-device-id',
    'youtube.com',
    "Stores the user's video player preferences using embedded YouTube video",
    'Persistent',
    'HTML',
    '2',
    '',
    'youtube.com'
  ],
  [
    'yt-remote-fast-check-period',
    'youtube.com',
    "Stores the user's video player preferences using embedded YouTube video",
    'Session',
    'HTML',
    '2',
    '',
    'youtube.com'
  ],
  [
    'yt-remote-session-app',
    'youtube.com',
    "Stores the user's video player preferences using embedded YouTube video",
    'Session',
    'HTML',
    '2',
    '',
    'youtube.com'
  ],
  [
    'yt-remote-session-name',
    'youtube.com',
    "Stores the user's video player preferences using embedded YouTube video",
    'Session',
    'HTML',
    '2',
    '',
    'youtube.com'
  ],
  ['pr', 'adtdp.com', 'Σε αναμονή', '2 έτη', 'HTTP', '1', '', 'adtdp.com'],
  [
    'v3/__va.gif',
    'analytics.data.visenze.com',
    'Σε αναμονή',
    'Session',
    'Pixel',
    '5',
    '',
    'analytics.data.visenze.com'
  ],
  [
    'bi',
    'ping.contactpigeon.com',
    'Σε αναμονή',
    '1 έτος',
    'HTTP',
    '1',
    '',
    'ping.contactpigeon.com'
  ],
  [
    '3pm-sw-policy#state',
    'plaisio.gr',
    'Σε αναμονή',
    'Persistent',
    'IDB',
    '6',
    '',
    'www.plaisio.gr'
  ],
  [
    'chatObject',
    'plaisio.gr',
    'Σε αναμονή',
    '1 ημέρα',
    'HTTP',
    '1',
    '',
    'www.plaisio.gr'
  ],
  [
    'cp_sessionTime',
    'plaisio.gr',
    'Σε αναμονή',
    '1 ημέρα',
    'HTTP',
    '1',
    '',
    'www.plaisio.gr'
  ],
  [
    'cp_shSess',
    'plaisio.gr',
    'Σε αναμονή',
    'Persistent',
    'HTML',
    '2',
    '',
    'www.plaisio.gr'
  ],
  [
    'cp_total_cart_items',
    'plaisio.gr',
    'Σε αναμονή',
    '1 έτος',
    'HTTP',
    '1',
    '',
    'www.plaisio.gr'
  ],
  [
    'cp_total_cart_value',
    'plaisio.gr',
    'Σε αναμονή',
    '1 έτος',
    'HTTP',
    '1',
    '',
    'www.plaisio.gr'
  ],
  [
    'cpab',
    'plaisio.gr',
    'Σε αναμονή',
    '1 έτος',
    'HTTP',
    '1',
    '',
    'www.plaisio.gr'
  ],
  [
    'reevoo_sp_id.aebb',
    'plaisio.gr',
    'Σε αναμονή',
    '2 έτη',
    'HTTP',
    '1',
    '',
    'www.plaisio.gr'
  ],
  [
    'reevoo_sp_ses.aebb',
    'plaisio.gr',
    'Σε αναμονή',
    '1 ημέρα',
    'HTTP',
    '1',
    '',
    'www.plaisio.gr'
  ],
  [
    'reevoo_test.#',
    'plaisio.gr',
    'Σε αναμονή',
    'Session',
    'HTTP',
    '1',
    '^reevoo_test.[a-z0-9]{2,8}$',
    'www.plaisio.gr'
  ],
  [
    'rr_rcs',
    'plaisio.gr',
    'Σε αναμονή',
    '2 έτη',
    'HTML',
    '1',
    '',
    'recs.richrelevance.com'
  ],
  [
    'va-key-sid',
    'plaisio.gr',
    'Σε αναμονή',
    'Persistent',
    'HTML',
    '2',
    '',
    'cdn.visenze.com'
  ],
  [
    'va-key-sid-timestamp',
    'plaisio.gr',
    'Σε αναμονή',
    'Persistent',
    'HTML',
    '2',
    '',
    'cdn.visenze.com'
  ],
  [
    'va-uid',
    'plaisio.gr',
    'Σε αναμονή',
    'Persistent',
    'HTML',
    '2',
    '',
    'cdn.visenze.com'
  ],
  [
    '#.gif',
    'rlcdn.com',
    'Σε αναμονή',
    'Session',
    'Pixel',
    '5',
    '',
    'idsync.rlcdn.com'
  ],
  [
    'mapuid/criteois/k-#',
    'yandex.ru',
    'Σε αναμονή',
    'Session',
    'Pixel',
    '5',
    '',
    'an.yandex.ru'
  ]
]
CookieConsentDialog.cookieTableUnclassified = [
  ['m', 'cm.mgid.com', 'Σε αναμονή', 'Session', 'Pixel', '5', '', 'cm.mgid.com']
]
CookieConsentDialog.cookieTableNecessaryCount = 32
CookieConsentDialog.cookieTablePreferenceCount = 4
CookieConsentDialog.cookieTableStatisticsCount = 16
CookieConsentDialog.cookieTableAdvertisingCount = 128
CookieConsentDialog.cookieTableUnclassifiedCount = 1
CookieConsent.whitelist = [
  '__lc_cid',
  '__lc_cst',
  'gdpr',
  'SERVERID',
  'AWSALBCORS',
  '__cf_bm',
  'AI_buffer',
  'AI_sentBuffer',
  'ai_session',
  'AITR_OnError',
  'AITR_TransmissionFailed',
  'ak_bmsc',
  'algoliasearch-client-js',
  'ASP.NET_SessionId',
  'bm_mi',
  'bm_sv',
  'CookieConsent',
  'debug',
  'RT',
  'opt_out',
  'CONSENT',
  'azuappgwplsgr',
  'azuappgwplsgrCORS',
  'gis',
  'pls_cid',
  'pls_uid',
  '12244530:state',
  'side_storage_12244530'
]
CookieConsentDialog.privacyPolicies = [
  [
    '360yield.com',
    'Improve Digital',
    'https://www.improvedigital.com/privacy-policy/'
  ],
  ['3lift.com', 'TripleLift', 'https://triplelift.com/privacy/'],
  [
    'accounts.livechatinc.com',
    'LiveChat',
    'https://www.livechat.com/legal/privacy-policy/'
  ],
  [
    'ad.as.amanad.adtdp.com',
    'CyberAgent',
    'https://www.cyberagent.co.jp/en/privacy/'
  ],
  ['addthis.com', 'Oracle', 'http://www.addthis.com/privacy'],
  [
    'adnxs.com',
    'Appnexus',
    'https://www.appnexus.com/en/company/privacy-policy'
  ],
  [
    'adscale.de',
    'Str&#246;er',
    'https://www.stroeer.de/service/datenschutz.html'
  ],
  ['advertising.com', 'AOL', 'http://privacy.aol.com/'],
  ['an.yandex.ru', 'Yandex', 'https://yandex.ru/legal/confidential/'],
  [
    'analytics.tiktok.com',
    'Tiktok',
    'https://www.tiktok.com/legal/privacy-policy?lang=en'
  ],
  [
    'analytics.yahoo.com',
    'Oath',
    'https://policies.oath.com/us/en/oath/privacy/index.html'
  ],
  [
    'as.amanad.adtdp.com',
    'CyberAgent',
    'https://www.cyberagent.co.jp/en/privacy/'
  ],
  [
    'az416426.vo.msecnd.net',
    'Microsoft',
    'https://privacy.microsoft.com/en-us/privacystatement'
  ],
  ['bidswitch.net', 'Bidswitch', 'http://www.bidswitch.com/privacy-policy/'],
  [
    'bing.com',
    'Microsoft',
    'https://privacy.microsoft.com/en-us/privacystatement'
  ],
  ['casalemedia.com', 'Casale Media', 'http://www.casalemedia.com/'],
  ['cm.mgid.com', 'Mgid', 'https://www.mgid.com/privacy-policy'],
  [
    'connect.facebook.net',
    ' Meta Platforms, Inc.',
    'https://www.facebook.com/policy.php/'
  ],
  [
    'contextual.media.net',
    'Media.net',
    'https://www.media.net/en/privacy-policy'
  ],
  [
    'cookiebot.com',
    'Cookiebot',
    'https://www.cookiebot.com/goto/privacy-policy/'
  ],
  [
    'crb.kargo.com',
    'Kargo Global',
    'https://www.kargo.com/privacy-policy-services/privacy-policy-website/'
  ],
  ['criteo.com', 'Criteo', 'https://www.criteo.com/privacy/'],
  ['dis.criteo.com', 'Criteo', 'https://www.criteo.com/privacy/'],
  ['doubleclick.net', 'Google', 'https://policies.google.com/privacy'],
  ['eb2.3lift.com', 'TripleLift', 'https://triplelift.com/privacy/'],
  ['i.liadm.com', 'Liveintent', 'https://liveintent.com/privacy-policy/'],
  ['id5-sync.com', 'ID5', 'https://www.id5.io/privacy'],
  ['idsync.rlcdn.com', 'LiveRamp', 'https://liveramp.com/privacy/'],
  [
    'ih.adscale.de',
    'Str&#246;er',
    'https://www.stroeer.de/service/datenschutz.html'
  ],
  ['liadm.com', 'Liveintent', 'https://liveintent.com/privacy-policy/'],
  ['mail.ru', 'Mail.ru', 'https://help.mail.ru/legal/terms/common/privacy'],
  ['media.net', 'Media.net', 'https://www.media.net/en/privacy-policy'],
  [
    'mediawallahscript.com',
    'Mediawallah',
    'http://mediawallah.com/privacy-policy/'
  ],
  ['mgid.com', 'Mgid', 'https://www.mgid.com/privacy-policy'],
  [
    'outbrain.com',
    'Outbrain',
    'https://www.outbrain.com/legal/privacy#privacy-policy'
  ],
  [
    'ping.contactpigeon.com',
    'Contactpigeon',
    'https://pages.contactpigeon.com/privacy-policy'
  ],
  ['pixel.tapad.com', 'Tapad', 'https://www.tapad.com/privacy'],
  ['postrelease.com', 'Nativo', 'https://www.nativo.com/privacy-policy'],
  ['pubmatic.com', 'Pubmatic', 'https://pubmatic.com/legal/privacy-policy/'],
  ['r.casalemedia.com', 'Casale Media', 'http://www.casalemedia.com/'],
  [
    'recs.richrelevance.com',
    'Richrelevance',
    'https://www.richrelevance.com/privacy/'
  ],
  [
    'revcontent.com',
    'Revcontent',
    'https://faq.revcontent.com/customer/en/portal/articles/2703838-revcontent-s-privacy-and-cookie-policy'
  ],
  [
    'richrelevance.com',
    'Richrelevance',
    'https://www.richrelevance.com/privacy/'
  ],
  ['rlcdn.com', 'LiveRamp', 'https://liveramp.com/privacy/'],
  [
    'secure.adnxs.com',
    'Appnexus',
    'https://www.appnexus.com/en/company/privacy-policy'
  ],
  [
    'secure-fra.livechatinc.com',
    'Livechat',
    'https://www.livechatinc.com/privacy-policy/'
  ],
  [
    'sharethrough.com',
    'Sharethrough',
    'https://platform-cdn.sharethrough.com/privacy-policy'
  ],
  [
    'simage2.pubmatic.com',
    'Pubmatic',
    'https://pubmatic.com/legal/privacy-policy/'
  ],
  ['skynet.reevoo.com', 'Reevoo', 'https://www.reevoo.com/en/cookies-policy/'],
  [
    'sp.analytics.yahoo.com',
    'Oath',
    'https://policies.oath.com/us/en/oath/privacy/index.html'
  ],
  [
    'static.criteo.net',
    'Criteo',
    'https://www.criteo.com/privacy/corporate-privacy-policy/'
  ],
  ['stats.g.doubleclick.net', 'Google', 'https://policies.google.com/privacy'],
  ['taboola.com', 'Taboola', 'https://www.taboola.com/privacy-policy'],
  ['tapad.com', 'Tapad', 'https://www.tapad.com/privacy'],
  ['turn.com', 'Amobee', 'https://www.amobee.com/trust/privacy-guidelines'],
  [
    'www.facebook.com',
    'Meta Platforms, Inc.',
    'https://www.facebook.com/policy.php/'
  ],
  ['www.google.com', 'Google', 'https://policies.google.com/privacy'],
  ['www.google.ie', 'Google', 'https://policies.google.com/privacy'],
  ['www.google-analytics.com', 'Google', 'https://policies.google.com/privacy'],
  [
    'www.googletagmanager.com',
    'Google Tag Manager',
    'https://policies.google.com/privacy'
  ],
  ['x.bidswitch.net', 'Bidswitch', 'https://www.bidswitch.com/privacy-policy/'],
  [
    'yahoo.com',
    'Yahoo',
    'https://policies.yahoo.com/us/en/yahoo/privacy/index.htm'
  ],
  ['yandex.ru', 'Yandex', 'https://yandex.ru/legal/confidential/'],
  [
    'yieldlab.net',
    'Yieldlab',
    'http://www.yieldlab.com/meta-navigation/data-protection/?L=1'
  ],
  ['youtube.com', 'YouTube', 'https://policies.google.com/privacy']
]
CookieConsentDialog.privacyPolicyText =
  'Πολιτική προστασίας προσωπικών δεδομένων της {0}'
CookieConsentDialog.userCountry = 'GR'
if (typeof CookieConsent != 'undefined') {
  CookieConsent.userCountry = 'GR'
  if (typeof CookieConsent.updateRegulations != 'undefined') {
    CookieConsent.updateRegulations()
  }
}
CookieConsentDialog.userCulture = 'en-US'
CookieConsentDialog.init()
