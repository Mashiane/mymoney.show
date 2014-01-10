
window.addEventListener('load', function() {
  frmFinancialNeeds.style.display = 'block';


  NSB.MultiInput_init('miFinancialNeeds');

  NSB.addProperties(miFinancialNeeds);
  NSB.addProperties(finneedsTitle);
  NSB.addDisableProperty(finneedsTitle);


  if(typeof(finneedsTitle.onclick)=='function'){
    if(typeof(finneedsTitle_left)!='undefined') finneedsTitle_left.onclick=function() {finneedsTitle.onclick(finneedsTitle_left.getAttribute('nsbvalue'))};
    if(typeof(finneedsTitle_right)!='undefined') finneedsTitle_right.onclick=function() {finneedsTitle.onclick(finneedsTitle_right.getAttribute('nsbvalue'))}};
  if(typeof fnIncome==='undefined')fnIncome=document.getElementById('fnIncome')
  fnIncome.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnIncome, $('#fnIncome_wrapper > div')[0]);
  NSB.addDisableProperty(fnIncome)
  if(typeof fnHousehold==='undefined')fnHousehold=document.getElementById('fnHousehold')
  fnHousehold.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnHousehold, $('#fnHousehold_wrapper > div')[0]);
  NSB.addDisableProperty(fnHousehold)
  if(typeof fnHouseHoldA==='undefined')fnHouseHoldA=document.getElementById('fnHouseHoldA')
  fnHouseHoldA.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnHouseHoldA, $('#fnHouseHoldA_wrapper > div')[0]);
  NSB.addDisableProperty(fnHouseHoldA)
  if(typeof fnTransport==='undefined')fnTransport=document.getElementById('fnTransport')
  fnTransport.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnTransport, $('#fnTransport_wrapper > div')[0]);
  NSB.addDisableProperty(fnTransport)
  if(typeof fnTransportA==='undefined')fnTransportA=document.getElementById('fnTransportA')
  fnTransportA.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnTransportA, $('#fnTransportA_wrapper > div')[0]);
  NSB.addDisableProperty(fnTransportA)
  if(typeof fnInvestments==='undefined')fnInvestments=document.getElementById('fnInvestments')
  fnInvestments.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnInvestments, $('#fnInvestments_wrapper > div')[0]);
  NSB.addDisableProperty(fnInvestments)
  if(typeof fnInvestmentsA==='undefined')fnInvestmentsA=document.getElementById('fnInvestmentsA')
  fnInvestmentsA.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnInvestmentsA, $('#fnInvestmentsA_wrapper > div')[0]);
  NSB.addDisableProperty(fnInvestmentsA)
  if(typeof fnLoans==='undefined')fnLoans=document.getElementById('fnLoans')
  fnLoans.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnLoans, $('#fnLoans_wrapper > div')[0]);
  NSB.addDisableProperty(fnLoans)
  if(typeof fnLoansA==='undefined')fnLoansA=document.getElementById('fnLoansA')
  fnLoansA.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnLoansA, $('#fnLoansA_wrapper > div')[0]);
  NSB.addDisableProperty(fnLoansA)
  if(typeof fnEducation==='undefined')fnEducation=document.getElementById('fnEducation')
  fnEducation.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnEducation, $('#fnEducation_wrapper > div')[0]);
  NSB.addDisableProperty(fnEducation)
  if(typeof fnEducationA==='undefined')fnEducationA=document.getElementById('fnEducationA')
  fnEducationA.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnEducationA, $('#fnEducationA_wrapper > div')[0]);
  NSB.addDisableProperty(fnEducationA)
  if(typeof fnEntertainment==='undefined')fnEntertainment=document.getElementById('fnEntertainment')
  fnEntertainment.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnEntertainment, $('#fnEntertainment_wrapper > div')[0]);
  NSB.addDisableProperty(fnEntertainment)
  if(typeof fnEntertainmentA==='undefined')fnEntertainmentA=document.getElementById('fnEntertainmentA')
  fnEntertainmentA.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnEntertainmentA, $('#fnEntertainmentA_wrapper > div')[0]);
  NSB.addDisableProperty(fnEntertainmentA)
  if(typeof fnDonation==='undefined')fnDonation=document.getElementById('fnDonation')
  fnDonation.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnDonation, $('#fnDonation_wrapper > div')[0]);
  NSB.addDisableProperty(fnDonation)
  if(typeof fnDonationA==='undefined')fnDonationA=document.getElementById('fnDonationA')
  fnDonationA.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnDonationA, $('#fnDonationA_wrapper > div')[0]);
  NSB.addDisableProperty(fnDonationA)
  if(typeof fnSupport==='undefined')fnSupport=document.getElementById('fnSupport')
  fnSupport.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnSupport, $('#fnSupport_wrapper > div')[0]);
  NSB.addDisableProperty(fnSupport)
  if(typeof fnSupportA==='undefined')fnSupportA=document.getElementById('fnSupportA')
  fnSupportA.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnSupportA, $('#fnSupportA_wrapper > div')[0]);
  NSB.addDisableProperty(fnSupportA)
  if(typeof fnCommunication==='undefined')fnCommunication=document.getElementById('fnCommunication')
  fnCommunication.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnCommunication, $('#fnCommunication_wrapper > div')[0]);
  NSB.addDisableProperty(fnCommunication)
  if(typeof fnCommunicationA==='undefined')fnCommunicationA=document.getElementById('fnCommunicationA')
  fnCommunicationA.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnCommunicationA, $('#fnCommunicationA_wrapper > div')[0]);
  NSB.addDisableProperty(fnCommunicationA)
  if(typeof fnAnimals==='undefined')fnAnimals=document.getElementById('fnAnimals')
  fnAnimals.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnAnimals, $('#fnAnimals_wrapper > div')[0]);
  NSB.addDisableProperty(fnAnimals)
  if(typeof fnAnimalsA==='undefined')fnAnimalsA=document.getElementById('fnAnimalsA')
  fnAnimalsA.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnAnimalsA, $('#fnAnimalsA_wrapper > div')[0]);
  NSB.addDisableProperty(fnAnimalsA)
  if(typeof fnAvailableFunds==='undefined')fnAvailableFunds=document.getElementById('fnAvailableFunds')
  fnAvailableFunds.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnAvailableFunds, $('#fnAvailableFunds_wrapper > div')[0]);
  NSB.addDisableProperty(fnAvailableFunds)
  if(typeof fnAvailableFundsA==='undefined')fnAvailableFundsA=document.getElementById('fnAvailableFundsA')
  fnAvailableFundsA.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnAvailableFundsA, $('#fnAvailableFundsA_wrapper > div')[0]);
  NSB.addDisableProperty(fnAvailableFundsA)
  frmFinancialNeeds.style.display = 'none';
}, false);
frmFinancialNeeds.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmFinancialNeeds);
finneedsTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
    ChangeForm(FinancialNeedsSelector);
	break;
  case ((choice) == "Calc"):
    FinancialNeedsCalculate();
  }
return savethefunction_rvar; }

frmFinancialNeeds.onshow = function() { savethefunction_rvar="";
  FinancialNeedsClear();
return savethefunction_rvar; }

function FinancialNeedsCalculate() {
 var  sincome;
 sincome = parseFloat(ProperAmount(fnIncome.value));
 var  shousehold;
 shousehold = parseFloat(ProperAmount(fnHousehold.value));
 var  stransport;
 stransport = parseFloat(ProperAmount(fnTransport.value));
 var  sinvestments;
 sinvestments = parseFloat(ProperAmount(fnInvestments.value));
 var  sloans;
 sloans = parseFloat(ProperAmount(fnLoans.value));
 var  seducation;
 seducation = parseFloat(ProperAmount(fnEducation.value));
 var  sentertainment;
 sentertainment = parseFloat(ProperAmount(fnEntertainment.value));
 var  sdonation;
 sdonation = parseFloat(ProperAmount(fnDonation.value));
 var  ssupport;
 ssupport = parseFloat(ProperAmount(fnSupport.value));
 var  scommunication;
 scommunication = parseFloat(ProperAmount(fnCommunication.value));
 var  sanimals;
 sanimals = parseFloat(ProperAmount(fnAnimals.value));
 var  stotal;
 stotal = 0;
 var  stotalp;
 stotalp = 0;
 var  savailable;
 savailable = 0;
 // check values
  if(parseFloat(sincome) == 0) {
    NSB.MsgBox("The income amount must be greater than zero!");
    fnIncome.focus();
     return;
  }
  stotalp = parseFloat(shousehold) + parseFloat(stransport) + parseFloat(sinvestments) + parseFloat(sloans) + parseFloat(seducation);
  stotalp = stotalp + parseFloat(sentertainment) + parseFloat(sdonation) + parseFloat(ssupport) + parseFloat(scommunication) + parseFloat(sanimals);
  if(parseFloat(stotalp) > 100) {
    NSB.MsgBox("The total percentage for all the categories is more than 100%, please correct this!");
    fnIncome.focus();
  }
  shousehold = parseFloat(shousehold)/100;
  stransport = parseFloat(stransport)/100;
  sinvestments = parseFloat(sinvestments)/100;
  sloans = parseFloat(sloans)/100;
  seducation = parseFloat(seducation)/100;
  sentertainment = parseFloat(sentertainment)/100;
  sdonation = parseFloat(sdonation)/100;
  ssupport = parseFloat(ssupport)/100;
  scommunication = parseFloat(scommunication)/100;
  sanimals = parseFloat(sanimals)/100;
  savailable = 100 - parseFloat(stotalp);
  fnHouseHoldA.value = parseFloat(shousehold) * parseFloat(sincome);
  fnHouseHoldA.value = MakeMoney(fnHouseHoldA.value);
  fnTransportA.value = parseFloat(stransport) * parseFloat(sincome);
  fnTransportA.value = MakeMoney(fnTransportA.value);
  fnInvestmentsA.value = parseFloat(sinvestments) * parseFloat(sincome);
  fnInvestmentsA.value = MakeMoney(fnInvestmentsA.value);
  fnLoansA.value = parseFloat(sloans) * parseFloat(sincome);
  fnLoansA.value = MakeMoney(fnLoansA.value);
  fnEducationA.value = parseFloat(seducation) * parseFloat(sincome);
  fnEducationA.value = MakeMoney(fnEducationA.value);
  fnEntertainmentA.value = parseFloat(sentertainment) * parseFloat(sincome);
  fnEntertainmentA.value = MakeMoney(fnEntertainmentA.value);
  fnDonationA.value = parseFloat(sdonation) * parseFloat(sincome);
  fnDonationA.value = MakeMoney(fnDonationA.value);
  fnSupportA.value = parseFloat(ssupport) * parseFloat(sincome);
  fnSupportA.value = MakeMoney(fnSupportA.value);
  fnCommunicationA.value = parseFloat(scommunication) * parseFloat(sincome);
  fnCommunicationA.value = MakeMoney(fnCommunicationA.value);
  fnAnimalsA.value = parseFloat(sanimals) * parseFloat(sincome);
  fnAnimalsA.value = MakeMoney(fnAnimalsA.value);
  fnAvailableFundsA.value = (parseFloat(savailable)/100) * parseFloat(sincome);
  fnAvailableFundsA.value = MakeMoney(fnAvailableFundsA.value);
  fnAvailableFunds.value = savailable;
 // fix amounts
  fnIncome.value = MakeMoney(fnIncome.value);
  fnHouseHoldA.value = MakeMoney(fnHouseHoldA.value);
  fnTransportA.value = MakeMoney(fnTransportA.value);
  fnInvestmentsA.value = MakeMoney(fnInvestmentsA.value);
  fnLoansA.value = MakeMoney(fnLoansA.value);
  fnEducationA.value = MakeMoney(fnEducationA.value);
  fnEntertainmentA.value = MakeMoney(fnEntertainmentA.value);
  fnDonationA.value = MakeMoney(fnDonationA.value);
  fnSupportA.value = MakeMoney(fnSupportA.value);
  fnCommunicationA.value = MakeMoney(fnCommunicationA.value);
  fnAnimalsA.value = MakeMoney(fnAnimalsA.value);
  fnAvailableFundsA.value = MakeMoney(fnAvailableFundsA.value);
 // fix percentages
  fnHousehold.value = IsPercent(fnHousehold.value);
  fnTransport.value = IsPercent(fnTransport.value);
  fnInvestments.value = IsPercent(fnInvestments.value);
  fnLoans.value = IsPercent(fnLoans.value);
  fnEducation.value = IsPercent(fnEducation.value);
  fnEntertainment.value = IsPercent(fnEntertainment.value);
  fnDonation.value = IsPercent(fnDonation.value);
  fnSupport.value = IsPercent(fnSupport.value);
  fnCommunication.value = IsPercent(fnCommunication.value);
  fnAnimals.value = IsPercent(fnAnimals.value);
  fnAvailableFunds.value = IsPercent(fnAvailableFunds.value);
}

function FinancialNeedsClear() {
  fnIncome.value = "0.00";
  fnHousehold.value = "0.0";
  fnHouseHoldA.value = "0.00";
  fnTransport.value = "0.00";
  fnTransportA.value = "0.00";
  fnInvestments.value = "0.00";
  fnInvestmentsA.value = "0.00";
  fnLoans.value = "0.00";
  fnLoansA.value = "0.00";
  fnEducation.value = "0.00";
  fnEducationA.value = "0.00";
  fnEntertainment.value = "0.00";
  fnEntertainmentA.value = "0.00";
  fnDonation.value = "0.00";
  fnDonationA.value = "0.00";
  fnSupport.value = "0.00";
  fnSupportA.value = "0.00";
  fnCommunication.value = "0.00";
  fnCommunicationA.value = "0.00";
  fnAnimals.value = "0.00";
  fnAnimalsA.value = "0.00";
  fnAvailableFunds.value = "0.00";
  fnAvailableFundsA.value = "0.00";
  fnIncome.focus();
}

function ResetAccounts() { savethefunction_rvar="";
  NSB.ShowProgress("Recalculating...");
  document.body.style.cursor = 'wait';
 // reset all current balances for the accounts to zero
 var  dbRecord;
 dbRecord = new Object();
  dbRecord["CurrentBalance"]= 0;
  UpdateRecords("Accounts" , dbRecord);
 // reset the actuals for the account_movements to zero
  dbRecord = new Object();
  dbRecord["ActualJan"]=0;
  dbRecord["ActualFeb"]=0;
  dbRecord["ActualMar"]=0;
  dbRecord["ActualApr"]=0;
  dbRecord["ActualMay"]=0;
  dbRecord["ActualJun"]=0;
  dbRecord["ActualJul"]=0;
  dbRecord["ActualAug"]=0;
  dbRecord["ActualSep"]=0;
  dbRecord["ActualOct"]=0;
  dbRecord["ActualNov"]=0;
  dbRecord["ActualDec"]=0;
  dbRecord["Actual"]=0;
  UpdateRecords("Accounts_Movement" , dbRecord);
  UpdateRecords("Category_Movement" , dbRecord);
 // process the payments and balances
  sqlList = [];
  sqlList[0] = ["SELECT Name, CategoryName, TypeOf FROM Accounts;" , resetAHandler0, resetAError];
  sqlList[1] = ["SELECT FromAccount,ToAccount,SUM(Amount) AS Amount FROM Payments GROUP BY FromAccount,ToAccount;" , resetAHandler, resetAError];
  sqlList[2] = ["SELECT Id,Name,OpeningBalance FROM Accounts;" , resetAHandler1, resetAError];
 // process the accounts_movements
  sqlList[3] = ["SELECT MonthOn,YearOn,FromAccount,ToAccount,SUM(Amount) AS Amount FROM Payments GROUP BY FromAccount,ToAccount,MonthOn,YearOn;" , accmoveHandler, resetAError];
  sqlList[4] = ["SELECT YearOn,FromAccount,SUM(Amount) AS Amount From Payments GROUP BY FromAccount,YearOn;" , accmoveHandlerF, resetAError];
  sqlList[5] = ["SELECT YearOn,ToAccount,SUM(Amount) AS Amount From Payments GROUP BY ToAccount,YearOn;" , accmoveHandlerT, resetAError];
  Sql(dbObj, sqlList);
return savethefunction_rvar; }

function accmoveHandlerT(transaction, results) { savethefunction_rvar="";
 var  row, i, sfromaccount, syearon, sfak, smonthactual;
 var  spvalues, dbRecord, dbUpdate, sactual, scatf;
 var  sjan,sfeb,smar,sapr,smay,sjun,sjul,saug,ssep,soct,snov,sdec;
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    syearon = row["YearOn"];
    sfromaccount = row["ToAccount"];
    sfak = syearon  +  "-"  +  sfromaccount;
    smonthactual = localStorage.getItem(sfak);
    sactual = MvSum(smonthactual,",");
    spvalues = Split(smonthactual,",");
    sjan = spvalues[1];
    sfeb = spvalues[2];
    smar = spvalues[3];
    sapr = spvalues[4];
    smay = spvalues[5];
    sjun = spvalues[6];
    sjul = spvalues[7];
    saug = spvalues[8];
    ssep = spvalues[9];
    soct = spvalues[10];
    snov = spvalues[11];
    sdec = spvalues[12];
    dbRecord = new Object();
    dbRecord["ActualJan"]=sjan;
    dbRecord["ActualFeb"]=sfeb;
    dbRecord["ActualMar"]=smar;
    dbRecord["ActualApr"]=sapr;
    dbRecord["ActualMay"]=smay;
    dbRecord["ActualJun"]=sjun;
    dbRecord["ActualJul"]=sjul;
    dbRecord["ActualAug"]=saug;
    dbRecord["ActualSep"]=ssep;
    dbRecord["ActualOct"]=soct;
    dbRecord["ActualNov"]=snov;
    dbRecord["ActualDec"]=sdec;
    dbRecord["Actual"]=sactual;
    sfak = InSingleQuote(sfak);
    dbUpdate = new Object();
    dbUpdate["Id"]=sfak;
    UpdateRecord("Accounts_Movement" , dbRecord, dbUpdate);
 // process for the categories
    scatf = localStorage.getItem("catfor_"  +  sfromaccount);
    sfak = syearon  +  "-"  +  scatf;
    smonthactual = sessionStorage.getItem(sfak);
    sactual = MvSum(smonthactual,",");
    spvalues = Split(smonthactual,",");
    sjan = spvalues[1];
    sfeb = spvalues[2];
    smar = spvalues[3];
    sapr = spvalues[4];
    smay = spvalues[5];
    sjun = spvalues[6];
    sjul = spvalues[7];
    saug = spvalues[8];
    ssep = spvalues[9];
    soct = spvalues[10];
    snov = spvalues[11];
    sdec = spvalues[12];
    dbRecord = new Object();
    dbRecord["ActualJan"]=sjan;
    dbRecord["ActualFeb"]=sfeb;
    dbRecord["ActualMar"]=smar;
    dbRecord["ActualApr"]=sapr;
    dbRecord["ActualMay"]=smay;
    dbRecord["ActualJun"]=sjun;
    dbRecord["ActualJul"]=sjul;
    dbRecord["ActualAug"]=saug;
    dbRecord["ActualSep"]=ssep;
    dbRecord["ActualOct"]=soct;
    dbRecord["ActualNov"]=snov;
    dbRecord["ActualDec"]=sdec;
    dbRecord["Actual"]=sactual;
    sfak = InSingleQuote(sfak);
    dbUpdate = new Object();
    dbUpdate["Id"]=sfak;
    UpdateRecord("Category_Movement" , dbRecord, dbUpdate);
  }
