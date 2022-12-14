import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import PORTFOLIODASHBOARD from "./components/PORTFOLIODASHBOARD";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|portfolio-dashboard)">
          <PORTFOLIODASHBOARD {...pORTFOLIODASHBOARDData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const pORTFOLIODASHBOARDData = {
    spanText1: "HELLO, ",
    spanText2: "EAZY!",
    vector1: "/img/vector-1@2x.png",
    vector2: "/img/vector-2-1@2x.png",
    currentPortfolio: "CURRENT PORTFOLIO",
    emeaApac: "EMEA | APAC",
    heroiconsAdjustmentsHorizontal: "/img/heroicons-adjustments-horizontal@2x.png",
    iconLink1: "/img/heroicons-link-3@2x.png",
    vector7: "/img/vector-7@1x.png",
    discovery: "DISCOVERY",
    violationsRemediations: "VIOLATIONS & REMEDIATIONS",
    vector26: "/img/vector-26-1@2x.png",
    vector40: "/img/vector-40-1@2x.png",
    vector44: "/img/vector-26-1@2x.png",
    vector42: "/img/vector-26-1@2x.png",
    vector53: "/img/vector-26-1@2x.png",
    vector45: "/img/vector-26-1@2x.png",
    vector48: "/img/vector-26-1@2x.png",
    vector41: "/img/vector-26-1@2x.png",
    vector46: "/img/vector-26-1@2x.png",
    vector43: "/img/vector-26-1@2x.png",
    vector47: "/img/vector-26-1@2x.png",
    vector49: "/img/vector-26-1@2x.png",
    vector27: "/img/vector-26-1@2x.png",
    vector28: "/img/vector-26-1@2x.png",
    vector29: "/img/vector-26-1@2x.png",
    vector31: "/img/vector-26-1@2x.png",
    vector32: "/img/vector-26-1@2x.png",
    vector33: "/img/vector-26-1@2x.png",
    entities: "ENTITIES",
    digitalAssets: "DIGITAL ASSETS",
    pagesScanned: "PAGES SCANNED",
    elements: "ELEMENTS",
    visibleStates: "VISIBLE STATES",
    users: "USERS",
    manualTests: "MANUAL TESTS",
    number1: "5",
    number2: "25",
    x15K: "1.5k",
    x46K: "4.6k",
    x105K: "10.5k",
    number3: "23",
    number4: "15",
    spanText3: "AI POWERED",
    spanText4: " ACCESSIBILITY TESTER",
    scanANewWebsite: "SCAN A NEW WEBSITE",
    vector4: "/img/vector-4-1@2x.png",
    vector35: "/img/vector-35@2x.png",
    inputType: "text",
    inputPlaceholder: "Enter URL here to begin scan for errors",
    vector8: "/img/vector-8@1x.png",
    vector34: "/img/vector-34@1x.png",
    recentScans: "RECENT SCANS",
    learnMore: "LEARN MORE",
    vector30: "/img/vector-30@1x.png",
    vector39: "/img/vector-39@1x.png",
    iconSearch: "/img/search-ideogram-1@2x.png",
    number5: "1",
    number6: "2",
    number7: "3",
    healthChecks: "HEALTH CHECKS",
    resolutions: "RESOLUTIONS",
    trends: "TRENDS",
    overallHealth: "OVERALL HEALTH",
    overlapGroup1: "/img/ellipse-1@2x.png",
    ellipse3: "/img/ellipse-3@2x.png",
    ellipse2: "/img/ellipse-2@2x.png",
    number8: "00",
    vector3: "/img/vector-5@2x.png",
    vector5: "/img/vector-12@2x.png",
    number9: "100",
    x78: "35%",
    passFail: "PASS / FAIL",
    violationsBySeverity1: "VIOLATIONS BY SEVERITY",
    violationsByWcag3: "VIOLATIONS BY WCAG3",
    iconGlobe: "/img/world-wide-web-svgrepo-com-1-1@2x.png",
    vector36: "/img/vector-36@1x.png",
    vector38: "/img/vector-38@1x.png",
    pass: "PASS",
    partialPass: "PARTIAL PASS",
    fail: "FAIL",
    percent1: "65%",
    percent2: "5%",
    percent3: "5%",
    percent4: "25%",
    percent5: "65%",
    percent6: "15%",
    iconsaxBulkBucket: "/img/iconsax-bulk-bucket@2x.png",
    iconsaxBulkProfile2User: "/img/iconsax-bulk-profile2user@2x.png",
    iconsaxBulkAirdrop: "/img/iconsax-bulk-airdrop@2x.png",
    iconsaxBulkData2: "/img/iconsax-bulk-data2@2x.png",
    iconsaxBulkKeyboard: "/img/iconsax-bulk-keyboard-1@2x.png",
    percent7: "20%",
    critical1: "CRITICAL",
    serious1: "SERIOUS",
    minor1: "MINOR",
    moderate1: "MODERATE",
    conformanceLevel: "CONFORMANCE LEVEL",
    ellipse4: "/img/ellipse-4-1@2x.png",
    ellipse5: "/img/ellipse-5@2x.png",
    ellipse6: "/img/ellipse-6@2x.png",
    vector37: "/img/vector-37@2x.png",
    a: "A",
    percent8: "65%",
    aa: "AA",
    percent9: "35%",
    unassigned: "UNASSIGNED",
    solved: "SOLVED",
    open: "OPEN",
    reOpened: "RE-OPENED",
    number10: "54",
    number11: "195",
    number12: "30",
    number13: "15",
    number14: "88",
    number15: "123",
    number16: "74",
    number17: "08",
    number18: "23",
    ticketMaster: "TICKET MASTER",
    ticketStatus: "TICKET STATUS",
    resolved: "RESOLVED",
    inProgress: "IN PROGRESS",
    pending: "PENDING",
    viewAll: "VIEW ALL",
    contrast: "CONTRAST",
    infoRelationships: "INFO & RELATIONSHIPS",
    nameRoleValue: "NAME | ROLE | VALUE",
    focusOrder: "FOCUS ORDER",
    keyboard: "KEYBOARD",
    price: "TOP 5",
    w3CLogo34Aec5610ESeeklogo1: "/img/w3c-logo-34aec5610e-seeklogo-1@2x.png",
    successCriteriaViolations: <React.Fragment>SUCCESS CRITERIA<br />VIOLATIONS</React.Fragment>,
    xAxisGrid1: "/img/x-axis-grid-10@2x.png",
    xAxisGrid2: "/img/x-axis-grid-11@2x.png",
    xAxisGrid3: "/img/x-axis-grid-12@2x.png",
    xAxisGrid4: "/img/x-axis-grid-13@2x.png",
    xAxisGrid5: "/img/x-axis-grid-11@2x.png",
    yAxisGrid1: "/img/y-axis-grid-12@1x.png",
    yAxisGrid2: "/img/y-axis-grid-13@1x.png",
    yAxisGrid3: "/img/y-axis-grid-12@1x.png",
    yAxisGrid4: "/img/y-axis-grid-15@1x.png",
    yAxisGrid5: "/img/y-axis-grid-16@1x.png",
    xAxis1: "/img/x-axis-2@1x.png",
    yAxis1: "/img/y-axis-2@2x.png",
    week11: "WEEK 1",
    week21: "WEEK 2",
    week31: "WEEK 3",
    week41: "WEEK 4",
    week51: "WEEK 5",
    number19: "0",
    number20: "25",
    number21: "50",
    number22: "75",
    number23: "100",
    number24: "125",
    line1: "/img/line@1x.png",
    line2: "/img/line-1@1x.png",
    line3: "/img/line-2@1x.png",
    line4: "/img/line-3@1x.png",
    marker1: "/img/marker-25@2x.png",
    marker2: "/img/marker-26@2x.png",
    marker3: "/img/marker-27@2x.png",
    marker4: "/img/marker-28@2x.png",
    marker5: "/img/marker-29@2x.png",
    marker6: "/img/marker-5@2x.png",
    marker7: "/img/marker-31@2x.png",
    marker8: "/img/marker-32@2x.png",
    marker9: "/img/marker-33@2x.png",
    marker10: "/img/marker-34@2x.png",
    marker11: "/img/marker-35@2x.png",
    marker12: "/img/marker-36@2x.png",
    marker13: "/img/marker-37@2x.png",
    marker14: "/img/marker-13@2x.png",
    marker15: "/img/marker-39@2x.png",
    marker16: "/img/marker-40@2x.png",
    marker17: "/img/marker-41@2x.png",
    marker18: "/img/marker-42@2x.png",
    marker19: "/img/marker-43@2x.png",
    marker20: "/img/marker-44@2x.png",
    yAxisGrid6: "/img/y-axis-grid-17@1x.png",
    xAxisGrid6: "/img/x-axis-grid-15@2x.png",
    xAxisGrid7: "/img/x-axis-grid-16@2x.png",
    xAxisGrid8: "/img/x-axis-grid-17@2x.png",
    xAxisGrid9: "/img/x-axis-grid-18@2x.png",
    xAxisGrid10: "/img/x-axis-grid-19@2x.png",
    yAxisGrid7: "/img/y-axis-grid-18@1x.png",
    yAxisGrid8: "/img/y-axis-grid-19@1x.png",
    yAxisGrid9: "/img/y-axis-grid-8@1x.png",
    yAxisGrid10: "/img/y-axis-grid-21@1x.png",
    yAxisGrid11: "/img/y-axis-grid-22@1x.png",
    xAxis2: "/img/x-axis-3@1x.png",
    yAxis2: "/img/y-axis-3@2x.png",
    week12: "WEEK 1",
    week22: "WEEK 2",
    week32: "WEEK 3",
    week42: "WEEK 4",
    week52: "WEEK 5",
    number25: "0",
    number26: "25",
    number27: "50",
    number28: "75",
    number29: "100",
    number30: "125",
    line5: "/img/line-4@1x.png",
    marker21: "/img/marker-45@2x.png",
    marker22: "/img/marker-46@2x.png",
    marker23: "/img/marker-47@2x.png",
    marker24: "/img/marker-48@2x.png",
    marker25: "/img/marker-49@2x.png",
    yAxisGrid12: "/img/y-axis-grid-19@1x.png",
    violationsBySeverity2: "VIOLATIONS BY SEVERITY",
    legend: "LEGEND",
    serious2: "SERIOUS",
    critical2: "CRITICAL",
    moderate2: "MODERATE",
    minor2: "MINOR",
    severityHistory1: "SEVERITY HISTORY",
    severityHistory2: "SEVERITY HISTORY",
    chooseBetween0500Days1: "CHOOSE BETWEEN 0 - 500 DAYS",
    chooseBetween0500Days2: "CHOOSE BETWEEN 0 - 500 DAYS",
    text1: "+",
    text2: "+",
    text3: "-",
    text4: "-",
    vector50: "/img/vector-50@2x.png",
    vector54: "/img/vector-50@2x.png",
    vector51: "/img/vector-50@2x.png",
    vector55: "/img/vector-50@2x.png",
    x35Days: <React.Fragment>35 <br />DAYS</React.Fragment>,
    x105Days: <React.Fragment>105 <br />DAYS</React.Fragment>,
    vector52: "/img/vector-52@1x.png",
    vector56: "/img/vector-52@1x.png",
    percent10: "75%",
    percent11: "10%",
    percent12: "15%",
    overallHealthCheckScore: <React.Fragment>OVERALL<br />HEALTH CHECK<br />SCORE</React.Fragment>,
    iconsaxTwotoneHealth: "/img/iconsax-twotone-health@2x.png",
    vector310: "/img/vector-3@2x.png",
    vector6: "/img/vector-3@2x.png",
    codiconSettings: "/img/codicon-settings-1@2x.png",
    dashboard: "DASHBOARD",
    startNew: "START NEW",
    iconLink2: "/img/heroicons-link-4@2x.png",
    scheduleScans: <React.Fragment>SCHEDULE<br />SCANS</React.Fragment>,
    plugins: "PLUGINS",
    heroiconsLink: "/img/heroicons-link-5@2x.png",
    iconsaxBoldShieldsearch: "/img/iconsax-bold-shieldsearch@2x.png",
    history: "HISTORY",
    iconUser: "/img/abstract-user-flat-1-1@2x.png",
    eazy: "EAZY",
    scans: "SCANS",
    eosIconsCronjob: "/img/eos-icons-cronjob@2x.png",
    pajamasClearAll: "/img/pajamas-clear-all@2x.png",
    biPlugin: "/img/bi-plugin@2x.png",
    iconCart: "/img/ep-data-analysis@2x.png",
    frame1: "/img/frame-1@2x.png",
    settings: "SETTINGS",
    twinxAccessBot: "TWINX | ACCESS BOT",
    yourDigitalTwinFo: "YOUR DIGITAL TWIN FOR PENETRATION TESTING & FUNCTIONALITY SCANS",
};