return savethefunction_rvar; }

function accmoveHandlerF(transaction, results) { savethefunction_rvar="";
 var  row, i, sfromaccount, syearon, sfak, smonthactual;
 var  spvalues, dbRecord, dbUpdate, sactual, scatf;
 var  sjan,sfeb,smar,sapr,smay,sjun,sjul,saug,ssep,soct,snov,sdec;
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    syearon = row["YearOn"];
    sfromaccount = row["FromAccount"];
    sfak = syearon  +  "-"  +  sfromaccount;
    smonthactual = localStorage.getItem(sfak);
    sactual = MvSum(smonthactual,",");
    spvalues = Split(smonthactual,",");
    sjan = spvalues[1];
    sfeb = spvalues[2];
    smar = spvalues[3];
    sapr = spvalues[4];
    smay = spvalues[5];
    sjun = spvalues[6];
    sjul = spvalues[7];
    saug = spvalues[8];
    ssep = spvalues[9];
    soct = spvalues[10];
    snov = spvalues[11];
    sdec = spvalues[12];
    dbRecord = new Object();
    dbRecord["ActualJan"]=sjan;
    dbRecord["ActualFeb"]=sfeb;
    dbRecord["ActualMar"]=smar;
    dbRecord["ActualApr"]=sapr;
    dbRecord["ActualMay"]=smay;
    dbRecord["ActualJun"]=sjun;
    dbRecord["ActualJul"]=sjul;
    dbRecord["ActualAug"]=saug;
    dbRecord["ActualSep"]=ssep;
    dbRecord["ActualOct"]=soct;
    dbRecord["ActualNov"]=snov;
    dbRecord["ActualDec"]=sdec;
    dbRecord["Actual"]=sactual;
    sfak = InSingleQuote(sfak);
    dbUpdate = new Object();
    dbUpdate["Id"]=sfak;
    UpdateRecord("Accounts_Movement" , dbRecord, dbUpdate);
 // process for the categories
    scatf = localStorage.getItem("catfor_"  +  sfromaccount);
    sfak = syearon  +  "-"  +  scatf;
    smonthactual = sessionStorage.getItem(sfak);
    sactual = MvSum(smonthactual,",");
    spvalues = Split(smonthactual,",");
    sjan = spvalues[1];
    sfeb = spvalues[2];
    smar = spvalues[3];
    sapr = spvalues[4];
    smay = spvalues[5];
    sjun = spvalues[6];
    sjul = spvalues[7];
    saug = spvalues[8];
    ssep = spvalues[9];
    soct = spvalues[10];
    snov = spvalues[11];
    sdec = spvalues[12];
    dbRecord = new Object();
    dbRecord["ActualJan"]=sjan;
    dbRecord["ActualFeb"]=sfeb;
    dbRecord["ActualMar"]=smar;
    dbRecord["ActualApr"]=sapr;
    dbRecord["ActualMay"]=smay;
    dbRecord["ActualJun"]=sjun;
    dbRecord["ActualJul"]=sjul;
    dbRecord["ActualAug"]=saug;
    dbRecord["ActualSep"]=ssep;
    dbRecord["ActualOct"]=soct;
    dbRecord["ActualNov"]=snov;
    dbRecord["ActualDec"]=sdec;
    dbRecord["Actual"]=sactual;
    sfak = InSingleQuote(sfak);
    dbUpdate = new Object();
    dbUpdate["Id"]=sfak;
    UpdateRecord("Category_Movement" , dbRecord, dbUpdate);
  }
return savethefunction_rvar; }

function accmoveHandler(transaction, results) { savethefunction_rvar="";
 var  row, i, smonthon, syearon, samount, mpos, syearon, saccount;
 var  sfromaccount, stoaccount, sfak, stak, mlen, spvalues, strvalue, x, y;
 var  smonthactual, spvalues, sold, scatf, scatt, stypeof;
 var  sfakc, stakc, dbRecord, acctmovekeys, catmovekeys;
  acctmovekeys="";
  catmovekeys="";
 // reset the accounts_movement first
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    syearon = row["YearOn"];
    sfromaccount = row["FromAccount"];
    stoaccount = row["ToAccount"];
    sfak = syearon  +  "-"  +  sfromaccount;
    stak = syearon  +  "-"  +  stoaccount;
    localStorage.setItem(sfak,"0,0,0,0,0,0,0,0,0,0,0,0,0,0");
    localStorage.setItem(stak,"0,0,0,0,0,0,0,0,0,0,0,0,0,0");
    if(InStr(1,acctmovekeys,sfak) == 0) {
      acctmovekeys = acctmovekeys  +  VM  +  sfak;
    }
    if(InStr(1,acctmovekeys,stak) == 0) {
      acctmovekeys = acctmovekeys  +  VM  +  stak;
    }
 // define for category movement
    scatf = localStorage.getItem("catfor_"  +  sfromaccount);
    scatt = localStorage.getItem("catfor_"  +  stoaccount);
    sfak = syearon  +  "-"  +  scatf;
    stak = syearon  +  "-"  +  scatt;
    sessionStorage.setItem(sfak,"0,0,0,0,0,0,0,0,0,0,0,0,0,0");
    sessionStorage.setItem(stak,"0,0,0,0,0,0,0,0,0,0,0,0,0,0");
    if(InStr(1,catmovekeys,sfak) == 0) {
      catmovekeys = catmovekeys  +  VM  +  sfak;
    }
    if(InStr(1,catmovekeys,stak) == 0) {
      catmovekeys = catmovekeys  +  VM  +  stak;
    }
  }
 // create movements
  spvalues = Split(acctmovekeys,VM);
  y = spvalues.length - 1;
  for   (x = 0; x  <= y; x ++) {
    strvalue = spvalues[x];
    if(Len(strvalue) > 0) {
      syearon = MvField(strvalue,1,"-");
      saccount = MvRest(strvalue,1,"-");
      stypeof = localStorage.getItem("acctexp_"  +  saccount);
      strvalue = InSingleQuote(strvalue);
      saccount = InSingleQuote(saccount);
      stypeof = InSingleQuote(stypeof);
      dbRecord = new Object();
      dbRecord["Id"]=strvalue;
      dbRecord["YearOn"]= syearon;
      dbRecord["TypeOf"]= stypeof;
      dbRecord["AccountName"]= saccount;
      dbRecord["ActualJan"]=0;
      dbRecord["ActualFeb"]=0;
      dbRecord["ActualMar"]=0;
      dbRecord["ActualApr"]=0;
      dbRecord["ActualMay"]=0;
      dbRecord["ActualJun"]=0;
      dbRecord["ActualJul"]=0;
      dbRecord["ActualAug"]=0;
      dbRecord["ActualSep"]=0;
      dbRecord["ActualOct"]=0;
      dbRecord["ActualNov"]=0;
      dbRecord["ActualDec"]=0;
      dbRecord["Actual"]=0;
      InsertRecord("Accounts_Movement" , dbRecord);
    }
  }
  spvalues = Split(catmovekeys,VM);
  y = spvalues.length - 1;
  for   (x = 0; x  <= y; x ++) {
    strvalue = spvalues[x];
    if(Len(strvalue) > 0) {
      syearon = MvField(strvalue,1,"-");
      saccount = MvRest(strvalue,1,"-");
      stypeof = localStorage.getItem("catexp_"  +  saccount);
      strvalue = InSingleQuote(strvalue);
      saccount = InSingleQuote(saccount);
      stypeof = InSingleQuote(stypeof);
      dbRecord = new Object();
      dbRecord["Id"]=strvalue;
      dbRecord["YearOn"]= syearon;
      dbRecord["TypeOf"]= stypeof;
      dbRecord["AccountName"]= saccount;
      dbRecord["ActualJan"]=0;
      dbRecord["ActualFeb"]=0;
      dbRecord["ActualMar"]=0;
      dbRecord["ActualApr"]=0;
      dbRecord["ActualMay"]=0;
      dbRecord["ActualJun"]=0;
      dbRecord["ActualJul"]=0;
      dbRecord["ActualAug"]=0;
      dbRecord["ActualSep"]=0;
      dbRecord["ActualOct"]=0;
      dbRecord["ActualNov"]=0;
      dbRecord["ActualDec"]=0;
      dbRecord["Actual"]=0;
      InsertRecord("Category_Movement" , dbRecord);
    }
  }
 // process the amounts next
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    smonthon = _jsCint(row["MonthOn"]);
    syearon = row["YearOn"];
    samount = row["Amount"];
    samount = parseFloat(samount);
    samount = Round(samount,2);
    sfromaccount = row["FromAccount"];
    stoaccount = row["ToAccount"];
    sfak = syearon  +  "-"  +  sfromaccount;
    stak = syearon  +  "-"  +  stoaccount;
 // get from account actuals
    smonthactual = localStorage.getItem(sfak);
    spvalues = Split(smonthactual,",");
    sold = spvalues[smonthon];
    sold = parseFloat(sold) - parseFloat(samount);
    sold = Round(sold,2);
    spvalues[smonthon] = sold;
    smonthactual = Join(spvalues,",");
    localStorage.setItem(sfak,smonthactual);
 // get to account actuals
    smonthactual = localStorage.getItem(stak);
    spvalues = Split(smonthactual,",");
    sold = spvalues[smonthon];
    sold = parseFloat(sold) + parseFloat(samount);
    sold = Round(sold,2);
    spvalues[smonthon] = sold;
    smonthactual = Join(spvalues,",");
    localStorage.setItem(stak,smonthactual);
 // process for category
    scatf = localStorage.getItem("catfor_"  +  sfromaccount);
    scatt = localStorage.getItem("catfor_"  +  stoaccount);
    sfak = syearon  +  "-"  +  scatf;
 // process cat totals
    smonthactual = sessionStorage.getItem(sfak);
    spvalues = Split(smonthactual,",");
    sold = spvalues[smonthon];
    sold = parseFloat(sold) - parseFloat(samount);
    sold = Round(sold,2);
    spvalues[smonthon] = sold;
    smonthactual = Join(spvalues,",");
    sessionStorage.setItem(sfak,smonthactual);
    stak = syearon  +  "-"  +  scatt;
    smonthactual = sessionStorage.getItem(stak);
    spvalues = Split(smonthactual,",");
    sold = spvalues[smonthon];
    sold = parseFloat(sold) + parseFloat(samount);
    sold = Round(sold,2);
    spvalues[smonthon] = sold;
    smonthactual = Join(spvalues,",");
    sessionStorage.setItem(stak,smonthactual);
  }
return savethefunction_rvar; }

function resetAHandler0(transaction, results) { savethefunction_rvar="";
 var  row, sName, i, scategory, stypeof;
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
      row = results.rows.item(i);
      sName = row["Name"];
      scategory = row["CategoryName"];
      stypeof = row["TypeOf"];
      localStorage.setItem("catfor_"  +  sName, scategory);
      localStorage.setItem("catexp_"  +  scategory, stypeof);
      localStorage.setItem("acctexp_"  +  sName, stypeof);
      localStorage.setItem("reset_"  +  sName,0);
  }
return savethefunction_rvar; }

function resetAHandler1(transaction, results) { savethefunction_rvar="";
 var  row, i, sid, sName, sOpeningBalance, sCurrentBalance;
 var  rkey;
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
      row = results.rows.item(i);
      sid = row["Id"];
      sName = row["Name"];
      sOpeningBalance = row["OpeningBalance"];
      sCurrentBalance = 0;
      rkey = "reset_"  +  sName;
      sCurrentBalance = localStorage.getItem(rkey);
      sCurrentBalance = parseFloat(sCurrentBalance) + parseFloat(sOpeningBalance);
      sCurrentBalance = Round(sCurrentBalance,2);
     var  dbRecord;
 dbRecord = new Object();
     var  dbUpdate;
 dbUpdate = new Object();
      sName = InSingleQuote(sName);
      dbRecord["CurrentBalance"]= sCurrentBalance;
      dbUpdate["Name"]= sName;
      UpdateRecord("Accounts" , dbRecord, dbUpdate);
  }
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function resetAHandler(transaction, results) { savethefunction_rvar="";
 var  row, i, ramount, sfromaccount;
 var  stoaccount, samount, rkey;
 // reset the values first just in case
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sfromaccount = row["FromAccount"];
    stoaccount = row["ToAccount"];
    rkey = "reset_"  +  sfromaccount;
    localStorage.setItem(rkey,0);
    rkey = "reset_"  +  stoaccount;
    localStorage.setItem(rkey,0);
  }
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sfromaccount = row["FromAccount"];
    stoaccount = row["ToAccount"];
    samount = parseFloat(row["Amount"]);
 // process from account
    rkey = "reset_"  +  sfromaccount;
    ramount = localStorage.getItem(rkey);
    ramount = parseFloat(ramount) - parseFloat(samount);
    ramount = Round(ramount,2);
    localStorage.setItem(rkey,ramount);
 // process to account
    rkey = "reset_"  +  stoaccount;
    ramount = localStorage.getItem(rkey);
    ramount = parseFloat(ramount) + parseFloat(samount);
    ramount = Round(ramount,2);
    localStorage.setItem(rkey,ramount);
  }
return savethefunction_rvar; }

function resetAError(transaction, results) { savethefunction_rvar="";
 //console.log("Error resetting accounts")
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
return savethefunction_rvar; }

function AddAccount(sAccountNo,sName,sCategoryName,sInstitutionName,sOpeningBalance,sPayFrom,stypeof,sInstallment,sCurrentBalance) {
  sAccountNo = InSingleQuote(sAccountNo);
  sName = InSingleQuote(sName);
  sCategoryName= InSingleQuote(sCategoryName);
  sInstitutionName= InSingleQuote(sInstitutionName);
  sOpeningBalance= InSingleQuote(sOpeningBalance);
  sPayFrom = InSingleQuote(sPayFrom);
  stypeof = InSingleQuote(stypeof);
  sInstallment = parseFloat(sInstallment);
  sCurrentBalance = parseFloat(sCurrentBalance);
 var  dbRecord;
  dbRecord = new Object();
  dbRecord["AccountNo"]= sAccountNo;
  dbRecord["Name"]= sName;
  dbRecord["CategoryName"]= sCategoryName;
  dbRecord["InstitutionName"]= sInstitutionName;
  dbRecord["OpeningBalance"]= sOpeningBalance;
  dbRecord["PayFrom"]= sPayFrom;
  dbRecord["TypeOf"]= stypeof;
  dbRecord["Installment"]= sInstallment;
  dbRecord["CurrentBalance"]= sCurrentBalance;
  InsertRecord("Accounts" , dbRecord);
}

 // create the accounts table
function Accounts_CreateTable() {
 var  tblStructure;
  tblStructure = new Object();
  tblStructure["Id"]= "INTEGER";
  tblStructure["AccountNo"]= "TEXT";
  tblStructure["Name"]= "TEXT";
  tblStructure["CategoryName"]= "TEXT";
  tblStructure["InstitutionName"]= "TEXT";
  tblStructure["OpeningBalance"]= "TEXT";
  tblStructure["PayFrom"]= "TEXT";
  tblStructure["TypeOf"]= "TEXT";
  tblStructure["Installment"]= "FLOAT";
  tblStructure["CurrentBalance"]= "FLOAT";
  CreateTable("Accounts" , tblStructure, "Id" , "Id");
  CreateTableIndexes("Accounts" ,"AccountNo,Name,CategoryName,InstitutionName,OpeningBalance,PayFrom,TypeOf,Installment,CurrentBalance");
}

function AccountsMovement_CreateTable() {
 var  tbls;
  tbls = new Object();
  tbls["Id"]= "text";
  tbls["AccountId"]= "integer";
  tbls["AccountName"]= "text";
  tbls["YearOn"]= "integer";
  tbls["TypeOf"]= "text";
  tbls["BudgetJan"]= "float";
  tbls["BudgetFeb"]= "float";
  tbls["BudgetMar"]= "float";
  tbls["BudgetApr"]= "float";
  tbls["BudgetMay"]= "float";
  tbls["BudgetJun"]= "float";
  tbls["BudgetJul"]= "float";
  tbls["BudgetAug"]= "float";
  tbls["BudgetSep"]= "float";
  tbls["ActualApr"]= "float";
  tbls["ActualMay"]= "float";
  tbls["ActualJun"]= "float";
  tbls["ActualJul"]= "float";
  tbls["ActualAug"]= "float";
  tbls["ActualSep"]= "float";
  tbls["ActualMar"]= "float";
  tbls["ActualOct"]= "float";
  tbls["ActualNov"]= "float";
  tbls["ActualDec"]= "float";
  tbls["Actual"]= "float";
  tbls["ActualFeb"]= "float";
  tbls["BudgetOct"]= "float";
  tbls["BudgetNov"]= "float";
  tbls["BudgetDec"]= "float";
  tbls["Budget"]= "float";
  tbls["ActualJan"]= "float";
  CreateTable("Accounts_Movement" , tbls, "Id" , "");
  CreateTableIndexes("Accounts_Movement" ,"AccountId,AccountName,YearOn,TypeOf,Actual,Budget");
}


function AddCategory(scategory) { savethefunction_rvar="";
  scategory = InSingleQuote(scategory);
  dbRecord = new Object();
  dbRecord["CategoryName"]= scategory;
  dbRecord["Transactions"]= 0;
  InsertRecord("Categories" , dbRecord);
}

function AddCategories(scategory) { savethefunction_rvar="";
 var  spvalues;
 spvalues = Split(scategory,",");
 var  rsTot, rsCnt;
 rsTot = spvalues.length - 1;
 var  scat, dbRecord;
  ResetInsertCommands();
  for   (rsCnt = 0; rsCnt  <= rsTot; rsCnt ++) {
    scat = spvalues[rsCnt];
    scat = InSingleQuote(scat);
    dbRecord = new Object();
    dbRecord["CategoryName"]= scat;
    dbRecord["Transactions"]= 0;
    InsertRecord1("Categories" , dbRecord, rsCnt);
  }
  ExecuteInsertCommands();
}

 // generate the next available institution id result
function NewCategoryOk(transaction, results) { savethefunction_rvar="";
  recid = results.rows.item(0)["MaxValue"];
  recid = recid + 1;
 var  dbRecord;
 dbRecord = new Object();
 var  ncat;
 ncat = localStorage.getItem("newcategory");
  ncat = InSingleQuote(ncat);
  dbRecord["CategoryId"]= recid;
  dbRecord["CategoryName"]= ncat;
  dbRecord["Transactions"]= 0;
  InsertRecord("Categories" , dbRecord);
return savethefunction_rvar; }

function Category(id, categoryname, transactions) { savethefunction_rvar="";
  this.id = id;
  this.categoryname = categoryname;
  this.transactions = transactions;
return savethefunction_rvar; }

function saveCategory() { savethefunction_rvar="";
 var  s;
  sqlList = [];
  s = Join([this.id, "'"  +  this.categoryname  +  "'" , this.transactions], ",");
  sqlList[0] = ["INSERT INTO Categories (CategoryId, CategoryName, Transactions) VALUES ( "  +  s  +  ");" , saveCatOk, saveCatError];
  Sql(dbObj, sqlList);
return savethefunction_rvar; }

function saveCatOk(transaction, result) { savethefunction_rvar="";
  NSB.MsgBox("Category successfully saved.");
return savethefunction_rvar; }

function saveCatError(transaction, result) { savethefunction_rvar="";
  NSB.MsgBox("SQL Error: "  +  result.code  +  ": "  +  result.message);
return savethefunction_rvar; }

Category.prototype.save = saveCategory;

function Categories_CreateTable() {
 var  tbls;
  tbls = new Object();
  tbls["CategoryId"]= "integer";
  tbls["CategoryName"]= "text";
  tbls["Transactions"]= "integer";
  CreateTable("Categories" , tbls, "CategoryId" , "CategoryId");
  CreateTableIndexes("Categories" ,"CategoryName,Transactions");
}

function CategoryMovement_CreateTable() {
 var  tbls;
  tbls = new Object();
  tbls["Id"]= "text";
  tbls["AccountId"]= "integer";
  tbls["AccountName"]= "text";
  tbls["YearOn"]= "integer";
  tbls["TypeOf"]= "text";
  tbls["BudgetJan"]= "float";
  tbls["BudgetFeb"]= "float";
  tbls["BudgetMar"]= "float";
  tbls["BudgetApr"]= "float";
  tbls["BudgetMay"]= "float";
  tbls["BudgetJun"]= "float";
  tbls["BudgetJul"]= "float";
  tbls["BudgetAug"]= "float";
  tbls["BudgetSep"]= "float";
  tbls["ActualApr"]= "float";
  tbls["ActualMay"]= "float";
  tbls["ActualJun"]= "float";
  tbls["ActualJul"]= "float";
  tbls["ActualAug"]= "float";
  tbls["ActualSep"]= "float";
  tbls["ActualMar"]= "float";
  tbls["ActualOct"]= "float";
  tbls["ActualNov"]= "float";
  tbls["ActualDec"]= "float";
  tbls["Actual"]= "float";
  tbls["ActualFeb"]= "float";
  tbls["BudgetOct"]= "float";
  tbls["BudgetNov"]= "float";
  tbls["BudgetDec"]= "float";
  tbls["Budget"]= "float";
  tbls["ActualJan"]= "float";
  CreateTable("Category_Movement" , tbls, "Id" , "");
  CreateTableIndexes("Category_Movement" ,"AccountId,AccountName,YearOn,TypeOf,Actual,Budget");
}

function CostMeasurements_CreateTable() {
 var  tbls;
  tbls = new Object();
  tbls["Id"]= "text";
  tbls["YearOn"]= "integer";
  tbls["MonthOn"]= "integer";
  tbls["Category"]= "text";
  tbls["TypeOf"]= "text";
  tbls["Amount"]= "float";
  tbls["Budget"]= "float";
  tbls["CostSplit"]= "float";
  tbls["Cost2Income"]= "float";
  CreateTable("Cost_Measurements" , tbls, "Id" , "");
  CreateTableIndexes("Cost_Measurements" , "TypeOf,Category,MonthOn,YearOn");
}

function ResetMonthlySummary() { savethefunction_rvar="";
  payYear = localStorage.getItem("payYear");
  payMonth = localStorage.getItem("payMonth");
  payMonth = _jsCint(payMonth);
  sqlList = [];
  sqlList[0] = ["DELETE FROM Cost_Measurements WHERE YearOn = "  +  payYear  +  ";" , msHandler, msError];
  Sql(dbObj, sqlList);
return savethefunction_rvar; }

function msHandler(transaction, results) { savethefunction_rvar="";
 //console.log("ms_handler: cost_measurements cleared")
 var  query0;
 query0 = [];
  query0[0] = ["SELECT * FROM [Category_Movement] WHERE YearOn = "  +  payYear  +  " AND [TypeOf] in ('Incomes','Expenses') ORDER BY TypeOf DESC,AccountName;" , msHandler1, msError1];
  Sql(dbObj, query0);
return savethefunction_rvar; }

function msHandler1(transaction, results) { savethefunction_rvar="";
 //console.log("ms_handler1: processing summaries")
 var  row, i, sAccountName, sYearOn, stypeof, x, samount;
 var  sAccountName1, sTypeOf1, sold, soldc2i;
 var  smonth;
 smonth = Split("0,0,0,0,0,0,0,0,0,0,0,0,0" , ",");
 var  sid, dbRecord;
 // save temp values
  localStorage.setItem("Incomes" ,0);
  localStorage.setItem("Expenses" ,0);
  localStorage.setItem("Assets" ,0);
  localStorage.setItem("Liabilities" ,0);
  localStorage.setItem("Cost2Income" ,0);
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sAccountName = row["AccountName"];
    sYearOn = row["YearOn"];
    stypeof = row["TypeOf"];
    smonth[1] = row["ActualJan"];
    smonth[2] = row["ActualFeb"];
    smonth[3] = row["ActualMar"];
    smonth[4] = row["ActualApr"];
    smonth[5] = row["ActualMay"];
    smonth[6] = row["ActualJun"];
    smonth[7] = row["ActualJul"];
    smonth[8] = row["ActualAug"];
    smonth[9] = row["ActualSep"];
    smonth[10] = row["ActualOct"];
    smonth[11] = row["ActualNov"];
    smonth[12] = row["ActualDec"];

 // update cost measurements
    for   (x = 1; x  <= 12; x ++) {
      dbRecord = new Object();
      sTypeOf1 = stypeof;
      sAccountName1 = sAccountName;
      sid = sYearOn  +  "-"  +  CStr(x)  +  "-"  +  sTypeOf1  +  "-"  +  sAccountName1;
      samount = Round(smonth[x] ,2);
      if(parseFloat(samount) < 0 ) { samount = samount * (0-1); }
      if(x == payMonth) {
 // update amounts
        sold = localStorage.getItem(stypeof);
        sold = parseFloat(sold) + parseFloat(samount);
        localStorage.setItem(stypeof,sold);
 // update database  
        sid = InSingleQuote(sid);
        sAccountName1 = InSingleQuote(sAccountName1);
        sTypeOf1 = InSingleQuote(sTypeOf1);
        dbRecord["Id"]= sid;
        dbRecord["YearOn"]= sYearOn;
        dbRecord["MonthOn"]= x;
        dbRecord["Category"]= sAccountName1;
        dbRecord["TypeOf"]= sTypeOf1;
        dbRecord["Amount"]= samount;
        InsertRecord("Cost_Measurements" , dbRecord);
      }
    }
  }

 var  query1;
 query1 = [];
  query1[0] = ["SELECT * FROM [Cost_Measurements] WHERE YearOn = "  +  payYear  +  " AND MonthOn = "  +  payMonth  +  " ORDER BY TypeOf DESC,Category;" , msHandler2, msError2];
  Sql(dbObj, query1);
return savethefunction_rvar; }

function msHandler2(transaction, results) { savethefunction_rvar="";
 var  row, i, sid, stypeof, samount, dbWhere;
 var  scostsplit, scost2income, dbRecord;
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sid = row["Id"];
    stypeof = row["TypeOf"];
    samount = row["Amount"];
    scostsplit = 0;
    scost2income = 0;
    switch (True) {
    case ((stypeof) == "Expenses"):
      sold = parseFloat(localStorage.getItem("Expenses"));
      if(sold != 0) {
        scostsplit = samount / sold;
        scostsplit = scostsplit * 100;
        scostsplit = Round(scostsplit,0);
      }
 // cost to income
      sold = parseFloat(localStorage.getItem("Incomes"));
      if(sold != 0) {
        scost2income = samount / sold;
        scost2income = scost2income * 100;
        scost2income = Round(scost2income,0);
 // update cost2income
        soldc2i = localStorage.getItem("Cost2Income");
        soldc2i = parseFloat(soldc2i) + parseFloat(scost2income);
        soldc2i = Round(soldc2i,0);
        localStorage.setItem("Cost2Income" , soldc2i);
      }
    }
    dbRecord = new Object();
    dbWhere = new Object;
    sid = InSingleQuote(sid);
    dbWhere["Id"]= sid;
    dbRecord["CostSplit"]= scostsplit;
    dbRecord["Cost2Income"]= scost2income;
    UpdateRecord("Cost_Measurements" , dbRecord, dbWhere);
  }
  if(monthlysummaryB == True) {
   var  query2;
 query2 = [];
    query2[0] = ["SELECT * FROM [Cost_Measurements] WHERE YearOn = "  +  payYear  +  " AND MonthOn = "  +  payMonth  +  " ORDER BY TypeOf DESC,Category;" , msHandler3, msError3];
    Sql(dbObj, query2);
  }
  if(monthlysummaryC == True) {
   var  query2;
 query2 = [];
    query2[0] = ["SELECT * FROM [Cost_Measurements] WHERE YearOn = "  +  payYear  +  " AND MonthOn = "  +  payMonth  +  " ORDER BY TypeOf DESC,Category;" , mscHandler4, mscError4];
    Sql(dbObj, query2);
  }
return savethefunction_rvar; }

function msError(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
 //console.log("cost_error:" & results.message)
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
return savethefunction_rvar; }

function msError1(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
 //console.log("ms_error1:" & results.message)
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
return savethefunction_rvar; }

function msError2(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
 //console.log("ms_error2:" & results.message)
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
return savethefunction_rvar; }
 // class to hold the institution properties
function Institution(id,name) { savethefunction_rvar="";
   this.id = id;
   this.name = name;
return savethefunction_rvar; }

 // method to save the institution in the database
function saveInstitution() { savethefunction_rvar="";
 var  s;
  sqlList = [];
  s = Join([this.id, "'"  +  this.name  +  "'"], ",");
  sqlList[0] = ["INSERT INTO Institutions (Id, Name) VALUES ( "  +  s  +  ");" , saveInstOk, saveInstError];
  Sql(dbObj, sqlList);
return savethefunction_rvar; }

 // if institution saved, tell user
function saveInstOk(transaction, results) { savethefunction_rvar="";
  NSB.MsgBox("Institution successfully saved.");
return savethefunction_rvar; }

 // if institution not saved, tell user
function saveInstError(transaction, results) { savethefunction_rvar="";
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
return savethefunction_rvar; }

 // generate the next available institution id query
function AddInstitution(sname) { savethefunction_rvar="";
  sname = InSingleQuote(sname);
  dbRecord = new Object();
  dbRecord["Name"]= sname;
  InsertRecord("Institutions" , dbRecord);
}

function nextInstId() { savethefunction_rvar="";
  sqlList = [];
  sqlList[0] = ["SELECT MAX(Id) as MaxValue FROM Institutions;" , maxOk, maxError];
  Sql(dbObj, sqlList);
return savethefunction_rvar; }

 // generate the next available institution id result
function maxOk(transaction, results) { savethefunction_rvar="";
  this.id = results.rows.item(0)["MaxValue"];
  this.id = this.id + 1;
return savethefunction_rvar; }

 // generate next institution id error
function maxError(transaction, results) { savethefunction_rvar="";
  this.id = -1;
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
return savethefunction_rvar; }

 // prototype definitions
Institution.prototype.nextid = nextInstId;
Institution.prototype.save = saveInstitution;

function Institutions_CreateTable() {
 var  tbls;
  tbls = new Object();
  tbls["Id"]= "integer";
  tbls["Name"]= "text";
  CreateTable("Institutions" , tbls, "Id" , "Id");
  CreateTableIndexes("Institutions" , "Name");
}

function Payments_CreateTable() {
 var  tbls;
  tbls = new Object();
  tbls["Id"]= "integer";
  tbls["DayOn"]= "integer";
  tbls["MonthOn"]= "integer";
  tbls["YearOn"]= "integer";
  tbls["Description"]= "text";
  tbls["Amount"]= "float";
  tbls["FromAccount"]= "text";
  tbls["ToAccount"]= "text";
  CreateTable("Payments" , tbls, "Id" , "Id");
  CreateTableIndexes("Payments" , "DayOn,MonthOn,YearOn,Amount,FromAccount,ToAccount");
}

function AddPayment(sDayOn,sMonthOn,sYearOn,sDescription,sAmount,sfromaccount,stoaccount) {
  sDayOn = _jsCint(sDayOn);
  sMonthOn = _jsCint(sMonthOn);
  sYearOn = _jsCint(sYearOn);
  sAmount = parseFloat(sAmount);
  sAmount = Round(sAmount,2);
  sDescription = InSingleQuote(sDescription);
  sfromaccount = InSingleQuote(sfromaccount);
  stoaccount= InSingleQuote(stoaccount);
 var  dbRecord;
  dbRecord = new Object();
  dbRecord["DayOn"]= sDayOn;
  dbRecord["MonthOn"]= sMonthOn;
  dbRecord["YearOn"]= sYearOn;
  dbRecord["Description"]= sDescription;
  dbRecord["Amount"]= sAmount;
  dbRecord["FromAccount"]= sfromaccount;
  dbRecord["ToAccount"]= stoaccount;
  InsertRecord("Payments" , dbRecord);
}

function DemoPayments() {
 // january payments
  AddPayment(1,1,2013,"Salary Payment" ,8000, "Salary" , "Bank Account 1");
  AddPayment(2,1,2013,"Income" ,900,"Income 2" , "Bank Account 1");
  AddPayment(3,1,2013,"Salary Payment" ,800,"Income 3" , "Bank Account 1");
 // household payments
  AddPayment(4,1,2013,"bond" ,1400,"Bank Account 1" ,"H1 - Bond/Rent");
  AddPayment(5,1,2013,"electricity" ,150,"Bank Account 1" , "H1 - Electricity");
  AddPayment(6,1,2013,"garden" ,200, "Bank Account 1" , "H1 - Garden Maintenance");
  AddPayment(7,1,2013,"groceries" ,600, "Bank Account 1" , "H1 - Groceries");
 // transport payments
  AddPayment(8,1,2013,"car" ,2800, "Bank Account 1" , "C1 - Installment");
  AddPayment(9,1,2013,"car insurance" ,850, "Bank Account 1" , "C1 - Insurance");
  AddPayment(10,1,2013,"car" ,1200, "Bank Account 1" , "C1 - Fuel");
 // add investment
  AddPayment(11,1,2013,"investment" ,800, "Bank Account 1" , "Savings");
 // add credit card
  AddPayment(12,1,2013,"credit" ,450, "Bank Account 1" , "Credit Card");
 // comunication
  AddPayment(13,1,2013,"cellphone" ,500, "Bank Account 1" , "Cellphone 1");
 // pets
  AddPayment(14,1,2013,"pets" ,50, "Bank Account 1" , "Food");
 // february payments
  AddPayment(1,2,2013,"Salary Payment" ,7000, "Salary" , "Bank Account 1");
  AddPayment(2,2,2013,"Income" ,800,"Income 2" , "Bank Account 1");
  AddPayment(4,2,2013,"bond" ,1400,"Bank Account 1" ,"H1 - Bond/Rent");
  AddPayment(5,2,2013,"electricity" ,150,"Bank Account 1" , "H1 - Electricity");
  AddPayment(7,2,2013,"groceries" ,1000, "Bank Account 1" , "H1 - Groceries");
  AddPayment(5,2,2013,"water" ,50,"Bank Account 1" , "H1 - Water");
  AddPayment(8,2,2013,"car" ,2800, "Bank Account 1" , "C1 - Installment");
  AddPayment(9,2,2013,"car insurance" ,850, "Bank Account 1" , "C1 - Insurance");
  AddPayment(10,2,2013,"car" ,720, "Bank Account 1" , "C1 - Fuel");
  AddPayment(12,2,2013,"credit" ,450, "Bank Account 1" , "Credit Card");
  AddPayment(12,2,2013,"education" ,500, "Bank Account 1" , "Kid 1");
  AddPayment(13,2,2013,"eat out" ,300, "Bank Account 1" , "Restuarant");
  AddPayment(13,2,2013,"cellphone" ,500, "Bank Account 1" , "Cellphone 1");
  AddPayment(14,2,2013,"pets" ,50, "Bank Account 1" , "Food");
 // march payments
  AddPayment(1,3,2013,"Salary Payment" ,7000, "Salary" , "Bank Account 1");
  AddPayment(2,3,2013,"Income" ,800,"Income 2" , "Bank Account 1");
  AddPayment(4,3,2013,"bond" ,1400,"Bank Account 1" ,"H1 - Bond/Rent");
  AddPayment(5,3,2013,"electricity" ,150,"Bank Account 1" , "H1 - Electricity");
  AddPayment(7,3,2013,"groceries" ,500, "Bank Account 1" , "H1 - Groceries");
  AddPayment(5,3,2013,"water" ,50,"Bank Account 1" , "H1 - Water");
  AddPayment(8,3,2013,"car" ,2800, "Bank Account 1" , "C1 - Installment");
  AddPayment(9,3,2013,"car insurance" ,850, "Bank Account 1" , "C1 - Insurance");
  AddPayment(10,3,2013,"car" ,1200, "Bank Account 1" , "C1 - Fuel");
  AddPayment(12,3,2013,"credit" ,450, "Bank Account 1" , "Credit Card");
  AddPayment(12,3,2013,"education" ,1000, "Bank Account 1" , "Kid 1");
  AddPayment(13,3,2013,"cellphone" ,500, "Bank Account 1" , "Cellphone 1");
  AddPayment(14,3,2013,"pets" ,50, "Bank Account 1" , "Food");
 // april payments
  AddPayment(1,4,2013,"Salary Payment" ,7000, "Salary" , "Bank Account 1");
  AddPayment(2,4,2013,"Income" ,800,"Income 2" , "Bank Account 1");
  AddPayment(4,4,2013,"bond" ,1400,"Bank Account 1" ,"H1 - Bond/Rent");
  AddPayment(5,4,2013,"water" ,50,"Bank Account 1" , "H1 - Water");
  AddPayment(5,4,2013,"electricity" ,100,"Bank Account 1" , "H1 - Electricity");
  AddPayment(7,4,2013,"groceries" ,700, "Bank Account 1" , "H1 - Groceries");
  AddPayment(8,4,2013,"car" ,2800, "Bank Account 1" , "C1 - Installment");
  AddPayment(9,4,2013,"car insurance" ,850, "Bank Account 1" , "C1 - Insurance");
  AddPayment(10,4,2013,"car" ,800, "Bank Account 1" , "C1 - Fuel");
  AddPayment(12,4,2013,"credit" ,450, "Bank Account 1" , "Credit Card");
  AddPayment(12,4,2013,"education" ,500, "Bank Account 1" , "Kid 1");
  AddPayment(13,4,2013,"cellphone" ,500, "Bank Account 1" , "Cellphone 1");
  AddPayment(14,4,2013,"pets" ,0, "Bank Account 1" , "Food");
 // may payments
  AddPayment(1,5,2013,"Salary Payment" ,7000, "Salary" , "Bank Account 1");
  AddPayment(2,5,2013,"Income" ,800,"Income 2" , "Bank Account 1");
  AddPayment(4,5,2013,"bond" ,1400,"Bank Account 1" ,"H1 - Bond/Rent");
  AddPayment(5,5,2013,"water" ,0,"Bank Account 1" , "H1 - Water");
  AddPayment(5,5,2013,"electricity" ,150,"Bank Account 1" , "H1 - Electricity");
  AddPayment(7,5,2013,"groceries" ,600, "Bank Account 1" , "H1 - Groceries");
  AddPayment(8,5,2013,"car" ,2800, "Bank Account 1" , "C1 - Installment");
  AddPayment(9,5,2013,"car insurance" ,850, "Bank Account 1" , "C1 - Insurance");
  AddPayment(10,5,2013,"car" ,0, "Bank Account 1" , "C1 - Fuel");
  AddPayment(10,5,2013,"public transport" ,500, "Bank Account 1" , "C1 - Public Transport");
  AddPayment(12,5,2013,"credit" ,1200, "Bank Account 1" , "Credit Card");
  AddPayment(12,5,2013,"education" ,500, "Bank Account 1" , "Kid 1");
  AddPayment(13,5,2013,"cellphone" ,500, "Bank Account 1" , "Cellphone 1");
  AddPayment(14,5,2013,"pets" ,0, "Bank Account 1" , "Food");
 // june payments
  AddPayment(1,6,2013,"Salary Payment" ,7000, "Salary" , "Bank Account 1");
  AddPayment(2,6,2013,"Income" ,800,"Income 2" , "Bank Account 1");
  AddPayment(4,6,2013,"bond" ,1400,"Bank Account 1" ,"H1 - Bond/Rent");
  AddPayment(5,6,2013,"water" ,0,"Bank Account 1" , "H1 - Water");
  AddPayment(5,6,2013,"electricity" ,150,"Bank Account 1" , "H1 - Electricity");
  AddPayment(7,6,2013,"groceries" ,600, "Bank Account 1" , "H1 - Groceries");
  AddPayment(8,6,2013,"car" ,2800, "Bank Account 1" , "C1 - Installment");
  AddPayment(9,6,2013,"car insurance" ,850, "Bank Account 1" , "C1 - Insurance");
  AddPayment(10,6,2013,"car" ,0, "Bank Account 1" , "C1 - Fuel");
  AddPayment(10,6,2013,"public transport" ,500, "Bank Account 1" , "C1 - Public Transport");
  AddPayment(12,6,2013,"credit" ,0, "Bank Account 1" , "Credit Card");
  AddPayment(12,6,2013,"education" ,500, "Bank Account 1" , "Kid 1");
  AddPayment(13,6,2013,"cellphone" ,500, "Bank Account 1" , "Cellphone 1");
  AddPayment(14,6,2013,"pets" ,50, "Bank Account 1" , "Food");
 // july payments
  AddPayment(1,7,2013,"Salary Payment" ,7000, "Salary" , "Bank Account 1");
  AddPayment(2,7,2013,"Income" ,800,"Income 2" , "Bank Account 1");
  AddPayment(4,7,2013,"bond" ,1400,"Bank Account 1" ,"H1 - Bond/Rent");
  AddPayment(5,7,2013,"water" ,0,"Bank Account 1" , "H1 - Water");
  AddPayment(5,7,2013,"electricity" ,150,"Bank Account 1" , "H1 - Electricity");
  AddPayment(7,7,2013,"groceries" ,600, "Bank Account 1" , "H1 - Groceries");
  AddPayment(8,7,2013,"car" ,2800, "Bank Account 1" , "C1 - Installment");
  AddPayment(9,7,2013,"car insurance" ,850, "Bank Account 1" , "C1 - Insurance");
  AddPayment(10,7,2013,"car" ,0, "Bank Account 1" , "C1 - Fuel");
  AddPayment(10,7,2013,"public transport" ,500, "Bank Account 1" , "C1 - Public Transport");
  AddPayment(12,7,2013,"credit" ,0, "Bank Account 1" , "Credit Card");
  AddPayment(12,7,2013,"education" ,500, "Bank Account 1" , "Kid 1");
  AddPayment(13,7,2013,"cellphone" ,500, "Bank Account 1" , "Cellphone 1");
  AddPayment(14,7,2013,"pets" ,0, "Bank Account 1" , "Food");
 // august payments
  AddPayment(1,8,2013,"Salary Payment" ,7000, "Salary" , "Bank Account 1");
  AddPayment(2,8,2013,"Income" ,800,"Income 2" , "Bank Account 1");
  AddPayment(4,8,2013,"bond" ,1400,"Bank Account 1" ,"H1 - Bond/Rent");
  AddPayment(5,8,2013,"water" ,0,"Bank Account 1" , "H1 - Water");
  AddPayment(5,8,2013,"electricity" ,150,"Bank Account 1" , "H1 - Electricity");
  AddPayment(7,8,2013,"groceries" ,600, "Bank Account 1" , "H1 - Groceries");
  AddPayment(8,8,2013,"car" ,2800, "Bank Account 1" , "C1 - Installment");
  AddPayment(9,8,2013,"car insurance" ,850, "Bank Account 1" , "C1 - Insurance");
  AddPayment(10,8,2013,"car" ,0, "Bank Account 1" , "C1 - Fuel");
  AddPayment(10,8,2013,"public transport" ,500, "Bank Account 1" , "C1 - Public Transport");
  AddPayment(12,8,2013,"credit" ,0, "Bank Account 1" , "Credit Card");
  AddPayment(12,8,2013,"education" ,500, "Bank Account 1" , "Kid 1");
  AddPayment(13,8,2013,"cellphone" ,800, "Bank Account 1" , "Cellphone 1");
  AddPayment(14,8,2013,"pets" ,0, "Bank Account 1" , "Food");
 // september payments
  AddPayment(1,9,2013,"Salary Payment" ,7800, "Salary" , "Bank Account 1");
  AddPayment(2,9,2013,"Income" ,800,"Income 2" , "Bank Account 1");
  AddPayment(4,9,2013,"bond" ,1400,"Bank Account 1" ,"H1 - Bond/Rent");
  AddPayment(5,9,2013,"water" ,0,"Bank Account 1" , "H1 - Water");
  AddPayment(5,9,2013,"electricity" ,150,"Bank Account 1" , "H1 - Electricity");
  AddPayment(7,9,2013,"groceries" ,600, "Bank Account 1" , "H1 - Groceries");
  AddPayment(8,9,2013,"car" ,2800, "Bank Account 1" , "C1 - Installment");
  AddPayment(9,9,2013,"car insurance" ,850, "Bank Account 1" , "C1 - Insurance");
  AddPayment(10,9,2013,"car" ,0, "Bank Account 1" , "C1 - Fuel");
  AddPayment(10,9,2013,"public transport" ,500, "Bank Account 1" , "C1 - Public Transport");
  AddPayment(12,9,2013,"credit" ,0, "Bank Account 1" , "Credit Card");
  AddPayment(12,9,2013,"education" ,500, "Bank Account 1" , "Kid 1");
  AddPayment(13,9,2013,"cellphone" ,355, "Bank Account 1" , "Cellphone 1");
  AddPayment(14,9,2013,"pets" ,0, "Bank Account 1" , "Food");
 // october payments
  AddPayment(1,10,2013,"Salary Payment" ,7800, "Salary" , "Bank Account 1");
  AddPayment(2,10,2013,"Income" ,800,"Income 2" , "Bank Account 1");
  AddPayment(4,10,2013,"bond" ,1400,"Bank Account 1" ,"H1 - Bond/Rent");
  AddPayment(5,10,2013,"water" ,0,"Bank Account 1" , "H1 - Water");
  AddPayment(5,10,2013,"electricity" ,150,"Bank Account 1" , "H1 - Electricity");
  AddPayment(7,10,2013,"groceries" ,0, "Bank Account 1" , "H1 - Groceries");
  AddPayment(8,10,2013,"car" ,2800, "Bank Account 1" , "C1 - Installment");
  AddPayment(9,10,2013,"car insurance" ,400, "Bank Account 1" , "C1 - Insurance");
  AddPayment(10,10,2013,"car" ,0, "Bank Account 1" , "C1 - Fuel");
  AddPayment(10,10,2013,"public transport" ,500, "Bank Account 1" , "C1 - Public Transport");
  AddPayment(12,10,2013,"credit" ,0, "Bank Account 1" , "Credit Card");
  AddPayment(12,10,2013,"education" ,500, "Bank Account 1" , "Kid 1");
  AddPayment(13,10,2013,"cellphone" ,409, "Bank Account 1" , "Cellphone 1");
  AddPayment(14,10,2013,"pets" ,0, "Bank Account 1" , "Food");
 // november payments
  AddPayment(1,11,2013,"Salary Payment" ,7800, "Salary" , "Bank Account 1");
  AddPayment(2,11,2013,"Income" ,800,"Income 2" , "Bank Account 1");
  AddPayment(4,11,2013,"bond" ,1400,"Bank Account 1" ,"H1 - Bond/Rent");
  AddPayment(5,11,2013,"water" ,0,"Bank Account 1" , "H1 - Water");
  AddPayment(5,11,2013,"electricity" ,150,"Bank Account 1" , "H1 - Electricity");
  AddPayment(7,11,2013,"groceries" ,600, "Bank Account 1" , "H1 - Groceries");
  AddPayment(8,11,2013,"car" ,2800, "Bank Account 1" , "C1 - Installment");
  AddPayment(9,11,2013,"car insurance" ,850, "Bank Account 1" , "C1 - Insurance");
  AddPayment(10,11,2013,"car" ,0, "Bank Account 1" , "C1 - Fuel");
  AddPayment(10,11,2013,"public transport" ,500, "Bank Account 1" , "C1 - Public Transport");
  AddPayment(12,11,2013,"credit" ,0, "Bank Account 1" , "Credit Card");
  AddPayment(12,11,2013,"education" ,0, "Bank Account 1" , "Kid 1");
  AddPayment(13,11,2013,"cellphone" ,500, "Bank Account 1" , "Cellphone 1");
  AddPayment(14,11,2013,"pets" ,0, "Bank Account 1" , "Food");
 // december payments
  AddPayment(1,12,2013,"Salary Payment" ,7800, "Salary" , "Bank Account 1");
  AddPayment(2,12,2013,"Income" ,800,"Income 2" , "Bank Account 1");
  AddPayment(2,12,2013,"Income" ,3500,"Bonus" , "Bank Account 1");
  AddPayment(4,12,2013,"bond" ,1400,"Bank Account 1" ,"H1 - Bond/Rent");
  AddPayment(5,12,2013,"water" ,0,"Bank Account 1" , "H1 - Water");
  AddPayment(5,12,2013,"electricity" ,170,"Bank Account 1" , "H1 - Electricity");
  AddPayment(7,12,2013,"groceries" ,2000, "Bank Account 1" , "H1 - Groceries");
  AddPayment(8,12,2013,"car" ,2800, "Bank Account 1" , "C1 - Installment");
  AddPayment(9,12,2013,"car insurance" ,850, "Bank Account 1" , "C1 - Insurance");
  AddPayment(10,12,2013,"car" ,0, "Bank Account 1" , "C1 - Fuel");
  AddPayment(10,12,2013,"car hire" ,1800, "Bank Account 1" , "C1 - Car Hire");
  AddPayment(10,12,2013,"public transport" ,0, "Bank Account 1" , "C1 - Public Transport");
  AddPayment(10,12,2013,"restuarant" ,800, "Bank Account 1" , "Restuarant");
  AddPayment(12,12,2013,"credit" ,0, "Bank Account 1" , "Credit Card");
  AddPayment(12,12,2013,"education" ,0, "Bank Account 1" , "Kid 1");
  AddPayment(13,12,2013,"cellphone" ,1350, "Bank Account 1" , "Cellphone 1");
  AddPayment(14,12,2013,"pets" ,0, "Bank Account 1" , "Food");
  ResetAccounts();
  ResetMonthlySummary();
}

function NextPayment() { savethefunction_rvar="";
  localStorage.setItem("payment" ,"");
  localStorage.setItem("action" ,"newpayment");
  sqlList = [];
  sqlList[0] = ["SELECT MAX(Id) as MaxValue FROM [Payments];" , NextPaymentOk, NextPaymentError];
  Sql(dbObj, sqlList);
return savethefunction_rvar; }

function NextPayment1() { savethefunction_rvar="";
  sqlList = [];
  sqlList[0] = ["SELECT MAX(Id) as MaxValue FROM [Payments];" , NextPaymentOk1, NextPaymentError];
  Sql(dbObj, sqlList);
return savethefunction_rvar; }

function NextPaymentOk1(transaction, results) { savethefunction_rvar="";
  recid = results.rows.item(0)["MaxValue"];
  recid = recid + 1;
  isnew = True;
 var  saction1;
 saction1 = localStorage.getItem("action1");
  switch (True) {
  case ((saction1) == "duplicate"):
 // save using new details
    PSSave();
	break;
  case ((saction1) == "reverse"):
 // swap the accounts around
   var  sfromaccount, stoaccount, fpos, tpos;
    sfromaccount = localStorage.getItem("pay_fromaccount");
    stoaccount = localStorage.getItem("pay_toaccount");
    psFromAccount.setText(stoaccount);
    psToAccount.setText(sfromaccount);
    PSSave();
  }
return savethefunction_rvar; }

function NextPaymentOk(transaction, results) { savethefunction_rvar="";
  recid = results.rows.item(0)["MaxValue"];
  recid = recid + 1;
  isnew = True;
  ChangeForm(PaymentsSingle);

return savethefunction_rvar; }

function NextPaymentError(transaction, results) { savethefunction_rvar="";
  recid = -1;
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
return savethefunction_rvar; }

function Trial_CreateTable() {
 var  tbls;
  tbls = new Object();
  tbls["IMEI"]= "text";
  tbls["Runs"]= "integer";
  CreateTable("Trial" , tbls, "IMEI" , "");
  CreateTableIndexes("Trial" , "Runs");
}
window.addEventListener('load', function() {
  FinancialNeedsSelector.style.display = 'block';
  NSB.List_jqm_init('lstFinancialNeeds','Financial Needs - Percentage,Financial Needs - Amount',true,'100%',false);
  lstFinancialNeeds_ref = new iScroll('lstFinancialNeeds_scroller',{ bounce:true, zoom:false });
  lstFinancialNeeds.refresh=function(){if (typeof lstFinancialNeeds_ref!='undefined') setTimeout(NSB.refresh,100,lstFinancialNeeds_ref)};
  NSB.addProperties(lstFinancialNeeds, lstFinancialNeeds_scroller);

(function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('lstFinancialNeeds_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
  NSB.addProperties(finNeedsSelectorT);
  NSB.addDisableProperty(finNeedsSelectorT);


  if(typeof(finNeedsSelectorT.onclick)=='function'){
    if(typeof(finNeedsSelectorT_left)!='undefined') finNeedsSelectorT_left.onclick=function() {finNeedsSelectorT.onclick(finNeedsSelectorT_left.getAttribute('nsbvalue'))};
    if(typeof(finNeedsSelectorT_right)!='undefined') finNeedsSelectorT_right.onclick=function() {finNeedsSelectorT.onclick(finNeedsSelectorT_right.getAttribute('nsbvalue'))}};
  FinancialNeedsSelector.style.display = 'none';
}, false);
FinancialNeedsSelector.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(FinancialNeedsSelector);
lstFinancialNeeds.onclick = function(i) { savethefunction_rvar="";
  if(TypeName(i) == "object" )  { return savethefunction_rvar; }
 var  strItem;
  strItem = lstFinancialNeeds.getItem(i);
  switch (True) {
  case ((strItem) == "Financial Needs - Percentage"):
    ChangeForm(frmFinancialNeeds);
	break;
  case ((strItem) == "Financial Needs - Amount"):
    ChangeForm(frmFinancialNeedsA);
  }
return savethefunction_rvar; }

FinancialNeedsSelector.onshow = function() { savethefunction_rvar="";
  lstFinancialNeeds.Top = finNeedsSelectorT.Height;
  lstFinancialNeeds.Height = FinancialNeedsSelector.Height - lstFinancialNeeds.Height;
  lstFinancialNeeds.refresh();
return savethefunction_rvar; }

finNeedsSelectorT.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
    ChangeForm(WhatToDo);
  }
return savethefunction_rvar; }

window.addEventListener('load', function() {
  frmFinancialNeedsA.style.display = 'block';


  NSB.MultiInput_init('miFinancialNeedsA');

  NSB.addProperties(miFinancialNeedsA);
  NSB.addProperties(finneedsTitleA);
  NSB.addDisableProperty(finneedsTitleA);


  if(typeof(finneedsTitleA.onclick)=='function'){
    if(typeof(finneedsTitleA_left)!='undefined') finneedsTitleA_left.onclick=function() {finneedsTitleA.onclick(finneedsTitleA_left.getAttribute('nsbvalue'))};
    if(typeof(finneedsTitleA_right)!='undefined') finneedsTitleA_right.onclick=function() {finneedsTitleA.onclick(finneedsTitleA_right.getAttribute('nsbvalue'))}};
  if(typeof fnIncomeA==='undefined')fnIncomeA=document.getElementById('fnIncomeA')
  fnIncomeA.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnIncomeA, $('#fnIncomeA_wrapper > div')[0]);
  NSB.addDisableProperty(fnIncomeA)
  if(typeof fnHouseholdAA==='undefined')fnHouseholdAA=document.getElementById('fnHouseholdAA')
  fnHouseholdAA.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnHouseholdAA, $('#fnHouseholdAA_wrapper > div')[0]);
  NSB.addDisableProperty(fnHouseholdAA)
  if(typeof fnHouseHoldP==='undefined')fnHouseHoldP=document.getElementById('fnHouseHoldP')
  fnHouseHoldP.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnHouseHoldP, $('#fnHouseHoldP_wrapper > div')[0]);
  NSB.addDisableProperty(fnHouseHoldP)
  if(typeof fnTransportAA==='undefined')fnTransportAA=document.getElementById('fnTransportAA')
  fnTransportAA.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnTransportAA, $('#fnTransportAA_wrapper > div')[0]);
  NSB.addDisableProperty(fnTransportAA)
  if(typeof fnTransportP==='undefined')fnTransportP=document.getElementById('fnTransportP')
  fnTransportP.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnTransportP, $('#fnTransportP_wrapper > div')[0]);
  NSB.addDisableProperty(fnTransportP)
  if(typeof fnInvestmentsAA==='undefined')fnInvestmentsAA=document.getElementById('fnInvestmentsAA')
  fnInvestmentsAA.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnInvestmentsAA, $('#fnInvestmentsAA_wrapper > div')[0]);
  NSB.addDisableProperty(fnInvestmentsAA)
  if(typeof fnInvestmentsP==='undefined')fnInvestmentsP=document.getElementById('fnInvestmentsP')
  fnInvestmentsP.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnInvestmentsP, $('#fnInvestmentsP_wrapper > div')[0]);
  NSB.addDisableProperty(fnInvestmentsP)
  if(typeof fnLoansAA==='undefined')fnLoansAA=document.getElementById('fnLoansAA')
  fnLoansAA.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnLoansAA, $('#fnLoansAA_wrapper > div')[0]);
  NSB.addDisableProperty(fnLoansAA)
  if(typeof fnLoansP==='undefined')fnLoansP=document.getElementById('fnLoansP')
  fnLoansP.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnLoansP, $('#fnLoansP_wrapper > div')[0]);
  NSB.addDisableProperty(fnLoansP)
  if(typeof fnEducationAA==='undefined')fnEducationAA=document.getElementById('fnEducationAA')
  fnEducationAA.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnEducationAA, $('#fnEducationAA_wrapper > div')[0]);
  NSB.addDisableProperty(fnEducationAA)
  if(typeof fnEducationP==='undefined')fnEducationP=document.getElementById('fnEducationP')
  fnEducationP.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnEducationP, $('#fnEducationP_wrapper > div')[0]);
  NSB.addDisableProperty(fnEducationP)
  if(typeof fnEntertainmentAA==='undefined')fnEntertainmentAA=document.getElementById('fnEntertainmentAA')
  fnEntertainmentAA.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnEntertainmentAA, $('#fnEntertainmentAA_wrapper > div')[0]);
  NSB.addDisableProperty(fnEntertainmentAA)
  if(typeof fnEntertainmentP==='undefined')fnEntertainmentP=document.getElementById('fnEntertainmentP')
  fnEntertainmentP.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnEntertainmentP, $('#fnEntertainmentP_wrapper > div')[0]);
  NSB.addDisableProperty(fnEntertainmentP)
  if(typeof fnDonationAA==='undefined')fnDonationAA=document.getElementById('fnDonationAA')
  fnDonationAA.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnDonationAA, $('#fnDonationAA_wrapper > div')[0]);
  NSB.addDisableProperty(fnDonationAA)
  if(typeof fnDonationP==='undefined')fnDonationP=document.getElementById('fnDonationP')
  fnDonationP.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnDonationP, $('#fnDonationP_wrapper > div')[0]);
  NSB.addDisableProperty(fnDonationP)
  if(typeof fnSupportAA==='undefined')fnSupportAA=document.getElementById('fnSupportAA')
  fnSupportAA.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnSupportAA, $('#fnSupportAA_wrapper > div')[0]);
  NSB.addDisableProperty(fnSupportAA)
  if(typeof fnSupportP==='undefined')fnSupportP=document.getElementById('fnSupportP')
  fnSupportP.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnSupportP, $('#fnSupportP_wrapper > div')[0]);
  NSB.addDisableProperty(fnSupportP)
  if(typeof fnCommunicationAA==='undefined')fnCommunicationAA=document.getElementById('fnCommunicationAA')
  fnCommunicationAA.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnCommunicationAA, $('#fnCommunicationAA_wrapper > div')[0]);
  NSB.addDisableProperty(fnCommunicationAA)
  if(typeof fnCommunicationP==='undefined')fnCommunicationP=document.getElementById('fnCommunicationP')
  fnCommunicationP.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnCommunicationP, $('#fnCommunicationP_wrapper > div')[0]);
  NSB.addDisableProperty(fnCommunicationP)
  if(typeof fnAnimalsAA==='undefined')fnAnimalsAA=document.getElementById('fnAnimalsAA')
  fnAnimalsAA.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnAnimalsAA, $('#fnAnimalsAA_wrapper > div')[0]);
  NSB.addDisableProperty(fnAnimalsAA)
  if(typeof fnAnimalsP==='undefined')fnAnimalsP=document.getElementById('fnAnimalsP')
  fnAnimalsP.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnAnimalsP, $('#fnAnimalsP_wrapper > div')[0]);
  NSB.addDisableProperty(fnAnimalsP)
  if(typeof fnAvailableFundsAA==='undefined')fnAvailableFundsAA=document.getElementById('fnAvailableFundsAA')
  fnAvailableFundsAA.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnAvailableFundsAA, $('#fnAvailableFundsAA_wrapper > div')[0]);
  NSB.addDisableProperty(fnAvailableFundsAA)
  if(typeof fnAvailableFundsP==='undefined')fnAvailableFundsP=document.getElementById('fnAvailableFundsP')
  fnAvailableFundsP.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(fnAvailableFundsP, $('#fnAvailableFundsP_wrapper > div')[0]);
  NSB.addDisableProperty(fnAvailableFundsP)
  frmFinancialNeedsA.style.display = 'none';
}, false);
frmFinancialNeedsA.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmFinancialNeedsA);
finneedsTitleA.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
    ChangeForm(FinancialNeedsSelector);
	break;
  case ((choice) == "Calc"):
    FinancialNeedsCalculateA();
  }
return savethefunction_rvar; }

frmFinancialNeedsA.onshow = function() { savethefunction_rvar="";
  FinancialNeedsClearA();
return savethefunction_rvar; }

function FinancialNeedsCalculateA() {
 var  sincome;
 sincome = parseFloat(ProperAmount(fnIncomeA.value));
 var  shousehold;
 shousehold = parseFloat(ProperAmount(fnHouseholdAA.value));
 var  stransport;
 stransport = parseFloat(ProperAmount(fnTransportAA.value));
 var  sinvestments;
 sinvestments = parseFloat(ProperAmount(fnInvestmentsAA.value));
 var  sloans;
 sloans = parseFloat(ProperAmount(fnLoansAA.value));
 var  seducation;
 seducation = parseFloat(ProperAmount(fnEducationAA.value));
 var  sentertainment;
 sentertainment = parseFloat(ProperAmount(fnEntertainmentAA.value));
 var  sdonation;
 sdonation = parseFloat(ProperAmount(fnDonationAA.value));
 var  ssupport;
 ssupport = parseFloat(ProperAmount(fnSupportAA.value));
 var  scommunication;
 scommunication = parseFloat(ProperAmount(fnCommunicationAA.value));
 var  sanimals;
 sanimals = parseFloat(ProperAmount(fnAnimalsAA.value));
 var  stotal;
 stotal = 0;
 var  stotala;
 stotala = 0;
 var  savailable;
 savailable = 0;
 // check values
  if(parseFloat(sincome) == 0) {
    NSB.MsgBox("The income amount must be greater than zero!");
    fnIncomeA.focus();
     return;
  }
  stotala = parseFloat(shousehold) + parseFloat(stransport) + parseFloat(sinvestments) + parseFloat(sloans) + parseFloat(seducation);
  stotala = stotala + parseFloat(sentertainment) + parseFloat(sdonation) + parseFloat(ssupport) + parseFloat(scommunication) + parseFloat(sanimals);
  if(parseFloat(stotala) > parseFloat(sincome)) {
    NSB.MsgBox("The total amount for all the categories is more than income, please correct this!");
    fnIncomeA.focus();
  }
  savailable = parseFloat(sincome) - parseFloat(stotala);
  fnHouseHoldP.value = parseFloat(shousehold) / parseFloat(sincome);
  fnHouseHoldP.value = MakePercentage(fnHouseHoldP.value);
  fnTransportP.value = parseFloat(stransport) / parseFloat(sincome);
  fnTransportP.value = MakePercentage(fnTransportP.value);
  fnInvestmentsP.value = parseFloat(sinvestments) / parseFloat(sincome);
  fnInvestmentsP.value = MakePercentage(fnInvestmentsP.value);
  fnLoansP.value = parseFloat(sloans) / parseFloat(sincome);
  fnLoansP.value = MakePercentage(fnLoansP.value);
  fnEducationP.value = parseFloat(seducation) / parseFloat(sincome);
  fnEducationP.value = MakePercentage(fnEducationP.value);
  fnEntertainmentP.value = parseFloat(sentertainment) / parseFloat(sincome);
  fnEntertainmentP.value = MakePercentage(fnEntertainmentP.value);
  fnDonationP.value = parseFloat(sdonation) / parseFloat(sincome);
  fnDonationP.value = MakePercentage(fnDonationP.value);
  fnSupportP.value = parseFloat(ssupport) / parseFloat(sincome);
  fnSupportP.value = MakePercentage(fnSupportP.value);
  fnCommunicationP.value = parseFloat(scommunication) / parseFloat(sincome);
  fnCommunicationP.value = MakePercentage(fnCommunicationP.value);
  fnAnimalsP.value = parseFloat(sanimals) / parseFloat(sincome);
  fnAnimalsP.value = MakePercentage(fnAnimalsP.value);
  fnAvailableFundsP.value = parseFloat(savailable) / parseFloat(sincome);
  fnAvailableFundsP.value = MakePercentage(fnAvailableFundsP.value);
  fnAvailableFundsAA.value = savailable;
 // fix amounts
  fnIncomeA.value = MakeMoney(fnIncomeA.value);
  fnHouseholdAA.value = MakeMoney(fnHouseholdAA.value);
  fnTransportAA.value = MakeMoney(fnTransportAA.value);
  fnInvestmentsAA.value = MakeMoney(fnInvestmentsAA.value);
  fnLoansAA.value = MakeMoney(fnLoansAA.value);
  fnEducationAA.value = MakeMoney(fnEducationAA.value);
  fnEntertainmentAA.value = MakeMoney(fnEntertainmentAA.value);
  fnDonationAA.value = MakeMoney(fnDonationAA.value);
  fnSupportAA.value = MakeMoney(fnSupportAA.value);
  fnCommunicationAA.value = MakeMoney(fnCommunicationAA.value);
  fnAnimalsAA.value = MakeMoney(fnAnimalsAA.value);
  fnAvailableFundsAA.value = MakeMoney(fnAvailableFundsAA.value);
}

function FinancialNeedsClearA() {
  fnIncomeA.value = "0.00";
  fnHouseholdAA.value = "0.0";
  fnHouseHoldP.value = "0.00";
  fnTransportAA.value = "0.00";
  fnTransportP.value = "0.00";
  fnInvestmentsAA.value = "0.00";
  fnInvestmentsP.value = "0.00";
  fnLoansAA.value = "0.00";
  fnLoansP.value = "0.00";
  fnEducationAA.value = "0.00";
  fnEducationP.value = "0.00";
  fnEntertainmentAA.value = "0.00";
  fnEntertainmentP.value = "0.00";
  fnDonationAA.value = "0.00";
  fnDonationP.value = "0.00";
  fnSupportAA.value = "0.00";
  fnSupportP.value = "0.00";
  fnCommunicationAA.value = "0.00";
  fnCommunicationP.value = "0.00";
  fnAnimalsAA.value = "0.00";
  fnAnimalsP.value = "0.00";
  fnAvailableFundsAA.value = "0.00";
  fnAvailableFundsP.value = "0.00";
  fnIncomeA.focus();
}

window.addEventListener('load', function() {
  InvestPayOff.style.display = 'block';


  NSB.MultiInput_init('miInvestPay');

  NSB.addProperties(miInvestPay);
  NSB.addProperties(invpayTitle);
  NSB.addDisableProperty(invpayTitle);


  if(typeof(invpayTitle.onclick)=='function'){
    if(typeof(invpayTitle_left)!='undefined') invpayTitle_left.onclick=function() {invpayTitle.onclick(invpayTitle_left.getAttribute('nsbvalue'))};
    if(typeof(invpayTitle_right)!='undefined') invpayTitle_right.onclick=function() {invpayTitle.onclick(invpayTitle_right.getAttribute('nsbvalue'))}};


  NSB.MultiInput_init('invpayOutput');

  NSB.addProperties(invpayOutput);
  InvestPayOff.style.display = 'none';
}, false);
InvestPayOff.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(InvestPayOff);
var  invStep;

invpayTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
    switch (True) {
    case ((invStep) == 2):
      ShowHideStep1(True);
      ShowHideStep2(False);
	break;
    default:
      ChangeForm(WhatToDo);
	break;
    }
	break;
  case ((choice) == "Next"):
    InvPayCalculate();
  }
return savethefunction_rvar; }

function ShowHideStep2(bOp) {
  if(bOp == True ) { invStep = 2; }
  invpayOutput.Top = 42;
  invpayOutput.Left = 0;
  invpayOutput.Visible = bOp;
}

function ShowHideStep1(bOp) {
  if(bOp == True ) { invStep = 1; }
  miInvestPay.Top = 42;
  miInvestPay.Left = 0;
  miInvestPay.Visible = bOp;
}

InvestPayOff.onshow = function() { savethefunction_rvar="";
  InvPayClear();
  ShowHideStep1(True);
  ShowHideStep2(False);
return savethefunction_rvar; }

function InvPayCalculate() {
 var  sloanamount;
 sloanamount = parseFloat(ProperAmount(miInvestPay.getValue(1)));
 var  sairloan;
 sairloan = _jsCint(miInvestPay.getValue(2));
 var  sairinvest;
 sairinvest = _jsCint(miInvestPay.getValue(3));
 var  staxoninterest;
 staxoninterest = _jsCint(miInvestPay.getValue(4));
 var  sloanyears;
 sloanyears = _jsCint(miInvestPay.getValue(5));
 var  speriodofinvest;
 speriodofinvest = _jsCint(miInvestPay.getValue(6));
 var  sextramonthlypayment;
 sextramonthlypayment = parseFloat(ProperAmount(miInvestPay.getValue(7)));
 var  smonthlyinvestamount;
 smonthlyinvestamount = sextramonthlypayment;
 var  sair;
 sair = sairloan;
 var  i5, i6, i7;
 var  d5,d6,d7,d8,d9,d10;
  d5 = parseFloat(sloanamount);
  d6 = parseFloat(sairloan) / 100;
  d7 = parseFloat(sairinvest) / 100;
  d8 = parseFloat(staxoninterest) / 100;
  d9 = _jsCint(sloanyears);
  d10 = parseFloat(sextramonthlypayment);
  i5 = parseFloat(smonthlyinvestamount);
  i6 = _jsCint(sair);
  i7 = _jsCint(speriodofinvest);

 // check values
  if(parseFloat(sloanamount) == 0) {
    NSB.MsgBox("The loan amount must be greater than zero!");
    miInvestPay.focus();
     return;
  }
  if(_jsCint(sairloan) == 0) {
    NSB.MsgBox("The annual interest rate for the loan must be greater than zero!");
    miInvestPay.focus();
     return;
  }
  if(_jsCint(sairinvest) == 0) {
    NSB.MsgBox("The annual interest rate for the investment must be greater than zero!");
    miInvestPay.focus();
     return;
  }
  if(_jsCint(sairinvest) == 0) {
    NSB.MsgBox("The annual interest rate for the investment must be greater than zero!");
    miInvestPay.focus();
     return;
  }
  if(_jsCint(sloanyears) == 0) {
    NSB.MsgBox("The term of the loan in years must be greater than zero!");
    miInvestPay.focus();
     return;
  }
  if(_jsCint(speriodofinvest) == 0) {
    NSB.MsgBox("The investment term in years must be greater than zero!");
    miInvestPay.focus();
     return;
  }
  if(parseFloat(sextramonthlypayment) == 0) {
    NSB.MsgBox("The extra monthly payments must be greater than zero!");
    miInvestPay.focus();
     return;
  }
 // perform calculations
 var  d14, d15, d16, d17, d18;
 var  e14, e15, e16, e17, e18;

  ShowHideStep1(False);
  ShowHideStep2(True);
}

function InvPayClear() {
  miInvestPay.setValue(1,"0.00");
  miInvestPay.setValue(2,"0");
  miInvestPay.setValue(3,"0");
  miInvestPay.setValue(4,"0");
  miInvestPay.setValue(5,"0");
  miInvestPay.setValue(6,"0");
  miInvestPay.setValue(7,"0.00");
  miInvestPay.focus();
}

window.addEventListener('load', function() {
  Budgets.style.display = 'block';
  NSB.addProperties(budgetsTitle);
  NSB.addDisableProperty(budgetsTitle);


  if(typeof(budgetsTitle.onclick)=='function'){
    if(typeof(budgetsTitle_left)!='undefined') budgetsTitle_left.onclick=function() {budgetsTitle.onclick(budgetsTitle_left.getAttribute('nsbvalue'))};
    if(typeof(budgetsTitle_right)!='undefined') budgetsTitle_right.onclick=function() {budgetsTitle.onclick(budgetsTitle_right.getAttribute('nsbvalue'))}};


  NSB.MultiInput_init('miBudgets1');

  NSB.addProperties(miBudgets1);


  NSB.MultiInput_init('miBudgets2');

  NSB.addProperties(miBudgets2);


  NSB.MultiInput_init('budgetsInput');

  NSB.addProperties(budgetsInput);


  NSB.MultiInput_init('MultiInput3');

  NSB.addProperties(MultiInput3);
  if(typeof txtBudgetYear==='undefined')txtBudgetYear=document.getElementById('txtBudgetYear')
  txtBudgetYear.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(txtBudgetYear, $('#txtBudgetYear_wrapper > div')[0]);
  NSB.addDisableProperty(txtBudgetYear)
  delete cboBudgetAccount.childNodes[0];
  NSB.ComboBox_init('cboBudgetAccount');
  NSB.addProperties(cboBudgetAccount);
  Budgets.style.display = 'none';
}, false);
Budgets.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Budgets);

budgetsTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
    ChangeForm(MyAccounts);
	break;
  case ((choice) == "Next"):
  }
return savethefunction_rvar; }

Budgets.onshow = function() { savethefunction_rvar="";

return savethefunction_rvar; }

var  cmSource,cmDataAdapter,catKey;
var  catYear,catName, acctFrom;
var  payYear, isDemo;
var  payMonth,payBy,chartPer, payAccount;
var  dailyPayments, dbExport, dbJSON, dbImport;

function Main() {
  NSB.MsgBoxStyle="";
  sqlList = [];
}

function ResetData(result) { savethefunction_rvar="";
  if(result != 6 )  { return savethefunction_rvar; }
  document.body.style.cursor = 'wait';
  isDemo = False;
  Main();
  DeleteRecords("Payments");
  ResetAccounts();
  ResetMonthlySummary();
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function CreateTables() { savethefunction_rvar="";
  Accounts_CreateTable();
  AccountsMovement_CreateTable();
  Categories_CreateTable();
  CategoryMovement_CreateTable();
  CostMeasurements_CreateTable();
  Institutions_CreateTable();
  Payments_CreateTable();
  Trial_CreateTable();
  Users_CreateTable();
return savethefunction_rvar; }

function demoComplete() { savethefunction_rvar="";
  NSB.ShowProgress(False);
  WaitCursor(False);
  ChangeForm(WhatToDo);
return savethefunction_rvar; }

function SetDemo(result) { savethefunction_rvar="";
  if(result != 6 )  { return savethefunction_rvar; }
  document.body.style.cursor = 'wait';
  isDemo = True;
  dbObj = SqlOpenDatabase(dbName);
  if(dbObj == 0) {
    NSB.MsgBox("Error opening demo db");
  }
 //Dim filename
 //filename= "demo.txt"
 //dbJSON=ReadFile(filename)
 //Normally, a sucessful read has a status of 200. Some versions of iOS return 0.
 //If req.status=200 Or req.status=0 Then
 //  dbJSON = Trim(req.responseText)
 //  NSB.ShowProgress("Working on it...")
 //  ' start the process
 //  dbImport=JSON.parse(dbJSON)
 //  SQLImport(dbImport, dbObj, demoComplete) Else
 //  NSB.MsgBox "Error reading demo db"
 //  Exit Function
 //End If

  NSB.ShowProgress("Demo mode...");
  DeleteTable("Accounts");
  DeleteTable("Accounts_Movement");
  DeleteTable("Categories");
  DeleteTable("Category_Movement");
  DeleteTable("Cost_Measurements");
  DeleteTable("Institutions");
  DeleteTable("Payments");
  DeleteTable("Users");
  CreateTables();

 // add new categories
  AddCategories("Bank Accounts,Income,Household,Transport,Investments,Loans/Credit,Education,Entertainment,Donations,Support,Communication,Animals/Pets");
 // add accounts, incomes
  AddAccount("0" ,"Salary" ,"Income" ,"" ,"0" ,"No" ,"Incomes" ,"0" ,"0");
  AddAccount("0" ,"Income 2" ,"Income" ,"" ,"0" ,"No" ,"Incomes" ,"0" ,"0");
  AddAccount("0" ,"Income 3" ,"Income" ,"" ,"0" ,"No" ,"Incomes" ,"0" ,"0");
  AddAccount("0" ,"Bonus" ,"Income" ,"" ,"0" ,"No" ,"Incomes" ,"0" ,"0");
 // household
  AddAccount("House 1" ,"H1 - Bond/Rent" ,"Household" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("House 1" ,"H1 - Levies" ,"Household" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("House 1" ,"H1 - Water" ,"Household" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("House 1" ,"H1 - Electricity" ,"Household" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("House 1" ,"H1 - Gas" ,"Household" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("House 1" ,"H1 - Garden Maintenance" ,"Household" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("House 1" ,"H1 - Domestic Worker" ,"Household" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("House 1" ,"H1 - Groceries" ,"Household" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("House 1" ,"H1 - Laundry/Dry Clean" ,"Household" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("House 1" ,"H1 - House Maintenance" ,"Household" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("House 1" ,"H1 - Pool Maintenance" ,"Household" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("House 1" ,"H1 - Security" ,"Household" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("House 1" ,"H1 - Insurance" ,"Household" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("House 1" ,"H1 - Medication" ,"Household" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
 // transport
  AddAccount("Car 1" ,"C1 - Installment" ,"Transport" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("Car 1" ,"C1 - Insurance" ,"Transport" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("Car 1" ,"C1 - Maintenance/Service" ,"Transport" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("Car 1" ,"C1 - Fuel" ,"Transport" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("Car 1" ,"C1 - Traffic Fines" ,"Transport" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("Car 1" ,"C1 - Public Transport" ,"Transport" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("Car 1" ,"C1 - Lift Club" ,"Transport" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("Car 1" ,"C1 - Car Hire" ,"Transport" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("Car 1" ,"C1 - Car Wash" ,"Transport" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
 // investment
  AddAccount("0" ,"Savings" ,"Investments" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Investment 2" ,"Investments" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Investment 3" ,"Investments" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Investment 4" ,"Investments" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Unit Trusts" ,"Investments" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Shares" ,"Investments" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Bank Account 1" ,"Bank Accounts" ,"" ,"0" ,"Yes" ,"Assets" ,"0" ,"0");
  localStorage.setItem("payfrom" , "Bank Account 1");
  AddAccount("0" ,"Bank Account 2" ,"Bank Accounts" ,"" ,"0" ,"No" ,"Liabilities" ,"0" ,"0");
  AddAccount("0" ,"House 1" ,"Investments" ,"" ,"0" ,"No" ,"Assets" ,"0" ,"0");
  AddAccount("0" ,"House 2" ,"Investments" ,"" ,"0" ,"No" ,"Liabilities" ,"0" ,"0");
  AddAccount("0" ,"Car 1" ,"Investments" ,"" ,"0" ,"No" ,"Assets" ,"0" ,"0");
  AddAccount("0" ,"Car 2" ,"Investments" ,"" ,"0" ,"No" ,"Liabilities" ,"0" ,"0");
 // loans/credit
  AddAccount("0" ,"Credit Card" ,"Loans/Credit" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Loan 2" ,"Loans/Credit" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Loan 3" ,"Loans/Credit" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Loan 4" ,"Loans/Credit" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Loan 5" ,"Loans/Credit" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
 // education
  AddAccount("0" ,"Kid 1" ,"Education" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Kid 2" ,"Education" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Kid 3" ,"Education" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Kid 4" ,"Education" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Kid 5" ,"Education" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Self" ,"Education" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
 //Entertainment
  AddAccount("0" ,"Restuarant" ,"Entertainment" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Pocket Money" ,"Entertainment" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Clothes" ,"Entertainment" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Clubbing" ,"Entertainment" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Sport" ,"Entertainment" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Gymn" ,"Entertainment" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Vacation" ,"Entertainment" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Dstv/Cable" ,"Entertainment" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Television" ,"Entertainment" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Movies/Theatre" ,"Entertainment" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Magazines" ,"Entertainment" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Newspapers" ,"Entertainment" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Books" ,"Entertainment" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Drugs" ,"Entertainment" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Alcohol" ,"Entertainment" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Adultainment" ,"Entertainment" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
 // donations
  AddAccount("0" ,"Donation 1" ,"Donations" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Donation 2" ,"Donations" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Gifts" ,"Donations" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
 // add support
  AddAccount("0" ,"Support 1" ,"Support" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Support 2" ,"Support" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Parents" ,"Support" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
 // communication
  AddAccount("0" ,"Cellphone 1" ,"Communication" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Cellphone 2" ,"Communication" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Internet" ,"Communication" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Fax 1" ,"Communication" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Fax 2" ,"Communication" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Landline 1" ,"Communication" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Landline 2" ,"Communication" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Paper" ,"Communication" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Ink" ,"Communication" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Fax Machine" ,"Communication" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Printer" ,"Communication" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Computer" ,"Communication" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Laptop" ,"Communication" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Tablet" ,"Communication" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
 // animals & pets
  AddAccount("0" ,"Food" ,"Animals/Pets" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Vet" ,"Animals/Pets" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
  AddAccount("0" ,"Pet 1" ,"Animals/Pets" ,"" ,"0" ,"No" ,"Expenses" ,"0" ,"0");
 // add institutions
  AddInstitution("First National Bank");
  AddInstitution("Standard Bank");
  AddInstitution("Absa Bank");
  AddInstitution("Nedbank");
  AddInstitution("Capitec Bank");
  AddInstitution("African Bank");
  AddInstitution("MEEG Bank");
  AddInstitution("Rennies Bank");
  AddInstitution("Wesbank");
  DemoPayments();
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }
var  dbName;
var  dbObj;
var  catFrom, sqlList,rCnt,query, recid, isnew;
var DB_REAL = "REAL";
var DB_INTEGER = "INTEGER";
var DB_BLOB = "BLOB";
var DB_TEXT = "TEXT";
var DB_FLOAT = "FLOAT";
var DB_NUMERIC = "NUMERIC";
var VM = Chr(253);
var FM = Chr(254);
var Quote = Chr(34);
var DQuote = Chr(34)  +  Chr(34);
var  InsertCommands, UpdateCommands, dbExport, dbJSON, dbImport;

function InDoubleQuotes(svalue) { savethefunction_rvar="";
  svalue = Quote  +  svalue  +  Quote;
  return svalue;
return savethefunction_rvar; }

function TableDistinctList(sourceTable,sourceField) { savethefunction_rvar="";
  localStorage.setItem("distinct" ,sourceField);
 var  cboList;
 cboList = [];
  query = "SELECT ["  +  sourceField  +  "]  FROM ["  +  sourceTable  +  "] ORDER BY ["  +  sourceField  +  "];";
  cboList[0] = [query, TableDistinctList1];
  Sql(dbObj, cboList);
return savethefunction_rvar; }

function TableDistinctList1(transaction, results) { savethefunction_rvar="";
 var  row, i, sdistinct, svalue, svalues;
  sdistinct = localStorage.getItem("distinct");
  svalues = "";
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    svalue = row[sdistinct];
    svalues = svalues  +  svalue  +  FM;
  }
  svalues = RemoveDelim(svalues,FM);
  localStorage.setItem("distinct_"  +  sdistinct,svalues);
return savethefunction_rvar; }

function ComboBoxDef() { savethefunction_rvar="";
 var  strDef;
  strDef = "<html><Select style="  +  DQuote;
  strDef = strDef  +  " name="  +  DQuote;
  strDef = strDef  +  " data-role="  +  InDoubleQuotes("none")  +  ">";
  strDef = strDef  +  "<Option value="  +  DQuote  +  "></Option></Select>";
  strDef = strDef  +  "<span Class="  +  InDoubleQuotes("arrow")  +  "></span></html>";
  return strDef;
return savethefunction_rvar; }

function NumericOnly(svalue) { savethefunction_rvar="";
 var  sout, lenvalue, i, spart;
  sout = "";
  lenvalue = Len(svalue);
  for   (i = 1; i  <= lenvalue; i ++) {
    spart = Mid(svalue,i,1);
    switch (True) {
    case ((spart) == "1"):
 sout = sout  +  spart;
	break;
    case ((spart) == "2"):
 sout = sout  +  spart;
	break;
    case ((spart) == "3"):
 sout = sout  +  spart;
	break;
    case ((spart) == "4"):
 sout = sout  +  spart;
	break;
    case ((spart) == "5"):
 sout = sout  +  spart;
	break;
    case ((spart) == "6"):
 sout = sout  +  spart;
	break;
    case ((spart) == "7"):
 sout = sout  +  spart;
	break;
    case ((spart) == "8"):
 sout = sout  +  spart;
	break;
    case ((spart) == "9"):
 sout = sout  +  spart;
	break;
    case ((spart) == "0"):
 sout = sout  +  spart;
	break;
    case ((spart) == "-"):
 sout = sout  +  spart;
    }
  }
  return sout;
return savethefunction_rvar; }

function FixMonths(smonths) { savethefunction_rvar="";
  smonths = CStr(smonths);
 var  lenx;
 lenx = Len(smonths);
  if(lenx == 1) {
    return smonths;
 } else {
   var  part1, part2;
    part1 = Left(smonths,1);
    part2 = Mid(smonths,2);
    smonths = part1  +  "."  +  part2;
    smonths = Round(smonths,0);
    return smonths;
  }
return savethefunction_rvar; }

function InitializeList(lstname,stritems,delim,bclear) {
 // clear the items in the list
 var  spitems, rscnt, rstot, stritem;
  if(bclear == True ) { lstname.deleteItem("all"); }
  spitems = Split(stritems,delim);
  rstot = spitems.length - 1;
  for   (rscnt = 0; rscnt  <= rstot; rscnt ++) {
    stritem = spitems[rscnt];
    lstname.addItem(stritem);
  }
  lstname.refresh();
}

function ListAddTextDescription(targetList,stext,sdescription) {
  stext = "<span class="  +  InDoubleQuotes("name")  +  ">"  +  stext  +  "</span><span class="  +  InDoubleQuotes("comment")  +  ">"  +  sdescription  +  "</span>";
  targetList.addItem(stext);
}

function ResizeHeaderList(form,header,child) {
  child.Left = 0;
  child.Top = header.Height;
  child.Height = form.Height - header.Height;
  child.refresh();
}

function RemoveDelim(strmv,delim) { savethefunction_rvar="";
 var  lendelim, rightpart, strout;
  lendelim = Len(delim);
  rightpart = Right(strmv,lendelim);
  strout = strmv;
  if(rightpart == delim) {
    strout = Left(strmv, Len(strmv) - lendelim);
  }
  return strout;
return savethefunction_rvar; }

function MvRemoteItem(strmv,sremove,delim) { savethefunction_rvar="";
  sremove = LCase(sremove);
 var  sout, lendelim;
 sout = "";
 var  spv;
 spv = Split(strmv,delim);
 var  stot, scnt, sitem;
  lendelim = Len(delim);
  stot = spv.length - 1;
  for   (scnt = 0; scnt  <= stot; scnt ++) {
    sitem = LCase(spv[scnt] );
    if(sitem != sremove ) { sout = sout  +  spv[scnt]  +  delim; }
  }
  sout = Left(sout, Len(sout) - lendelim);
  return sout;
return savethefunction_rvar; }

function MvSearch(searchvalues,strsearch,delim) { savethefunction_rvar="";
    if(Len(searchvalues)==0 ) { return -1; }
   var  spvalues, i, itot, ivalue;
    spvalues = Split(searchvalues,delim);
    strsearch = LCase(strsearch);
    itot = spvalues.length - 1;
    for   (i = 0; i  <= itot; i ++) {
      ivalue = spvalues[i];
      ivalue = LCase(ivalue);
      if(ivalue == strsearch ) { return i; }
    }
    return -1;
return savethefunction_rvar; }

function DbDateOut(sDate) { savethefunction_rvar="";
   var  xToday;
    xToday = CDate(sDate);
    xToday = FormatDateTime(xToday, "DD/MM/YYYY");
    return xToday;
return savethefunction_rvar; }

function DbDateOut1(sDate) { savethefunction_rvar="";
   var  xToday;
    xToday = CDate(sDate);
    xToday = FormatDateTime(xToday, "YYYYMMDD");
    return xToday;
return savethefunction_rvar; }

function ToDay() { savethefunction_rvar="";
  return FormatDateTime(dateadd("s",0,new Date()), "DD/MM/YYYY");
return savethefunction_rvar; }

function ToDay1() { savethefunction_rvar="";
  return FormatDateTime(dateadd("s",0,new Date()), "YYYYMMDD");
return savethefunction_rvar; }

function MvField(svalue,iposition,delimiter) { savethefunction_rvar="";
 var  mvalues,tvalues,xvalue;
  mvalues = Split(svalue, delimiter);
  tvalues = mvalues.length - 1;
  iposition = iposition - 1;
  if(iposition <= -1) {
    xvalue = mvalues[tvalues];
    return xvalue;
  }
  if(iposition > tvalues) {
     return "";
  }
  xvalue = mvalues[iposition];
  return xvalue;
return savethefunction_rvar; }

function MvRest(svalue,iposition,delimiter) { savethefunction_rvar="";
 var  mvalues,tvalues,xvalue, x, y, resultx;
 var  lendelim;
  lendelim = Len(delimiter);
  mvalues = Split(svalue, delimiter);
  tvalues = mvalues.length - 1;
  iposition = iposition - 1;
  if(iposition <= -1) {
    xvalue = mvalues[tvalues];
    return xvalue;
  }

  if(iposition > tvalues) {
     return "";
  }

  resultx = "";
  x = iposition + 1;
  for   (y = x; y  <= tvalues; y ++) {
    xvalue = mvalues[y];
    resultx = resultx  +  xvalue  +  delimiter;
  }

  resultx = Left(resultx, Len(resultx) - lendelim);
  return resultx;
return savethefunction_rvar; }



function MakeMoney(svalue) { savethefunction_rvar="";
    svalue = ProperAmount(svalue);
    svalue = FormatNumber(svalue);
    return svalue;
return savethefunction_rvar; }



function ProperAmount(svalue) { savethefunction_rvar="";
    svalue = Replace(svalue,"," ,"");
    dpos = InStr(1,svalue,".");
    if(dpos == 0 ) { svalue = svalue  +  ".00"; }
    return svalue;
return savethefunction_rvar; }



function InSingleQuote(strV) { savethefunction_rvar="";
  return "'"  +  strV  +  "'";
}



function MonthNames(intM) { savethefunction_rvar="";
  return MonthName(intM,True);
return savethefunction_rvar; }

function MonthNumber(strM) { savethefunction_rvar="";
  strM = LCase(strM);
  switch (True) {
  case ((strM) == "jan"):
 return 1;
	break;
  case ((strM) == "feb"):
 return 2;
	break;
  case ((strM) == "mar"):
 return 3;
	break;
  case ((strM) == "apr"):
 return 4;
	break;
  case ((strM) == "may"):
 return 5;
	break;
  case ((strM) == "jun"):
 return 6;
	break;
  case ((strM) == "jul"):
 return 7;
	break;
  case ((strM) == "aug"):
 return 8;
	break;
  case ((strM) == "sep"):
 return 9;
	break;
  case ((strM) == "oct"):
 return 10;
	break;
  case ((strM) == "nov"):
 return 11;
	break;
  case ((strM) == "dec"):
 return 12;
  }
return savethefunction_rvar; }

function SetHeaderTitle(hdObj,hdTitle) {
 var  shd;
 shd = "#"  +  hdObj  +  " h1";
  $(shd).text(hdTitle);
}



 //"#FF0000"; red

 // set grid rowcol color

function GridRowColColour(grdName,rowPos,colPos,colour) {
  grdName.cell(rowPos,colPos).style.color = colour;
  grdName.refresh();
}

function GridRowColBackgroundColour(grdName,rowPos,colPos,colour) {
  grdName.cell(rowPos,colPos).style.backgroundColor = colour;
  grdName.refresh();
}




function GridRowColor(grdName,rowPos,colour) {
 var  grdCols, i;
  grdCols = grdName.getColCount();
  for   (i = 0; i  <= grdCols - 1; i ++) {
    grdName.cell(rowPos,i).style.color = color;
  }
  grdName.refresh();
}



 // center align records in a grid

function GridCenterAlign(grdName,startCol,endCol) {
   var  grdRows, i;
    grdRows = grdName.getRowCount();
    for   (i = 1; i  <= grdRows - 1; i ++) {
      for   (col = startCol; col  <= endCol; col ++) {
        grdName.cell(i,col).style.textAlign = "center";
      }
    }
    grdName.refresh();
}



 // right align columns in a grid

function GridRightAlign(grdName,startCol,endCol) {
   var  grdRows, i;
    grdRows = grdName.getRowCount();
    for   (i = 1; i  <= grdRows - 1; i ++) {
      for   (col = startCol; col  <= endCol; col ++) {
        grdName.cell(i,col).style.textAlign = "right";
      }
    }
    grdName.refresh();
}



 // set the heigh of a grid row

function GridSetHeight(grdName,grdRowHeight) {
 var  grdRows, i;
  grdRows = grdName.getRowCount();
  for   (i = 1; i  <= grdRows - 1; i ++) {
    grdName.setRowHeight(i, grdRowHeight);
  }
  grdName.refresh();
}



function GridBoldRow(grdName,rowPos) {
 var  grdCols, i;
  grdCols = grdName.getColCount();
  for   (i = 0; i  <= grdCols - 1; i ++) {
    grdName.cell(rowPos,i).style.fontWeight = "bold";
  }
  grdName.refresh();
}



 // draw alternate colors in the grid

function GridAlternateColor(grdName) {
 //Paints Each row in alernating color.
 var  grdRows, grdCols, i;
  grdRows = grdName.getRowCount();
  grdCols = grdName.getColCount();
  for   (i = 1; i  <= grdRows - 1; i ++) {
    for   (col = 0; col  <= grdCols - 1; col ++) {
      if((Math.abs(i) % 2) == 1) {
        grdName.cell(i,col).style.backgroundColor = RGB(255,255,240);
 } else {
        grdName.cell(i,col).style.backgroundColor = RGB(240,248,255);
      }
    }
  }
  grdName.refresh();
}



 // used to insert an object() record to the database

function InsertRecord(tblName,tblRecord) { savethefunction_rvar="";
 var  sqlInst;
  sqlInst = [];
 var  flds, vals;
  flds = "";
  vals = "";
  for (item in tblRecord) {
    flds = flds  +  "["  +  item  +  "],";
    vals = vals  +  tblRecord[item]  +  ",";
  }
  flds = Left(flds, Len(flds) - 1);
  vals = Left(vals, Len(vals) - 1);
  sqlInst[0] = "INSERT OR REPLACE INTO ["  +  tblName  +  "] ("  +  flds  +  ") VALUES ("  +  vals  +  ");";
  Sql(dbObj, sqlInst);
return savethefunction_rvar; }



 // used to insert an object() record to the database

function InsertRecord1(tblName,tblRecord,position) { savethefunction_rvar="";
 var  flds, vals;
  flds = "";
  vals = "";
  for (item in tblRecord) {
    flds = flds  +  "["  +  item  +  "],";
    vals = vals  +  tblRecord[item]  +  ",";
  }
  flds = Left(flds, Len(flds) - 1);
  vals = Left(vals, Len(vals) - 1);
  InsertCommands[position] = "INSERT OR REPLACE INTO ["  +  tblName  +  "] ("  +  flds  +  ") VALUES ("  +  vals  +  ");";
return savethefunction_rvar; }



function CreateTable(TableName, FieldsAndTypes, PrimaryKey, AutoIncrement) { savethefunction_rvar="";
 var  sb, fdef, sqlCreate;
  sb = "(";
  for (item in FieldsAndTypes) {
    fdef = "["  +  item  +  "] "  +  UCase(FieldsAndTypes[item]);
    sb = sb  +  fdef;
    if(item == PrimaryKey ) { sb = sb  +  " NOT NULL PRIMARY KEY"; }
    if(item == AutoIncrement ) { sb = sb  +  " AUTOINCREMENT"; }
    sb = sb  +  ", ";
  }
  sb = Left(sb, Len(sb) - 2);
  sb = sb  +  ")";
  sb = "CREATE TABLE IF NOT EXISTS ["  +  TableName  +  "] "  +  sb  +  ";";
 //console.log(sb)
  sqlCreate = [];
  sqlCreate[0] = sb;
  Sql(dbObj, sqlCreate);
}

function DeleteIndex(TableName, idxname) { savethefunction_rvar="";
 var  idxkey, sb, delidx;
  idxkey = TableName  +  "_"  +  idxname;
  delidx = [];
  delidx[0] = "DROP INDEX IF EXISTS "  +  idxkey  +  ";";
  delidx[1] = "DROP INDEX IF EXISTS "  +  idxname  +  ";";
  Sql(dbObj, delidx);
return savethefunction_rvar; }


function CreateTableIndexes(TableName, Indexes) { savethefunction_rvar="";
 var  sb, idef, sqlCreateIdx, idxname;
 var  spidx, idxtot, idxcnt, idx;
  spidx = Split(Indexes,",");
  idxtot = spidx.length - 1;
  sqlCreateIdx = [];
  for   (idxcnt = 0; idxcnt  <= idxtot; idxcnt ++) {
    idx = spidx[idxcnt];
    idxname = TableName  +  "_"  +  idx;
    idef = "CREATE INDEX IF NOT EXISTS ["  +  idxname  +  "] ON ["  +  TableName  +  "] (["  +  idx  +  "]);";
 //console.log(idef)
    sqlCreateIdx[idxcnt] = idef;
  }
  Sql(dbObj, sqlCreateIdx);
return savethefunction_rvar; }



function ResetInsertCommands() { savethefunction_rvar="";
    InsertCommands = [];
return savethefunction_rvar; }



function ExecuteInsertCommands() { savethefunction_rvar="";
  Sql(dbObj, InsertCommands);
return savethefunction_rvar; }



function ExecuteUpdateCommands() { savethefunction_rvar="";
  Sql(dbObj,UpdateCommands);
return savethefunction_rvar; }



function MvSum(strvalues,delim) { savethefunction_rvar="";
 var  dtot, i;
 dtot = 0;
 var  spvalues;
 spvalues = Split(strvalues,delim);
 var  dlen;
 dlen = spvalues.length - 1;
  for   (i = 0; i  <= dlen; i ++) {
    dtot = parseFloat(dtot) + parseFloat(spvalues[i] );
  }
  dtot = Round(dtot,2);
  return dtot;
return savethefunction_rvar; }



function DeleteTable(tblName) { savethefunction_rvar="";
 var  sqlD;
  sqlD = [];
  sqlD[0]=["DROP TABLE IF EXISTS ["  +  tblName  +  "];"];
  Sql(dbObj, sqlD);
return savethefunction_rvar; }





 // used to update an object() record to the database

 // using another object() for the where clause

function UpdateRecord(tblName,tblRecord,tblWhere) { savethefunction_rvar="";
 var  sqlUpd;
  sqlUpd = [];
 var  vals, wvals;
  vals = "";
  wvals = "";
  for (item in tblRecord) {
    vals = vals  +  "["  +  item  +  "] = "  +  tblRecord[item]  +  ",";
  }
  vals = Left(vals, Len(vals) - 1);
  for (item in tblWhere) {
    wvals = wvals  +  "["  +  item  +  "] = "  +  tblWhere[item]  +  ",";
  }
  wvals = Left(wvals, Len(wvals) - 1);
  sqlUpd[0] = "UPDATE ["  +  tblName  +  "] SET "  +  vals  +  " WHERE "  +  wvals  +  ";";
  Sql(dbObj, sqlUpd);
return savethefunction_rvar; }



 // update all records of the table

function UpdateRecords(tblName,tblRecord) { savethefunction_rvar="";
 var  sqlUpd,vals;
  sqlUpd = [];
  vals = "";
  for (item in tblRecord) {
    vals = vals  +  "["  +  item  +  "] = "  +  tblRecord[item]  +  ",";
  }
  vals = Left(vals, Len(vals) - 1);
  sqlUpd[0] = "UPDATE ["  +  tblName  +  "] SET "  +  vals  +  ";";
  Sql(dbObj, sqlUpd);
return savethefunction_rvar; }



 // used to delete an object() record from the database

 // using another object() for the where clause

function DeleteRecord(tblName,tblWhere) { savethefunction_rvar="";
 var  sqlUpd;
  sqlUpd = [];
 var  wvals;
  wvals = "";
  for (item in tblWhere) {
    wvals = wvals  +  "["  +  item  +  "] = "  +  tblWhere[item]  +  ",";
  }
  wvals = Left(wvals, Len(wvals) - 1);
  sqlUpd[0] = "DELETE FROM ["  +  tblName  +  "] WHERE "  +  wvals  +  ";";
  Sql(dbObj, sqlUpd);
return savethefunction_rvar; }



function DeleteRecords(tblName) { savethefunction_rvar="";
 var  sqlDel;
  sqlDel = [];
  sqlDel[0] = "DELETE FROM ["  +  tblName  +  "];";
  Sql(dbObj, sqlDel);
return savethefunction_rvar; }



 // used to update an object() record to the database

 // using another object() for the where clause

function UpdateRecord1(tblName,tblRecord,tblWhere,position) { savethefunction_rvar="";
 var  vals, wvals;
  vals = "";
  wvals = "";
  for (item in tblRecord) {
    vals = vals  +  "["  +  item  +  "] = "  +  tblRecord[item]  +  ",";
  }
  vals = Left(vals, Len(vals) - 1);
  for (item in tblWhere) {
    wvals = wvals  +  "["  +  item  +  "] = "  +  tblWhere[item]  +  ",";
  }
  wvals = Left(wvals, Len(wvals) - 1);
  UpdateCommands[position] = "UPDATE ["  +  tblName  +  "] SET "  +  vals  +  " WHERE "  +  wvals  +  ";";
return savethefunction_rvar; }



function ComboIndexOf(cboBox,cboSearch) { savethefunction_rvar="";
   var  cboOut;
 cboOut = -1;
 //cboSearch = LCase(cboSearch)
   var  cboTot;
 cboTot = cboBox.getItemCount();
   var  xitem, i;
    for   (i = 0; i  <= cboTot - 1; i ++) {
      xitem = cboBox.List(i);
 //xItem = LCase(xItem)
      if(xitem == cboSearch ) { return i; }
    }
    return cboOut;
return savethefunction_rvar; }



function GridDefault(grdName) { savethefunction_rvar="";
  GridSetHeight(grdName,"32px");
  GridAlternateColor(grdName);
return savethefunction_rvar; }



function GridAddRow(grdName,colValues,delim,rowPos) { savethefunction_rvar="";
 var  vTot, spvalues, i;
  spvalues = Split(colValues,delim);
  vTot = spvalues.length;
  grdName.addRows(1);
  for   (i = 0; i  <= vTot - 1; i ++) {
    grdName.setValue(rowPos,i,spvalues[i] );
  }
return savethefunction_rvar; }



function GridAddNextRow(grdName,colValues,delim) { savethefunction_rvar="";
 var  vTot, rowPos, spvalues, i;
  rowPos = grdName.getRowCount();
  spvalues = Split(colValues,delim);
  vTot = spvalues.length;
  grdName.addRows(1);
  for   (i = 0; i  <= vTot - 1; i ++) {
    grdName.setValue(rowPos,i,spvalues[i] );
  }
return savethefunction_rvar; }



function GridAddImage(grdName,rowPos,colPos,imgName) { savethefunction_rvar="";
 var  imgID, imgDef;
  imgID = grdName  +  "_"  +  rowPos  +  "_"  +  colPos;
  imgDef= "<img width=25px height=25px style=cursor:pointer src='"  +  imgName  +  "' id='"  +  imgID  +  "'>";
  grdName.setValue(rowPos,colPos, imgDef);
return savethefunction_rvar; }

function GridAddTextImage(grdName,rowPos,colPos,text,img) { savethefunction_rvar="";
 var  imgDef, imgID;
  imgID = grdName  +  "_"  +  rowPos  +  "_"  +  colPos;
  imgDef= text  +  "<img src='"  +  img  +  "' align='right' id='"  +  imgID  +  "'>";
  grdName.setValue(rowPos,colPos,imgDef);
return savethefunction_rvar; }

function GridAddTextImageDefinition(grdName,rowPos,colPos,text,img) { savethefunction_rvar="";
 var  imgDef, imgID;
  imgID = grdName  +  "_"  +  rowPos  +  "_"  +  colPos;
  imgDef= text  +  "  <img width=20px height=20px src='"  +  img  +  "' align='right' id='"  +  imgID  +  "'>";
  return imgDef;
return savethefunction_rvar; }

function GridAddImageDefinition(grdName,rowPos,colPos,imgName) { savethefunction_rvar="";
 var  imgID, imgDef;
  imgID = grdName  +  "_"  +  rowPos  +  "_"  +  colPos;
  imgDef= "<img width=25px height=25px style=cursor:pointer src='"  +  imgName  +  "' id='"  +  imgID  +  "'>";
  return imgDef;
return savethefunction_rvar; }



function GridAddImageDefinitionAction(grdName,grdAction,grdId,imgName) { savethefunction_rvar="";
 var  imgID, imgDef;
  imgID = grdName  +  "_"  +  grdAction  +  "_"  +  grdId;
  imgDef= "<img width=25px height=25px style=cursor:pointer src='"  +  imgName  +  "' id='"  +  imgID  +  "'>";
  return imgDef;
return savethefunction_rvar; }



function GridAddImageDelete(grdName,rowPos,colPos) { savethefunction_rvar="";
    GridAddImage(grdName,rowPos,colPos,"delete.png");
return savethefunction_rvar; }



function GridAddImageEdit(grdName,rowPos,colPos) { savethefunction_rvar="";
    GridAddImage(grdName,rowPos,colPos,"edit.png");
return savethefunction_rvar; }



function GridAddImageChart(grdName,rowPos,colPos) { savethefunction_rvar="";
    GridAddImage(grdName,rowPos,colPos,"chart.png");
return savethefunction_rvar; }



function GridAddImageView(grdName,rowPos,colPos) { savethefunction_rvar="";
    GridAddImage(grdName,rowPos,colPos,"view.png");
return savethefunction_rvar; }



function GridAddImagePayTo(grdName,rowPos,colPos) { savethefunction_rvar="";
    GridAddImage(grdName,rowPos,colPos,"payto.png");
return savethefunction_rvar; }



function GridAddImageDrillDown(grdName,rowPos,colPos) { savethefunction_rvar="";
    GridAddImage(grdName,rowPos,colPos,"drill.png");
return savethefunction_rvar; }

function GridAddImageDuplicate(grdName,rowPos,colPos) { savethefunction_rvar="";
    GridAddImage(grdName,rowPos,colPos,"duplicate.png");
return savethefunction_rvar; }

function GridAddImageReverse(grdName,rowPos,colPos) { savethefunction_rvar="";
    GridAddImage(grdName,rowPos,colPos,"reverse.png");
return savethefunction_rvar; }


function email(t, subject, body) { savethefunction_rvar="";
  location="mailto:"  +  encodeURI(t)  +  "?subject="  +  encodeURI(subject)  +  "&body=" + encodeURI(body);
return savethefunction_rvar; }

function phone(tel) { savethefunction_rvar="";
  location="tel:"  +  tel;
return savethefunction_rvar; }

function skype(tel) { savethefunction_rvar="";
  location="skype:"  +  tel;
return savethefunction_rvar; }

function sms(tel, body) { savethefunction_rvar="";
  location="sms:"  +  tel  +  "?body="  +  encodeURL(body);
return savethefunction_rvar; }

function ReadTableRecord(stable,sprimarykey,svalue,sfields) { savethefunction_rvar="";
 var  skey;
 skey = stable  +  "*"  +  svalue;
  localStorage.setItem("read_table" , stable);
  localStorage.setItem("read_pk" , sprimarykey);
  localStorage.setItem("read_id" , svalue);
  localStorage.setItem("read_flds" , sfields);
  localStorage.setItem(skey,"");
  query = "select * from ["  +  stable  +  "] where ["  +  sprimarykey  +  "] = "  +  svalue  +  ";";
 //console.log(query)
 var  sqlRead;
 sqlRead = [];
  sqlRead[0] = [query, ReadTableRecordH, ReadRecordE];
  Sql(dbObj, sqlRead);
return savethefunction_rvar; }


function ReadTableRecordH(transaction, results) { savethefunction_rvar="";
 var  stable, spk, svalue, sfields, skey, spfields, ftot, row, rtot, fcnt, fstr, fvalue, sout;
  stable = localStorage.getItem("read_table");
  spk = localStorage.getItem("read_pk");
  svalue = localStorage.getItem("read_id");
  sfields = localStorage.getItem("read_flds");
  if(IsNull(stable)==True )  { return savethefunction_rvar; }
  if(IsNull(spk)==True )  { return savethefunction_rvar; }
  if(IsNull(svalue)==True )  { return savethefunction_rvar; }
  if(IsNull(sfields)==True )  { return savethefunction_rvar; }
  sout = "";
  skey = stable  +  "*"  +  svalue;
  rtot = results.rows.length - 1;
  if(_jsCint(rtot) == -1 )  { return savethefunction_rvar; }
  row = results.rows.item(0);
  spfields = Split(sfields,",");
  ftot = spfields.length - 1;
  for   (fcnt = 0; fcnt  <= ftot; fcnt ++) {
    fstr = spfields[fcnt];
    fvalue = row[fstr];
    if(IsNull(fvalue) == True ) { fvalue = ""; }
    sout = sout  +  fvalue  +  FM;
  }
  sout = RemoveDelim(sout,FM);
  localStorage.setItem(skey,sout);
 //console.log(sout)
return savethefunction_rvar; }

function ReadRecordE(transaction, results) { savethefunction_rvar="";
  currentRecord = null;
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
return savethefunction_rvar; }


function NextAvailableId(frmToShow) { savethefunction_rvar="";
 var  stable, sprimarykey, sqlList;
  localStorage.setItem("action" ,"new");
  localStorage.setItem("form" ,frmToShow);
  stable = localStorage.getItem("table");
  sprimarykey = localStorage.getItem("primarykey");
  sqlList = [];
  sqlList[0] = ["SELECT MAX("  +  sprimarykey  +  ") as MaxValue FROM ["  +  stable  +  "];" , NextAvailableIdH, NextAvailableIdE];
  Sql(dbObj, sqlList);
return savethefunction_rvar; }

function NextAvailableIdH(transaction, results) { savethefunction_rvar="";
 var  sid, sform;
  sform = localStorage.getItem("form");
  sid = results.rows.item(0)["MaxValue"];
  sid = _jsCint(sid) + 1;
  localStorage.setItem("id" , sid);
 //ChangeForm(sform)
return savethefunction_rvar; }

function NextAvailableIdE(transaction, results) { savethefunction_rvar="";
  localStorage.setItem("id" , "-1");
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
return savethefunction_rvar; }

function MapSum(mapobj,mapkey,mapitem) {
 var  xitem;
  xitem = mapobj[mapkey];
  if(IsNull(xitem) == True) {
    mapobj[mapkey]=mapitem;
 } else {
    xitem = parseFloat(xitem) + parseFloat(mapitem);
    mapobj[mapkey] = xitem;
  }
}

function MapUpdate(mapobj,mapkey,mapitem) {
 var  xitem;
  xitem = mapobj[mapkey];
  if(IsNull(xitem) == True) {
    mapobj[mapkey]=mapitem;
 } else {
    mapobj[mapkey] = mapitem;
  }
}

function MapSearch(mapobj,keySearch) { savethefunction_rvar="";
 var  xitem;
  xitem = mapobj[keySearch];
  if(IsNull(xitem) == True) {
    return True;
 } else {
    return False;
  }
return savethefunction_rvar; }

 //add a listview item with a title and description
function ListViewAddTitleDescription(lstView,Title,Description) { savethefunction_rvar="";
 var  stext;
 stext = "<h2>"  +  Title  +  "</h2><p>"  +  Description  +  "</p>";
  lstView.addItem(stext);
return savethefunction_rvar; }

 // add a listview item with a counter
function ListViewAddTitleCount(lstView,Title,Counted) { savethefunction_rvar="";
 var  stext;
 stext = Title  +  "<span class='ui-li-count'>"  +  Counted  +  "</span>";
  lstView.addItem(stext);
return savethefunction_rvar; }

 // add a listview item with aside content
function ListViewAddTitleAsideContent(lstView,Title,Content) { savethefunction_rvar="";
 var  stext;
 stext = Title  +  "<span class='ui-li-aside'><p>"  +  Content  +  "</p></span>";
  lstView.addItem(stext);
return savethefunction_rvar; }

function ListViewAddTextBoxWithLabel(lstView,id,caption) { savethefunction_rvar="";
 var  slabel;
 slabel = "<label for='"  +  id  +  "'>"  +  caption  +  "</label>";
 var  stext;
 stext = "<input type='text' name='"  +  id  +  "' id='"  +  id  +  "' value=''/>";
  lstView.addItem(slabel  +  stext);
return savethefunction_rvar; }

function ListViewAddTextBox(lstView,id,caption) { savethefunction_rvar="";
 var  stext;
 stext = "<input type='text' name='"  +  id  +  "' id='"  +  id  +  "' value=''/>";
  lstView.addItem(stext);
return savethefunction_rvar; }






window.addEventListener('load', function() {
  frmSignIn.style.display = 'block';
  NSB.addProperties(signInT);
  NSB.addDisableProperty(signInT);


  if(typeof(signInT.onclick)=='function'){
    if(typeof(signInT_left)!='undefined') signInT_left.onclick=function() {signInT.onclick(signInT_left.getAttribute('nsbvalue'))};
    if(typeof(signInT_right)!='undefined') signInT_right.onclick=function() {signInT.onclick(signInT_right.getAttribute('nsbvalue'))}};


  NSB.MultiInput_init('mSignIn');

  NSB.addProperties(mSignIn);
  frmSignIn.style.display = 'none';
}, false);
frmSignIn.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmSignIn);
var  susername, spassword;
signInT.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Sign In"):
    susername = mSignIn.getValue(1);
    susername = LCase(Trim(susername));
    if(Len(susername)== 0) {
      NSB.MsgBox("Please specify a user name!");
       return;
    }
    spassword = mSignIn.getValue(2);
    spassword = LCase(Trim(spassword));
    if(Len(susername)== 0) {
      NSB.MsgBox("Please specify a password!");
       return;
    }
 // if demo open the demo account
    if(spassword == "demo" && susername == "demo") {
 // open the demo database
      dbName = "demo.db";
      SetDemo(6);
      ChangeForm(WhatToDo);
       return;
 } else {
 // open the user database
      dbName = susername  +  ".db";
      dbObj = SqlOpenDatabase(dbName);
      if(dbObj == 0) {
        NSB.MsgBox("Error opening "  +  susername  +  " database!");
      }
    }

    NSB.ShowProgress("Working on it...");
    CreateTables();
    NSB.ShowProgress(False);
 // check the user credentials
   var  sqlList;
 sqlList = [];
    query = "SELECT * FROM Users WHERE UserName = '"  +  susername  +  "' and Password = '"  +  spassword  +  "';";
    sqlList[0] = [query, CheckUser, CheckUserError];
    Sql(dbObj, sqlList);
  }
return savethefunction_rvar; }

function CheckUser(transaction, results) { savethefunction_rvar="";
 var  row, i, sFullName, sEmailAddress;
 var  tusers;
  tusers = results.rows.length - 1;
  if(_jsCint(tusers) == -1) {
    NSB.MsgBox(RegisterAccount,"The account details you have specified cannot be found, would you like to register your account first?" , 4+32, "Confirm User");
  }else if (_jsCint(tusers) == 0 ) {
    row = results.rows.item(0);
    sFullName = row["FullName"];
    sEmailAddress = row["EmailAddress"];
    localStorage.setItem("email" ,sEmailAddress);
    localStorage.setItem("fullname" ,sFullName);
    ChangeForm(WhatToDo);
  }
return savethefunction_rvar; }

function RegisterAccount(result) {
  if(result != 6 )  { return; }
  NSB.ShowProgress("Working on it...");
 //dbExport = SQLExport(dbObj, dbName, backupComplete);
}

function CheckUserError(transaction, results) { savethefunction_rvar="";
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
return savethefunction_rvar; }

frmSignIn.onshow = function() { savethefunction_rvar="";
  mSignIn.setValue(1,"demo");
  mSignIn.setValue(2,"demo");
return savethefunction_rvar; }

function Users_CreateTable() {
 var  tblStructure;
  tblStructure = new Object();
  tblStructure["Id"]= "INTEGER";
  tblStructure["UserName"]= "TEXT";
  tblStructure["Password"]= "TEXT";
  tblStructure["LastName"]= "TEXT";
  tblStructure["FirstName"]= "TEXT";
  tblStructure["FullName"]= "TEXT";
  tblStructure["EmailAddress"]= "TEXT";
  tblStructure["DBase"]= "TEXT";
  CreateTable("Users" , tblStructure, "Id" , "Id");
  CreateTableIndexes("Users" ,"FullName,UserName,Password");
}
window.addEventListener('load', function() {
  frmRestore.style.display = 'block';
  NSB.addProperties(restoreT);
  NSB.addDisableProperty(restoreT);


  if(typeof(restoreT.onclick)=='function'){
    if(typeof(restoreT_left)!='undefined') restoreT_left.onclick=function() {restoreT.onclick(restoreT_left.getAttribute('nsbvalue'))};
    if(typeof(restoreT_right)!='undefined') restoreT_right.onclick=function() {restoreT.onclick(restoreT_right.getAttribute('nsbvalue'))}};
  txtRestore.ontouchmove=function(e){e.stopPropagation()};
  NSB.addProperties(txtRestore);
  frmRestore.style.display = 'none';
}, false);
frmRestore.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmRestore);
restoreT.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Home"):
    ChangeForm(WhatToDo);
	break;
  case ((choice) == "Restore"):
    dbJSON = txtRestore.value;
    dbJSON = Trim(dbJSON);
    if(Len(dbJSON) == 0) {
      NSB.MsgBox("Please replace the text with the copied text from the 'Backup' E-Mail!");
       return;
    }
    NSB.ShowProgress("Working on it...");
 // start the process
    dbImport=JSON.parse(dbJSON);
    SQLImport(dbImport, dbObj, restoreComplete);
  }
return savethefunction_rvar; }

function restoreComplete() { savethefunction_rvar="";
  NSB.ShowProgress(False);
  ChangeForm(WhatToDo);
return savethefunction_rvar; }

frmRestore.onshow = function() { savethefunction_rvar="";
  txtRestore.Left = 10;
  txtRestore.Top = 42;
  txtRestore.Height = frmRestore.Height - restoreT.Height - 10;
  txtRestore.Width = frmRestore.Width - 20;
  txtRestore.value = localStorage.getItem("backup");
return savethefunction_rvar; }

window.addEventListener('load', function() {
  frmSettings.style.display = 'block';
  NSB.List_jqm_init('lstWhatToDo1','Categories,Institutions,Accounts',true,'100%',false);
  lstWhatToDo1_ref = new iScroll('lstWhatToDo1_scroller',{ bounce:true, zoom:false });
  lstWhatToDo1.refresh=function(){if (typeof lstWhatToDo1_ref!='undefined') setTimeout(NSB.refresh,100,lstWhatToDo1_ref)};
  NSB.addProperties(lstWhatToDo1, lstWhatToDo1_scroller);

(function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('lstWhatToDo1_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
  NSB.addProperties(hBar1);
  NSB.addDisableProperty(hBar1);


  if(typeof(hBar1.onclick)=='function'){
    if(typeof(hBar1_left)!='undefined') hBar1_left.onclick=function() {hBar1.onclick(hBar1_left.getAttribute('nsbvalue'))};
    if(typeof(hBar1_right)!='undefined') hBar1_right.onclick=function() {hBar1.onclick(hBar1_right.getAttribute('nsbvalue'))}};
  frmSettings.style.display = 'none';
}, false);
frmSettings.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmSettings);
lstWhatToDo1.onclick = function(i) { savethefunction_rvar="";
  if(TypeName(i) == "object" )  { return savethefunction_rvar; }
 var  strItem;
  strItem = lstWhatToDo1.getItem(i);
  switch (True) {
  case ((strItem) == "Categories"):
      ChangeForm(CategoryList);
	break;
  case ((strItem) == "Institutions"):
      ChangeForm(MyInstitutions,"slide");
	break;
  case ((strItem) == "Accounts"):
    ChangeForm(MyAccounts,"slide");
  }
return savethefunction_rvar; }

frmSettings.onshow = function() { savethefunction_rvar="";
  lstWhatToDo1.Top = hBar1.Height;
  lstWhatToDo1.Height = frmSettings.Height - hBar1.Height;
  lstWhatToDo1.refresh();
return savethefunction_rvar; }

hBar1.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Home"):
    ChangeForm(WhatToDo);
  }
return savethefunction_rvar; }
window.addEventListener('load', function() {
  frmDatabase.style.display = 'block';
  NSB.List_jqm_init('lstWhatToDo2','Backup,Restore,Reset',true,'100%',false);
  lstWhatToDo2_ref = new iScroll('lstWhatToDo2_scroller',{ bounce:true, zoom:false });
  lstWhatToDo2.refresh=function(){if (typeof lstWhatToDo2_ref!='undefined') setTimeout(NSB.refresh,100,lstWhatToDo2_ref)};
  NSB.addProperties(lstWhatToDo2, lstWhatToDo2_scroller);

(function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('lstWhatToDo2_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
  NSB.addProperties(hBar2);
  NSB.addDisableProperty(hBar2);


  if(typeof(hBar2.onclick)=='function'){
    if(typeof(hBar2_left)!='undefined') hBar2_left.onclick=function() {hBar2.onclick(hBar2_left.getAttribute('nsbvalue'))};
    if(typeof(hBar2_right)!='undefined') hBar2_right.onclick=function() {hBar2.onclick(hBar2_right.getAttribute('nsbvalue'))}};
  frmDatabase.style.display = 'none';
}, false);
frmDatabase.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmDatabase);
lstWhatToDo2.onclick = function(i) { savethefunction_rvar="";
  if(TypeName(i) == "object" )  { return savethefunction_rvar; }
 var  strItem;
  strItem = lstWhatToDo2.getItem(i);
  switch (True) {
  case ((strItem) == "Backup"):
      if(isDemo == True) {
        NSB.MsgBox("The system is in demo mode and backup cannot be executed!");
         return;
 } else {
        NSB.MsgBox(ContinueBackUp,"This will backup your database and email it to your email address. Please ensure you are connected to the internet." , 4+32, "Confirm Backup");
      }
	break;
  case ((strItem) == "Restore"):
      if(isDemo == True) {
        NSB.MsgBox("The system is in demo mode and restore cannot be executed!");
         return;
 } else {
        ChangeForm(frmRestore);
      }
	break;
  case ((strItem) == "Reset"):
      if(isDemo == True) {
        NSB.MsgBox("The system is in demo mode and cannot be reset!");
         return;
 } else {
        NSB.MsgBox(ResetData,"This will clear all the payments data in database, are you sure?" , 4+32, "Confirm Reset");
      }
  }
return savethefunction_rvar; }

frmDatabase.onshow = function() { savethefunction_rvar="";
  lstWhatToDo2.Top = hBar2.Height;
  lstWhatToDo2.Height = frmDatabase.Height - hBar2.Height;
  lstWhatToDo2.refresh();
return savethefunction_rvar; }

hBar2.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Home"):
    ChangeForm(WhatToDo);
  }
return savethefunction_rvar; }

function ContinueBackUp(result) {
  if(result != 6 )  { return; }
 var  delRec;
 delRec = new Object();
  NSB.ShowProgress("Working on it...");
  dbExport = SQLExport(dbObj, dbName, backupComplete);
}

function backupComplete() { savethefunction_rvar="";
 var  sEmailAddress;
  sEmailAddress = localStorage.getItem("email");
  if(sEmailAddress == null ) { sEmailAddress = ""; }
  sEmailAddress = Replace(sEmailAddress,'\n',"");
  sEmailAddress = Replace(sEmailAddress, '\r',"");
  sEmailAddress = Replace(sEmailAddress, '\n',"");
  if(Len(sEmailAddress) == 0) {
     NSB.ShowProgress(False);
    NSB.MsgBox("Your email address has not been configured, please register your as a user first!");
     return;
  }
  dbJSON=JSON.stringify(dbExport);
  NSB.ShowProgress(False);
  localStorage.setItem("backup" , dbJSON);
  email(sEmailAddress,"MyMoney.Show "  +  dbName  +  " BackUp "  +  dateadd("s",0,new Date()),dbJSON);
return savethefunction_rvar; }


window.addEventListener('load', function() {
  frmSignIn.style.display = 'block';
  Main();
  if (typeof(frmSignIn.onshow)=='function') frmSignIn.onshow();
  
}, false);

var NSBCurrentForm = frmSignIn;



