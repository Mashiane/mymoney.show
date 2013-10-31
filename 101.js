
(function(){var all=document.getElementsByTagName('*');for(var i=0;i<all.length;i++)if(typeof all[i].id!='undefined'&&typeof window[all[i].id]=='undefined')window[all[i].id]=all[i];})()

if ((navigator.userAgent.indexOf('AppleWebKit') === -1) && (navigator.userAgent.indexOf('Chrome') === -1) && (navigator.userAgent.indexOf('MSIE 1') === -1) && (navigator.userAgent.indexOf('BlackBerry') === -1) && (navigator.userAgent.indexOf('RIM') === -1) && (navigator.userAgent.indexOf('Tablet PC') === -1)) {
  alert('Please use Google Chrome, Apple Safari or another supported browser. (' + navigator.userAgent + ')');
}

if (navigator.userAgent.indexOf('iPad') !== -1) {
  var splashscreen = document.createElement('link');
  splashscreen.rel = 'apple-touch-startup-image';
  splashscreen.href = 'icon.png';
  document.getElementsByTagName('head')[0].appendChild(splashscreen);
}

window.addEventListener('load', function() {
  WhatToDo.style.display = 'block';
  NSB.List_jqm_init('lstWhatToDo','My Categories,My Institutions,My Accounts,My Payments,My Reports,Read Me First,Save & Close',true,'100%',false);
  lstWhatToDo_ref = new iScroll('lstWhatToDo_scroller',{ bounce:true, zoom:false });
  lstWhatToDo.refresh=function(){if (typeof lstWhatToDo_ref!='undefined') setTimeout(NSB.refresh,100,lstWhatToDo_ref)};
  NSB.addProperties(lstWhatToDo, lstWhatToDo_scroller);

  NSB.addProperties(hBar);
  NSB.addDisableProperty(hBar);
  if(typeof(hBar_left)!='undefined') hBar_left.onclick=function() {hBar.onclick(hBar_left.getAttribute('nsbvalue'))};
  if(typeof(hBar_right)!='undefined') hBar_right.onclick=function() {hBar.onclick(hBar_right.getAttribute('nsbvalue'))};
  WhatToDo.style.display = 'none';
}, false);
WhatToDo.onsubmit=function(event){window.event.cancelBubble=true;window.event.returnValue=false};
NSB.addProperties(WhatToDo);
lstWhatToDo.onclick = function(i) { savethefunction_rvar="";
  if(TypeName(i) == "object" )  { return savethefunction_rvar; }
 var  strItem;
  strItem = lstWhatToDo.getItem(i);
  switch (True) {
  case ((strItem) == "My Categories"):
      ChangeForm(MyCategories);
	break;
  case ((strItem) == "My Institutions"):
      ChangeForm(MyInstitutions);
	break;
  case ((strItem) == "My Accounts"):
    ChangeForm(MyAccounts);
	break;
  case ((strItem) == "My Payments"):
    ChangeForm(MyPayments);
	break;
  case ((strItem) == "My Reports"):
    ChangeForm(MyReports);
	break;
  case ((strItem) == "Read Me First"):
	break;
  case ((strItem) == "Save & Close"):
    NSB.MsgBox(closeOk, "Do you want to persist updates and close MyMoney.Show?" , 4+32, "Confirm Close");
  }
return savethefunction_rvar; }

function closeOk(result) {
  if(result==6) {
    if(typeof(dbObj) == "undefined") {
      NSB.MsgBox("The database has not been opened, do an activity.");
 } else {
      dbObj.close;
 //NSB.ShowProgress("Saving database...")
 //DBjson=SQLExport(dbObj, dbName, exportComplete)
    }
  }
}

 //Function exportComplete()
 //SQLImport(DBjson, dbObj, importComplete)
 //dbObj.close
 //NSB.ShowProgress(False)
 //End Function

WhatToDo.onshow = function() { savethefunction_rvar="";
  lstWhatToDo.Top = hBar.Height;
  lstWhatToDo.Height = WhatToDo.Height - hBar.Height;
return savethefunction_rvar; }

window.addEventListener('load', function() {
  MyCategories.style.display = 'block';
  NSB.List_jqm_init('mycategoriesList','Maintain Categories,Category Movements,Category Performance,Category Report',false,'100%',false);

  mycategoriesList.refresh=function(){if (typeof mycategoriesList_ref!='undefined') setTimeout(NSB.refresh,100,mycategoriesList_ref)};

  NSB.addProperties(mycategoriesList);
  NSB.addProperties(mycatTitle);
  NSB.addDisableProperty(mycatTitle);
  if(typeof(mycatTitle_left)!='undefined') mycatTitle_left.onclick=function() {mycatTitle.onclick(mycatTitle_left.getAttribute('nsbvalue'))};
  if(typeof(mycatTitle_right)!='undefined') mycatTitle_right.onclick=function() {mycatTitle.onclick(mycatTitle_right.getAttribute('nsbvalue'))};
  MyCategories.style.display = 'none';
}, false);
MyCategories.onsubmit=function(event){window.event.cancelBubble=true;window.event.returnValue=false};
NSB.addProperties(MyCategories);
mycategoriesList.onclick = function(i) { savethefunction_rvar="";
  if(TypeName(i) == "object" )  { return savethefunction_rvar; }
 var  strItem;
  strItem = mycategoriesList.getItem(i);
  switch (True) {
  case ((strItem) == "Maintain Categories"):
    ChangeForm(CategoriesList);
	break;
  case ((strItem) == "Category Movements"):
    ChangeForm(CategoryMovements);
	break;
  case ((strItem) == "Category Budgets"):
    catFrom = "mycategories";
    ChangeForm(CategoryBudgets);
	break;
  case ((strItem) == "Category Performance"):
    ChangeForm(CategoryPerformance);
	break;
  case ((strItem) == "Category Report"):
    ChangeForm(CategoryReport);
  }
return savethefunction_rvar; }

mycatTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Home"):
    ChangeForm(WhatToDo);
  }
return savethefunction_rvar; }

MyCategories.onshow = function() { savethefunction_rvar="";
  mycategoriesList.Top = mycatTitle.Height;
  mycategoriesList.Height = MyCategories.Height - mycatTitle.Height;
return savethefunction_rvar; }

window.addEventListener('load', function() {
  MyAccounts.style.display = 'block';
  NSB.List_jqm_init('myaccountsList','Maintain Accounts,My Assets,My Liabilites,My Incomes,My Expenses,Account Movements,Account Performance,Account Report',true,'100%',false);
  myaccountsList_ref = new iScroll('myaccountsList_scroller',{ bounce:true, zoom:false });
  myaccountsList.refresh=function(){if (typeof myaccountsList_ref!='undefined') setTimeout(NSB.refresh,100,myaccountsList_ref)};
  NSB.addProperties(myaccountsList, myaccountsList_scroller);

  NSB.addProperties(myaccountTitle);
  NSB.addDisableProperty(myaccountTitle);
  if(typeof(myaccountTitle_left)!='undefined') myaccountTitle_left.onclick=function() {myaccountTitle.onclick(myaccountTitle_left.getAttribute('nsbvalue'))};
  if(typeof(myaccountTitle_right)!='undefined') myaccountTitle_right.onclick=function() {myaccountTitle.onclick(myaccountTitle_right.getAttribute('nsbvalue'))};
  MyAccounts.style.display = 'none';
}, false);
MyAccounts.onsubmit=function(event){window.event.cancelBubble=true;window.event.returnValue=false};
NSB.addProperties(MyAccounts);
myaccountsList.onclick = function(i) { savethefunction_rvar="";
  if(TypeName(i) == "object" )  { return savethefunction_rvar; }
 var  strItem;
  strItem = myaccountsList.getItem(i);
  switch (True) {
  case ((strItem) == "Maintain Accounts"):
    TypeOfList = "all";
    ChangeForm(frmAccountsList);
	break;
  case ((strItem) == "My Assets"):
    TypeOfList = "assets";
    ChangeForm(frmAccountsList);
	break;
  case ((strItem) == "My Liabilites"):
    TypeOfList = "liabilities";
    ChangeForm(frmAccountsList);
	break;
  case ((strItem) == "My Incomes"):
    TypeOfList = "incomes";
    ChangeForm(frmAccountsList);
	break;
  case ((strItem) == "My Expenses"):
    TypeOfList = "expenses";
    ChangeForm(frmAccountsList);
	break;
  case ((strItem) == "Account Movements"):
    catfrom = "myaccounts";
    ChangeForm(AccountMovements);
	break;
  case ((strItem) == "Account Performance"):
    ChangeForm(AccountPerformance);
	break;
  case ((strItem) == "Account Report"):
    ChangeForm(AccountReport);
  }
return savethefunction_rvar; }

myaccountTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Home"):
      ChangeForm(WhatToDo);
  }
return savethefunction_rvar; }

MyAccounts.onshow = function() { savethefunction_rvar="";
  myaccountsList.Top = myaccountTitle.Height;
  myaccountsList.Height = MyAccounts.Height - myaccountTitle.Height;
return savethefunction_rvar; }

window.addEventListener('load', function() {
  MyPayments.style.display = 'block';
  NSB.List_jqm_init('mypaymentsList','Make a Payment,Make Multiple Payments,Payments Report',false,'100%',false);

  mypaymentsList.refresh=function(){if (typeof mypaymentsList_ref!='undefined') setTimeout(NSB.refresh,100,mypaymentsList_ref)};

  NSB.addProperties(mypaymentsList);
  NSB.addProperties(mypaymentsTitle);
  NSB.addDisableProperty(mypaymentsTitle);
  if(typeof(mypaymentsTitle_left)!='undefined') mypaymentsTitle_left.onclick=function() {mypaymentsTitle.onclick(mypaymentsTitle_left.getAttribute('nsbvalue'))};
  if(typeof(mypaymentsTitle_right)!='undefined') mypaymentsTitle_right.onclick=function() {mypaymentsTitle.onclick(mypaymentsTitle_right.getAttribute('nsbvalue'))};
  MyPayments.style.display = 'none';
}, false);
MyPayments.onsubmit=function(event){window.event.cancelBubble=true;window.event.returnValue=false};
NSB.addProperties(MyPayments);
mypaymentsList.onclick = function(i) { savethefunction_rvar="";
  if(TypeName(i) == "object" )  { return savethefunction_rvar; }
 var  strItem;
  strItem = mypaymentsList.getItem(i);
  switch (True) {
  case ((strItem) == "Make a Payment"):
	break;
  case ((strItem) == "Make Multiple Payments"):
	break;
  case ((strItem) == "Payments Report"):
  }
return savethefunction_rvar; }

mypaymentsTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
    case ((choice) == "Home"):
      ChangeForm(WhatToDo);
  }
return savethefunction_rvar; }

MyPayments.onshow = function() { savethefunction_rvar="";
  mypaymentsList.Top = mypaymentsTitle.Height;
  mypaymentsList.Height = MyPayments.Height - mypaymentsTitle.Height;
return savethefunction_rvar; }

window.addEventListener('load', function() {
  MyReports.style.display = 'block';
  NSB.List_jqm_init('myreportsList','My Financial Position,Assets vs Liabilities,Incomes vs Expenses,My Financial Report',false,'100%',false);

  myreportsList.refresh=function(){if (typeof myreportsList_ref!='undefined') setTimeout(NSB.refresh,100,myreportsList_ref)};

  NSB.addProperties(myreportsList);
  NSB.addProperties(myreportTitle);
  NSB.addDisableProperty(myreportTitle);
  if(typeof(myreportTitle_left)!='undefined') myreportTitle_left.onclick=function() {myreportTitle.onclick(myreportTitle_left.getAttribute('nsbvalue'))};
  if(typeof(myreportTitle_right)!='undefined') myreportTitle_right.onclick=function() {myreportTitle.onclick(myreportTitle_right.getAttribute('nsbvalue'))};
  MyReports.style.display = 'none';
}, false);
MyReports.onsubmit=function(event){window.event.cancelBubble=true;window.event.returnValue=false};
NSB.addProperties(MyReports);
myreportTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Home"):
    ChangeForm(WhatToDo);
  }
return savethefunction_rvar; }

myreportsList.onclick = function(i) { savethefunction_rvar="";
  if(TypeName(i) == "object" )  { return savethefunction_rvar; }
 var  strItem;
  strItem = myreportsList.getItem(i);
  switch (True) {
    case ((strItem) == "My Financial Position"):
	break;
    case ((strItem) == "Assets vs Liabilities"):
	break;
    case ((strItem) == "Incomes vs Expenses"):
	break;
    case ((strItem) == "My Financial Report"):
    }
return savethefunction_rvar; }

MyReports.onshow = function() { savethefunction_rvar="";
  myreportsList.Top = myreportTitle.Height;
  myreportsList.Height = MyReports.Height - myreportTitle.Height;
return savethefunction_rvar; }

window.addEventListener('load', function() {
  MyInstitutions.style.display = 'block';
  NSB.List_jqm_init('myinstitutionsList','',true,'100%',false);
  myinstitutionsList_ref = new iScroll('myinstitutionsList_scroller',{ bounce:true, zoom:false });
  myinstitutionsList.refresh=function(){if (typeof myinstitutionsList_ref!='undefined') setTimeout(NSB.refresh,100,myinstitutionsList_ref)};
  NSB.addProperties(myinstitutionsList, myinstitutionsList_scroller);

  NSB.addProperties(myinstitutionsTitle);
  NSB.addDisableProperty(myinstitutionsTitle);
  if(typeof(myinstitutionsTitle_left)!='undefined') myinstitutionsTitle_left.onclick=function() {myinstitutionsTitle.onclick(myinstitutionsTitle_left.getAttribute('nsbvalue'))};
  if(typeof(myinstitutionsTitle_right)!='undefined') myinstitutionsTitle_right.onclick=function() {myinstitutionsTitle.onclick(myinstitutionsTitle_right.getAttribute('nsbvalue'))};
  MyInstitutions.style.display = 'none';
}, false);
MyInstitutions.onsubmit=function(event){window.event.cancelBubble=true;window.event.returnValue=false};
NSB.addProperties(MyInstitutions);
function LoadInstitutions() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Loading institutions...");
  myinstitutionsList.Visible = False;
  myinstitutionsList.deleteItem("all");
  sqlList = [];
  sqlList[0] = ["SELECT [Name] FROM Institutions ORDER BY [Name]" , insHandler, insError];
  Sql(dbObj, sqlList);
}

function insHandler(transaction, results) { savethefunction_rvar="";
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    myinstitutionsList.addItem(results.rows.item(i)["Name"]);
  }
  myinstitutionsList.Visible = True;
  myinstitutionsList.refresh;
  myinstitutionsList.scrollTop;
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function insError(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  NSB.MsgBox("SQL Error");
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

myinstitutionsList.onclick = function(i) { savethefunction_rvar="";
  if(TypeName(i) == "object" )  { return savethefunction_rvar; }
 var  strItem;
  strItem = myinstitutionsList.getItem(i);
 // save selected institution for later retrieval
  localStorage.institution=strItem;
return savethefunction_rvar; }

myinstitutionsTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
    case ((choice) == "Home"):
      ChangeForm(WhatToDo);
	break;
    case ((choice) == "Refresh"):
      LoadInstitutions();
	break;
    case ((choice) == "Add"):
      InputInstitution();
  }
return savethefunction_rvar; }

MyInstitutions.onshow = function() { savethefunction_rvar="";
  myinstitutionsList.Top = myinstitutionsTitle.Height;
  myinstitutionsList.Height = MyInstitutions.Height - myinstitutionsTitle.Height;
  LoadInstitutions();
return savethefunction_rvar; }

 // ask the user for an institution name
function InputInstitution() { savethefunction_rvar="";
  NSB.InputBox(InstitutionInputDone, "Please type the institution below." , "Add Institution" , "");
return savethefunction_rvar; }

 // save the input box institution name to the database
function InstitutionInputDone(result, value) {
  if(result==1 && Len(value) > 0) {
   var  inst;
    inst = new Institution(-1,value);
    inst.nextid();
    inst.save();
    LoadInstitutions();
  }
}
window.addEventListener('load', function() {
  MaintainCategories.style.display = 'block';
  maintainCategoriesMenu.refresh=function(){setTimeout(NSB.FooterBarRefresh,10,maintainCategoriesMenu)};
  NSB.FooterBar_jqm_init('maintainCategoriesMenu','Add,Save,Delete');
  NSB.addProperties(maintainCategoriesMenu);
  NSB.addProperties(maintainCategoriesTitle);
  NSB.addDisableProperty(maintainCategoriesTitle);
  if(typeof(maintainCategoriesTitle_left)!='undefined') maintainCategoriesTitle_left.onclick=function() {maintainCategoriesTitle.onclick(maintainCategoriesTitle_left.getAttribute('nsbvalue'))};
  if(typeof(maintainCategoriesTitle_right)!='undefined') maintainCategoriesTitle_right.onclick=function() {maintainCategoriesTitle.onclick(maintainCategoriesTitle_right.getAttribute('nsbvalue'))};


  NSB.addProperties(Label1);
  if(typeof txtAddCategoryName==='undefined')txtAddCategoryName=document.getElementById('txtAddCategoryName')
  txtAddCategoryName.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(txtAddCategoryName, $('#txtAddCategoryName_wrapper > div')[0]);
  NSB.addDisableProperty(txtAddCategoryName)
  MaintainCategories.style.display = 'none';
}, false);
MaintainCategories.onsubmit=function(event){window.event.cancelBubble=true;window.event.returnValue=false};
NSB.addProperties(MaintainCategories);
maintainCategoriesTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
    case ((choice) == "Back"):
      ChangeForm(CategoriesList);
    }
return savethefunction_rvar; }

maintainCategoriesMenu.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
    case ((choice) == "Add"):
      ClearCategory();
	break;
    case ((choice) == "Save"):
	break;
    case ((choice) == "Delete"):
    }
return savethefunction_rvar; }

MaintainCategories.onshow = function() { savethefunction_rvar="";
  maintainCategoriesMenu.Top = maintainCategoriesTitle.Height;
return savethefunction_rvar; }

function ClearCategory() {
    txtAddCategoryName.text = "";
    txtAddCategoryName.focus;
}

window.addEventListener('load', function() {
  CategoriesList.style.display = 'block';
  NSB.List_jqm_init('categoriesListList','',true,'100%',false);
  categoriesListList_ref = new iScroll('categoriesListList_scroller',{ bounce:true, zoom:false });
  categoriesListList.refresh=function(){if (typeof categoriesListList_ref!='undefined') setTimeout(NSB.refresh,100,categoriesListList_ref)};
  NSB.addProperties(categoriesListList, categoriesListList_scroller);

  NSB.addProperties(categorieslistTitle);
  NSB.addDisableProperty(categorieslistTitle);
  if(typeof(categorieslistTitle_left)!='undefined') categorieslistTitle_left.onclick=function() {categorieslistTitle.onclick(categorieslistTitle_left.getAttribute('nsbvalue'))};
  if(typeof(categorieslistTitle_right)!='undefined') categorieslistTitle_right.onclick=function() {categorieslistTitle.onclick(categorieslistTitle_right.getAttribute('nsbvalue'))};
  CategoriesList.style.display = 'none';
}, false);
CategoriesList.onsubmit=function(event){window.event.cancelBubble=true;window.event.returnValue=false};
NSB.addProperties(CategoriesList);
function LoadCategories() {
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Loading categories...");
  categoriesListList.Visible = False;
  categoriesListList.deleteItem("all");
  sqlList = [];
  sqlList[0] = ["SELECT CategoryName FROM Categories ORDER BY CategoryName" , catHandler, catError];
  Sql(dbObj, sqlList);
}

function catHandler(transaction, results) { savethefunction_rvar="";
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    categoriesListList.addItem(results.rows.item(i)["CategoryName"]);
  }
  NSB.ShowProgress(False);
  categoriesListList.Visible = True;
  categoriesListList.refresh;
  categoriesListList.scrollTop;
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function catError(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  NSB.MsgBox("SQL Error");
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

CategoriesList.onshow = function() { savethefunction_rvar="";
  categoriesListList.Top = categorieslistTitle.Height;
  categoriesListList.Height = CategoriesList.Height - categorieslistTitle.Height;
  LoadCategories();
return savethefunction_rvar; }

categorieslistTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
      ChangeForm(MyCategories);
	break;
  case ((choice) == "Add"):
      InputCategory();
 //ChangeForm(MaintainCategories)
	break;
  case ((choice) == "Refresh"):
    LoadCategories();
  }
return savethefunction_rvar; }

categoriesListList.onclick = function(i) { savethefunction_rvar="";
  if(TypeName(i) == "object" )  { return savethefunction_rvar; }
 var  strItem;
  strItem = categoriesListList.getItem(i);
 // save selected category for later retrieval
  localStorage.category=strItem;
return savethefunction_rvar; }

function InputCategory() { savethefunction_rvar="";
  NSB.InputBox(CategoryInputDone, "Please type the category below." , "Add Category" , "");
return savethefunction_rvar; }

function CategoryInputDone(result, value) {
  if(result==1 && Len(value) > 0) {
    cat = new Category(88,value,0);
    cat.save();
    LoadCategories();
  }
}


var  dbName;
var  dbObj;
var  cmData;
var  cmSource;
var  cmDataAdapter;
var  catKey;
var  catFrom;
var  catYear;
var  catName;
var  sqlList;
var  DBjson;

function Main() {
  dbName = "mymoneyshow.db";
  NSB.MsgBoxStyle="";
  dbObj = SqlOpenDatabase(dbName);
  if(dbObj == 0) {
    NSB.MsgBox("Error opening db");
  }
  sqlList = [];
 // category movements handling
  cmData = [];
  cmSource = {localdata: cmData, datatype: "array"}
  cmDataAdapter = new $.jqx.dataAdapter(cmSource);
  grdCategoryMovements_settings.source = cmDataAdapter;
  grdCategoryMovements_settings.theme = "energyblue";
  grdCategoryMovements_settings.columns = [  {text: "Year" , dataField: "yearon" , width: 60, columntype: "number" },  {text: "Category" , dataField: "category" , width: 150 },  {text: "Actual" , dataField: "actual" , width:100, align: "right" , cellsalign: "right" ,  minwidth: 100, cellsformat: "F2" , columntype: "number"}  ];
  $("#grdCategoryMovements").jqxGrid(grdCategoryMovements_settings);
 // set category budget
  grdCategoryBudgets_settings.source = cmDataAdapter;
  grdCategoryMovements_settings.theme = "energyblue";
  grdCategoryBudgets_settings.columns = [  {text: "Period" , dataField: "period" , width: 60 },  {text: "Budget" , columntype: "number" , align: "right" , dataField: "budget" , width:100, cellsalign: "right" , minwidth: 100, cellsformat: "F2" },  {text: "Actual" , columntype: "number" , align: "right" , dataField: "actual" , width:100, cellsalign: "right" , minwidth: 100, cellsformat: "F2" }  ];
  $("#grdCategoryBudgets").jqxGrid(grdCategoryBudgets_settings);
 // set account budget
  grdAccountBudgets_settings.source = cmDataAdapter;
  grdCategoryMovements_settings.theme = "energyblue";
  grdAccountBudgets_settings.columns = [  {text: "Period" , dataField: "period" , width: 60 },  {text: "Budget" , columntype: "number" , align: "right" , dataField: "budget" , width:100, cellsalign: "right" , minwidth: 100, cellsformat: "F2" },  {text: "Actual" , columntype: "number" , align: "right" , dataField: "actual" , width:100, cellsalign: "right" , minwidth: 100, cellsformat: "F2" }  ];
  $("#grdAccountBudgets").jqxGrid(grdAccountBudgets_settings);
 // set category report grid
  grdCatReport_settings.source = cmDataAdapter;
  grdCategoryMovements_settings.theme = "energyblue";
  grdCatReport_settings.columns = [  {text: "Account" , dataField: "account" , width: 150 },  {text: "Amount" , columntype: "number" , align: "right" , dataField: "amount" , width:100, cellsalign: "right" , minwidth: 100, cellsformat: "F2" },  {text: "Percentage" , columntype: "number" , align: "right" , dataField: "percentage" , width:100, cellsalign: "right" , minwidth: 100, cellsformat: "F2" }  ];
  $("#grdCatReport").jqxGrid(grdCatReport_settings);
 // set account report
  grdAccReport_settings.source = cmDataAdapter;
  grdCategoryMovements_settings.theme = "energyblue";
  grdAccReport_settings.columns = [  {text: "Account" , dataField: "account" , width: 150 },  {text: "Amount" , columntype: "number" , align: "right" , dataField: "amount" , width:100, cellsalign: "right" , minwidth: 100, cellsformat: "F2" },  {text: "Percentage" , columntype: "number" , align: "right" , dataField: "percentage" , width:100, cellsalign: "right" , minwidth: 100, cellsformat: "F2" }  ];
  $("#grdAccReport").jqxGrid(grdAccReport_settings);

 // set account movement grid
  grdAccountMovements_settings.source = cmDataAdapter;
  grdCategoryMovements_settings.theme = "energyblue";
  grdAccountMovements_settings.columns = [  {text: "Year" , columntype: "number" , dataField: "yearon" , width: 60 },  {text: "Account" , dataField: "account" , width: 150 },  {text: "Actual" , columntype: "number" , align: "right" , dataField: "actual" , width:100, cellsalign: "right" , minwidth: 100, cellsformat: "F2" }  ];
  $("#grdAccountMovements").jqxGrid(grdAccountMovements_settings);
}


 //Function Record(tbname, fldmap)
 //  this.tbname = tbname
 //  this.fldmap = fldmap
 //End Function

 //Function insertRecord()
 //    sqlList = []
 //    ' build fld and value list
 //    Dim flds
 //    Dim vals
 //    flds = ""
 //    vals = ""
 //    For Each key, item in this.fldmap
 //      flds = flds & "[" & key & "],"
 //      vals = vals & item & ","
 //    Next
 //    flds = Left(flds, Len(flds) - 1)
 //    vals = Left(vals, Len(vals) - 1)
 //    sqlList[0] = "INSERT INTO [" & this.tbname & "] (" & flds & ") VALUES (" & vals & ");"
 //    Sql(dbObj, sqlList)
 //End Sub

 //Record.prototype.save = insertRecord
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
  sqlList[0] = ["INSERT INTO Institutions (Id, Name) VALUES ( "  +  s  +  ")" , saveInstOk, saveInstError];
  Sql(dbObj, sqlList);
return savethefunction_rvar; }

 // if institution saved, tell user
function saveInstOk(transaction, results) { savethefunction_rvar="";
  NSB.MsgBox("Institution successfully saved.");
return savethefunction_rvar; }

 // if institution not saved, tell user
function saveInstError(transaction, results) { savethefunction_rvar="";
  NSB.MsgBox("Institution could not be saved.");
return savethefunction_rvar; }

 // generate the next available institution id query
function nextInstId() { savethefunction_rvar="";
  sqlList = [];
  sqlList[0] = ["SELECT MAX(Id) as MaxValue FROM Institutions" , maxOk, maxError];
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
return savethefunction_rvar; }

 // prototype definitions
Institution.prototype.nextid = nextInstId;
Institution.prototype.save = saveInstitution;

function Category(id, categoryname, transactions) { savethefunction_rvar="";
  this.id = id;
  this.categoryname = categoryname;
  this.transactions = transactions;
return savethefunction_rvar; }

function saveCategory() { savethefunction_rvar="";
 var  s;
  sqlList = [];
  s = Join([this.id, "'"  +  this.categoryname  +  "'" , this.transactions], ",");
  sqlList[0] = ["INSERT INTO Categories (CategoryId, CategoryName, Transactions) VALUES ( "  +  s  +  ")" , saveCatOk, saveCatError];
  Sql(dbObj, sqlList);
return savethefunction_rvar; }

function saveCatOk(transaction, result) { savethefunction_rvar="";
  NSB.MsgBox("Category successfully saved.");
return savethefunction_rvar; }

function saveCatError(transaction, result) { savethefunction_rvar="";
  NSB.MsgBox("Category could not be saved.");
return savethefunction_rvar; }

Category.prototype.save = saveCategory;
window.addEventListener('load', function() {
  CategoryMovements.style.display = 'block';
  NSB.addProperties(categoryMovementTitle);
  NSB.addDisableProperty(categoryMovementTitle);
  if(typeof(categoryMovementTitle_left)!='undefined') categoryMovementTitle_left.onclick=function() {categoryMovementTitle.onclick(categoryMovementTitle_left.getAttribute('nsbvalue'))};
  if(typeof(categoryMovementTitle_right)!='undefined') categoryMovementTitle_right.onclick=function() {categoryMovementTitle.onclick(categoryMovementTitle_right.getAttribute('nsbvalue'))};
grdCategoryMovements_settings={
altrows:true,
altstart:1,
altstep:1,
autoheight:false,
autoloadstate:false,
autosavestate:false,
autoshowcolumnsmenubutton:true,
autoshowfiltericon:true,
closeablegroups:false,
columnsheight:25,
columnsmenu:false,
columnsmenuwidth:15,
columnsreorder:false,
columnsresize:false,
disabled:false,
editable:false,
editmode:'selectedcell',
enableanimations:true,
enablebrowserselection:false,
enableellipsis:true,
enablehover:true,
enablerowdetailsindent:true,
enabletooltips:false,
filterable:false,
groupable:false,

groupindentwidth:20,
groupsexpandedbydefault:false,
groupsheaderheight:34,


height:'415',
horizontalscrollbarlargestep:50,
horizontalscrollbarstep:5,

keyboardnavigation:true,
pageable:false,
pagerheight:28,

pagesize:10,
ready:function(){ grdCategoryMovementsReady() },




rowdetails:false,
rowdetailstemplate:null,
rowsheight:25,
scrollbarsize:15,
selectedrowindex:-1,
selectionmode:'singlerow',
showaggregates:false,
showemptyrow:true,
showfiltercolumnbackground:true,
showfiltermenuitems:true,
showfilterrow:false,
showgroupmenuitems:true,
showgroupsheader:true,
showheader:true,
showpinnedcolumnbackground:true,
showrowdetailscolumn:true,
showsortcolumnbackground:true,
showsortmenuitems:true,
showstatusbar:false,
showtoolbar:false,
sortable:false,
sorttogglestates:2,
statusbarheight:34,
theme:'energyblue',
toolbarheight:34,
updatedelay:0,
verticalscrollbarlargestep:400,
verticalscrollbarstep:5,
virtualmode:false,
width:'100%',
columns:eval([{text:'Grid'},{text:'Two'},{text:'Three'}]) }
  grdCategoryMovements.style.position='relative';
  $('#grdCategoryMovements').jqxGrid (grdCategoryMovements_settings)
  NSB.addProperties(grdCategoryMovements,grdCategoryMovements_wrapper);
  CategoryMovements.style.display = 'none';
}, false);
CategoryMovements.onsubmit=function(event){window.event.cancelBubble=true;window.event.returnValue=false};
NSB.addProperties(CategoryMovements);
function LoadCategoryMovements() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Loading category movements...");
  sqlList = [];
  sqlList[0] = ["SELECT [YearOn],[AccountName],[Actual] FROM [Category_Movement] ORDER BY [YearOn] DESC,AccountName" , cmHandler, cmError];
  Sql(dbObj, sqlList);
}

function cmHandler(transaction, results) { savethefunction_rvar="";
  cmData = [];
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
   var  row;
    row = {}
    row["yearon"] = results.rows.item(i)["YearOn"];
    row["category"] = results.rows.item(i)["AccountName"];
    row["actual"] = results.rows.item(i)["Actual"];
    cmData[i] = row;
  }
  cmSource = {localdata: cmData, datatype: "array"}
  cmDataAdapter = new $.jqx.dataAdapter(cmSource);
  grdCategoryMovements_settings.source = cmDataAdapter;
  $("#grdCategoryMovements").jqxGrid(grdCategoryMovements_settings);
  $("#grdCategoryMovements").jqxGrid("autoresizecolumns");
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function cmError(transaction, results) { savethefunction_rvar="";
 //Called On failure of Sql command
  NSB.ShowProgress(False);
  NSB.MsgBox("SQL Error");
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

categoryMovementTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
    ChangeForm(MyCategories);
  }
return savethefunction_rvar; }

CategoryMovements.onshow = function() { savethefunction_rvar="";
  grdCategoryMovements.Left = 0;
  grdCategoryMovements.Top = categoryMovementTitle.Height;
  grdCategoryMovements.Height = CategoryMovements.Height - categoryMovementTitle.Height;
  grdCategoryMovements.Width = CategoryMovements.Width;
  LoadCategoryMovements();
return savethefunction_rvar; }

function grdCategoryMovementsReady() { savethefunction_rvar="";
  console.log("Grid load complete");
return savethefunction_rvar; }

grdCategoryMovements.onrowselect = function(event) { savethefunction_rvar="";
   if(event.args.rowindex<0 )  { return savethefunction_rvar; }
   cmData=$("#grdCategoryMovements").jqxGrid("getrowdata" ,event.args.rowindex);
   catKey = cmData.yearon  +  "-"  +  cmData.category;
   lblCatName.textContent = Replace(catKey, "-" , " : ");
   catYear = cmData.yearon;
   catName = cmData.category;
   catFrom = "catmovements";
   ChangeForm(CategoryBudgets);
return savethefunction_rvar; }
window.addEventListener('load', function() {
  CategoryBudgets.style.display = 'block';
  NSB.addProperties(categoryBudgetsTitle);
  NSB.addDisableProperty(categoryBudgetsTitle);
  if(typeof(categoryBudgetsTitle_left)!='undefined') categoryBudgetsTitle_left.onclick=function() {categoryBudgetsTitle.onclick(categoryBudgetsTitle_left.getAttribute('nsbvalue'))};
  if(typeof(categoryBudgetsTitle_right)!='undefined') categoryBudgetsTitle_right.onclick=function() {categoryBudgetsTitle.onclick(categoryBudgetsTitle_right.getAttribute('nsbvalue'))};
grdCategoryBudgets_settings={
altrows:true,
altstart:1,
altstep:1,
autoheight:false,
autoloadstate:false,
autosavestate:false,
autoshowcolumnsmenubutton:true,
autoshowfiltericon:true,
closeablegroups:false,
columnsheight:25,
columnsmenu:false,
columnsmenuwidth:15,
columnsreorder:false,
columnsresize:false,
disabled:false,
editable:false,
editmode:'selectedcell',
enableanimations:true,
enablebrowserselection:false,
enableellipsis:true,
enablehover:true,
enablerowdetailsindent:true,
enabletooltips:false,
filterable:false,
groupable:false,

groupindentwidth:20,
groupsexpandedbydefault:false,
groupsheaderheight:34,


height:'380',
horizontalscrollbarlargestep:50,
horizontalscrollbarstep:5,

keyboardnavigation:true,
pageable:false,
pagerheight:28,

pagesize:10,
ready:function(){ grdCategoryMovementsReady() },




rowdetails:false,
rowdetailstemplate:null,
rowsheight:25,
scrollbarsize:15,
selectedrowindex:-1,
selectionmode:'singlerow',
showaggregates:false,
showemptyrow:true,
showfiltercolumnbackground:true,
showfiltermenuitems:true,
showfilterrow:false,
showgroupmenuitems:true,
showgroupsheader:true,
showheader:true,
showpinnedcolumnbackground:true,
showrowdetailscolumn:true,
showsortcolumnbackground:true,
showsortmenuitems:true,
showstatusbar:false,
showtoolbar:false,
sortable:false,
sorttogglestates:2,
statusbarheight:34,
theme:'energyblue',
toolbarheight:34,
updatedelay:0,
verticalscrollbarlargestep:400,
verticalscrollbarstep:5,
virtualmode:false,
width:'100%',
columns:eval([{text:'Grid'},{text:'Two'},{text:'Three'}]) }
  grdCategoryBudgets.style.position='relative';
  $('#grdCategoryBudgets').jqxGrid (grdCategoryBudgets_settings)
  NSB.addProperties(grdCategoryBudgets,grdCategoryBudgets_wrapper);


  NSB.addProperties(lblCatName);
categoryYearlyChart_settings={'title':'', 'background':'white',
'description':'', 'padding':{ left: 10, top: 10, right: 10, bottom: 10 }, 'titlePadding':{ left: 2, top: 2, right: 2, bottom: 2 },
'colorScheme':'scheme01', 'showLegend':'true', 'enabled':'true',
'showToolTips':'true', 'toolTipDelay':'500' }
categoryYearlyChart.style.position='relative';
NSB.addProperties(categoryYearlyChart,categoryYearlyChart_wrapper);
  CategoryBudgets.style.display = 'none';
}, false);
CategoryBudgets.onsubmit=function(event){window.event.cancelBubble=true;window.event.returnValue=false};
NSB.addProperties(CategoryBudgets);
function LoadCategoryBudgets() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Loading category budgets...");
  sqlList = [];
  sqlList[0] = ["SELECT * FROM [Category_Movement] WHERE Id = '"  +  catKey  +  "'" , cbHandler, cbError];
  Sql(dbObj, sqlList);
}

function cbHandler(transaction, results) { savethefunction_rvar="";
  cmData = [];
  catBudgetChart = [];
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    for   (y = 0; y  <= 11; y ++) {
     var  mName;
     var  ddmmyyyy;
      ddmmyyyy = CStr(Year(dateadd("s",0,new Date())))  +  "-"  +  CStr(y+1)  +  "-01";
      mName = Left(CStr(MonthName(CDate(ddmmyyyy))),3);
     var  row;
      row = {}
      row["period"] = mName;
      row["budget"] = results.rows.item(i)["Budget"  +  mName];
      row["actual"] = results.rows.item(i)["Actual"  +  mName];
      cmData[y] = row;
      catBudgetChart[y] = row;
    }
   var  row;
    row = {}
    row["period"] = "Total";
    row["budget"] = results.rows.item(i)["Budget"];
    row["actual"] = results.rows.item(i)["Actual"];
    cmData[12] = row;
  }
  cmSource = {localdata: cmData, datatype: "array"}
  cmDataAdapter = new $.jqx.dataAdapter(cmSource);
  grdCategoryBudgets_settings.source = cmDataAdapter;
  $("#grdCategoryBudgets").jqxGrid(grdCategoryBudgets_settings);
  $("#grdCategoryBudgets").jqxGrid("autoresizecolumns");

 // define the chart
  categoryYearlyChart_settings.showBorderLine = False;
  categoryYearlyChart_settings.source = catBudgetChart;
  categoryYearlyChart_settings.categoryAxis={dataField:"period" , showGridLines:True,textRotationAngle:-90}
  categoryYearlyChart_settings.seriesGroups = [  {  type: "column" ,  valueAxis:  {description: "Amounts" , formatSettings: {prefix: "" , thousandsSeparator: ","}},  series:[  { dataField: "budget" , displayText: "Budget"},  { dataField: "actual" , displayText: "Actual"},  ]  }  ];
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function cbError(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  NSB.MsgBox("SQL Error");
  document.body.style.cursor = 'default';
return savethefunction_rvar; }


categoryBudgetsTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Chart"):
    catFrom = "catChart";
    grdCategoryBudgets.Visible = False;
    categoryYearlyChart.Visible = True;
    $("#categoryBudgetsTitle h1").text("Category Chart");
 //Render the chart.  
    $("#categoryYearlyChart").jqxChart(categoryYearlyChart_settings);
	break;
  case ((choice) == "Back"):
 //categoryBudgetsTitle.title = "Category Budgets"
    $("#categoryBudgetsTitle h1").text("Category Budgets");
    switch (True) {
      case ((catFrom) == "catChart"):
        grdCategoryBudgets.Visible = True;
        categoryYearlyChart.Visible = False;
        catFrom = "catmovements";
	break;
      case ((catFrom) == "mycategories"):
        ChangeForm(MyCategories);
	break;
      case ((catFrom) == "catmovements"):
        ChangeForm(CategoryMovements);
	break;
    }
  }
return savethefunction_rvar; }



CategoryBudgets.onshow = function() { savethefunction_rvar="";
  lblCatName.Width = CategoryBudgets.Width;
  grdCategoryBudgets.Left = 0;
  grdCategoryBudgets.Top = 75;
  grdCategoryBudgets.Height = CategoryBudgets.Height - 75;
  grdCategoryBudgets.Width = CategoryBudgets.Width;
  grdCategoryBudgets.Visible = True;
 // define chart properties
  categoryYearlyChart.Left = 0;
  categoryYearlyChart.Top = 75;
  categoryYearlyChart.Height = CategoryBudgets.Height - 75;
  categoryYearlyChart.Width = CategoryBudgets.Width;
  categoryYearlyChart.Visible = False;
  LoadCategoryBudgets();
return savethefunction_rvar; }

window.addEventListener('load', function() {
  CategoryPerformance.style.display = 'block';
  NSB.addProperties(catPerformanceTitle);
  NSB.addDisableProperty(catPerformanceTitle);
  if(typeof(catPerformanceTitle_left)!='undefined') catPerformanceTitle_left.onclick=function() {catPerformanceTitle.onclick(catPerformanceTitle_left.getAttribute('nsbvalue'))};
  if(typeof(catPerformanceTitle_right)!='undefined') catPerformanceTitle_right.onclick=function() {catPerformanceTitle.onclick(catPerformanceTitle_right.getAttribute('nsbvalue'))};
catPerformanceChart_settings={'title':'', 'background':'white',
'description':'', 'padding':{ left: 10, top: 10, right: 10, bottom: 10 }, 'titlePadding':{ left: 2, top: 2, right: 2, bottom: 2 },
'colorScheme':'scheme01', 'showLegend':'true', 'enabled':'true',
'showToolTips':'true', 'toolTipDelay':'500' }
catPerformanceChart.style.position='relative';
NSB.addProperties(catPerformanceChart,catPerformanceChart_wrapper);
  CategoryPerformance.style.display = 'none';
}, false);
CategoryPerformance.onsubmit=function(event){window.event.cancelBubble=true;window.event.returnValue=false};
NSB.addProperties(CategoryPerformance);
function LoadCategoryPerformance() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Loading category performance...");
 var  sQRY;
  sqlList = [];
  sQRY = "SELECT AccountName, SUM(Actual) AS Actual FROM Category_Movement WHERE Actual > 0";
  sQRY = sQRY  +  " GROUP BY AccountName ORDER BY Actual DESC";
  sqlList[0] = [sQRY, cpHandler, cpError];
  Sql(dbObj, sqlList);
}

function cpHandler(transaction, results) { savethefunction_rvar="";
  cmData = [];
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    if(i <= 9) {
     var  row;
      row = {}
      row["account"] = results.rows.item(i)["AccountName"];
      row["actual"] = results.rows.item(i)["Actual"];
      cmData[i] = row;
 } else {
       break;
    }
  }
 // define the chart
  catPerformanceChart_settings.showBorderLine = False;
  catPerformanceChart_settings.source = cmData;
  catPerformanceChart_settings.showLegend = False;
  catPerformanceChart_settings.categoryAxis={dataField:"account" , showGridLines:True, textRotationAngle:-90}
  catPerformanceChart_settings.seriesGroups = [  {  type: "column" ,  valueAxis:  {description: "Actual" , formatSettings: {prefix: "" , thousandsSeparator: ","}},  series:[  { dataField: "actual" , displayText: "Actual"},  ]  }  ];
  $("#catPerformanceChart").jqxChart(catPerformanceChart_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function cpError(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  NSB.MsgBox("SQL Error");
  document.body.style.cursor = 'default';
return savethefunction_rvar; }



catPerformanceTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
    ChangeForm(MyCategories);
	break;
  case ((choice) == "Save"):
 // generate an image from the picture
      $("#catPerformanceChart").jqxChart("saveAsPNG" , "mms_categoryperformance.png");
  }
return savethefunction_rvar; }

CategoryPerformance.onshow = function() { savethefunction_rvar="";
  catPerformanceChart.Left = 0;
  catPerformanceChart.Top = catPerformanceTitle.Height;
  catPerformanceChart.Height = CategoryPerformance.Height - catPerformanceTitle.Height;
  catPerformanceChart.Width = CategoryPerformance.Width;
  LoadCategoryPerformance();
return savethefunction_rvar; }

window.addEventListener('load', function() {
  CategoryReport.style.display = 'block';
  NSB.addProperties(catReportTitle);
  NSB.addDisableProperty(catReportTitle);
  if(typeof(catReportTitle_left)!='undefined') catReportTitle_left.onclick=function() {catReportTitle.onclick(catReportTitle_left.getAttribute('nsbvalue'))};
  if(typeof(catReportTitle_right)!='undefined') catReportTitle_right.onclick=function() {catReportTitle.onclick(catReportTitle_right.getAttribute('nsbvalue'))};
grdCatReport_settings={
altrows:true,
altstart:1,
altstep:1,
autoheight:false,
autoloadstate:false,
autosavestate:false,
autoshowcolumnsmenubutton:true,
autoshowfiltericon:true,
closeablegroups:false,
columnsheight:25,
columnsmenu:false,
columnsmenuwidth:15,
columnsreorder:false,
columnsresize:false,
disabled:false,
editable:false,
editmode:'selectedcell',
enableanimations:true,
enablebrowserselection:false,
enableellipsis:true,
enablehover:true,
enablerowdetailsindent:true,
enabletooltips:false,
filterable:false,
groupable:false,

groupindentwidth:20,
groupsexpandedbydefault:false,
groupsheaderheight:34,


height:'415',
horizontalscrollbarlargestep:50,
horizontalscrollbarstep:5,

keyboardnavigation:true,
pageable:false,
pagerheight:28,

pagesize:10,
ready:function(){ grdCategoryMovementsReady() },




rowdetails:false,
rowdetailstemplate:null,
rowsheight:25,
scrollbarsize:15,
selectedrowindex:-1,
selectionmode:'singlerow',
showaggregates:false,
showemptyrow:true,
showfiltercolumnbackground:true,
showfiltermenuitems:true,
showfilterrow:false,
showgroupmenuitems:true,
showgroupsheader:true,
showheader:true,
showpinnedcolumnbackground:true,
showrowdetailscolumn:true,
showsortcolumnbackground:true,
showsortmenuitems:true,
showstatusbar:false,
showtoolbar:false,
sortable:false,
sorttogglestates:2,
statusbarheight:34,
theme:'energyblue',
toolbarheight:34,
updatedelay:0,
verticalscrollbarlargestep:400,
verticalscrollbarstep:5,
virtualmode:false,
width:'100%',
columns:eval([{text:'Grid'},{text:'Two'},{text:'Three'}]) }
  grdCatReport.style.position='relative';
  $('#grdCatReport').jqxGrid (grdCatReport_settings)
  NSB.addProperties(grdCatReport,grdCatReport_wrapper);
  CategoryReport.style.display = 'none';
}, false);
CategoryReport.onsubmit=function(event){window.event.cancelBubble=true;window.event.returnValue=false};
NSB.addProperties(CategoryReport);
var  cTotal;
function LoadCategoryReport() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Loading category report...");
 var  sQRY;
  sqlList = [];
  sQRY = "SELECT AccountName, SUM(Actual) AS Actual FROM Category_Movement WHERE Actual > 0";
  sQRY = sQRY  +  " GROUP BY AccountName ORDER BY Actual DESC";
  sqlList[0] = ["SELECT SUM(Actual) AS Actual FROM Category_Movement WHERE Actual > 0" , crepOk, crepError];
  sqlList[1] = [sQRY, crepHandler, crepError];
  Sql(dbObj, sqlList);
}

 // get the total for all the categories
function crepOk(transaction, results) { savethefunction_rvar="";
  cTotal = results.rows.item(0)["Actual"];
return savethefunction_rvar; }

 // reset the total of all categories
function crepError(transaction, results) { savethefunction_rvar="";
  cTotal = 0;
return savethefunction_rvar; }

 // define the grid data
function crepHandler(transaction, results) { savethefunction_rvar="";
  cmData = [];
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
   var  row;
   var  sPerc = 0;
    row = {}
    row["account"] = results.rows.item(i)["AccountName"];
    row["amount"] = results.rows.item(i)["Actual"];
 //sPerc = Round((CDbl(row["amount"]) / CDbl(sTotal)) * 100, 2)
 //sPerc = row["amount"] / sTotal
    row["percentage"] = sPerc;
    cmData[i] = row;
  }
  cmSource = {localdata: cmData, datatype: "array"}
  cmDataAdapter = new $.jqx.dataAdapter(cmSource);
  grdCatReport_settings.source = cmDataAdapter;
  $("#grdCatReport").jqxGrid(grdCatReport_settings);
  $("#grdCatReport").jqxGrid("autoresizecolumns");
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function crepError(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  NSB.MsgBox("SQL Error");
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

catReportTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
    ChangeForm(MyCategories);
  }
return savethefunction_rvar; }

CategoryReport.onshow = function() { savethefunction_rvar="";
  grdCatReport.Left = 0;
  grdCatReport.Top = catReportTitle.Height;
  grdCatReport.Height = CategoryReport.Height - catReportTitle.Height;
  grdCatReport.Width = CategoryReport.Width;
  LoadCategoryReport();
return savethefunction_rvar; }

window.addEventListener('load', function() {
  frmAccountsList.style.display = 'block';
  NSB.addProperties(accListTitle);
  NSB.addDisableProperty(accListTitle);
  if(typeof(accListTitle_left)!='undefined') accListTitle_left.onclick=function() {accListTitle.onclick(accListTitle_left.getAttribute('nsbvalue'))};
  if(typeof(accListTitle_right)!='undefined') accListTitle_right.onclick=function() {accListTitle.onclick(accListTitle_right.getAttribute('nsbvalue'))};
  NSB.List_jqm_init('lstAccounts','',true,'100%',false);
  lstAccounts_ref = new iScroll('lstAccounts_scroller',{ bounce:true, zoom:false });
  lstAccounts.refresh=function(){if (typeof lstAccounts_ref!='undefined') setTimeout(NSB.refresh,100,lstAccounts_ref)};
  NSB.addProperties(lstAccounts, lstAccounts_scroller);

  frmAccountsList.style.display = 'none';
}, false);
frmAccountsList.onsubmit=function(event){window.event.cancelBubble=true;window.event.returnValue=false};
NSB.addProperties(frmAccountsList);
var  TypeOfList;

function LoadAccounts() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Loading accounts...");
  lstAccounts.Visible = False;
  lstAccounts.deleteItem("all");
  sqlList = [];
  switch (True) {
    case ((TypeOfList) == "all"):
      $("#accListTitle h1").text("Maintain Accounts");
      sqlList[0] = ["SELECT [Name] FROM Accounts ORDER BY [Name]" , accountsOk, accountsError];
	break;
    case ((TypeOfList) == "assets"):
      $("#accListTitle h1").text("My Assets");
      sqlList[0] = ["SELECT [Name] FROM Accounts where TypeOf = 'Assets' ORDER BY [Name]" , accountsOk, accountsError];
	break;
    case ((TypeOfList) == "liabilities"):
      $("#accListTitle h1").text("My Liabilities");
      sqlList[0] = ["SELECT [Name] FROM Accounts where TypeOf = 'Liabilities' ORDER BY [Name]" , accountsOk, accountsError];
	break;
    case ((TypeOfList) == "incomes"):
      $("#accListTitle h1").text("My Incomes");
      sqlList[0] = ["SELECT [Name] FROM Accounts where TypeOf = 'Incomes' ORDER BY [Name]" , accountsOk, accountsError];
	break;
    case ((TypeOfList) == "expenses"):
      $("#accListTitle h1").text("My Expenses");
      sqlList[0] = ["SELECT [Name] FROM Accounts where TypeOf = 'Expenses' ORDER BY [Name]" , accountsOk, accountsError];
  }
  Sql(dbObj, sqlList);
}

function accountsOk(transaction, results) { savethefunction_rvar="";
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    lstAccounts.addItem(results.rows.item(i)["Name"]);
  }
  lstAccounts.Visible = True;
  lstAccounts.refresh;
  lstAccounts.scrollTop;
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function accountsError(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  NSB.MsgBox("SQL Error");
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

accListTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
      ChangeForm(MyAccounts);
  }
return savethefunction_rvar; }

frmAccountsList.onshow = function() { savethefunction_rvar="";
  lstAccounts.Top = accListTitle.Height;
  lstAccounts.Height = frmAccountsList.Height - accListTitle.Height;
  LoadAccounts();
return savethefunction_rvar; }

window.addEventListener('load', function() {
  AccountMovements.style.display = 'block';
  NSB.addProperties(accMovementTitle);
  NSB.addDisableProperty(accMovementTitle);
  if(typeof(accMovementTitle_left)!='undefined') accMovementTitle_left.onclick=function() {accMovementTitle.onclick(accMovementTitle_left.getAttribute('nsbvalue'))};
  if(typeof(accMovementTitle_right)!='undefined') accMovementTitle_right.onclick=function() {accMovementTitle.onclick(accMovementTitle_right.getAttribute('nsbvalue'))};
grdAccountMovements_settings={
altrows:true,
altstart:1,
altstep:1,
autoheight:false,
autoloadstate:false,
autosavestate:false,
autoshowcolumnsmenubutton:true,
autoshowfiltericon:true,
closeablegroups:false,
columnsheight:25,
columnsmenu:false,
columnsmenuwidth:15,
columnsreorder:false,
columnsresize:false,
disabled:false,
editable:false,
editmode:'selectedcell',
enableanimations:true,
enablebrowserselection:false,
enableellipsis:true,
enablehover:true,
enablerowdetailsindent:true,
enabletooltips:false,
filterable:false,
groupable:false,

groupindentwidth:20,
groupsexpandedbydefault:false,
groupsheaderheight:34,


height:'414',
horizontalscrollbarlargestep:50,
horizontalscrollbarstep:5,

keyboardnavigation:true,
pageable:false,
pagerheight:28,

pagesize:10,
ready:function(){ grdCategoryMovementsReady() },




rowdetails:false,
rowdetailstemplate:null,
rowsheight:25,
scrollbarsize:15,
selectedrowindex:-1,
selectionmode:'singlerow',
showaggregates:false,
showemptyrow:true,
showfiltercolumnbackground:true,
showfiltermenuitems:true,
showfilterrow:false,
showgroupmenuitems:true,
showgroupsheader:true,
showheader:true,
showpinnedcolumnbackground:true,
showrowdetailscolumn:true,
showsortcolumnbackground:true,
showsortmenuitems:true,
showstatusbar:false,
showtoolbar:false,
sortable:false,
sorttogglestates:2,
statusbarheight:34,
theme:'energyblue',
toolbarheight:34,
updatedelay:0,
verticalscrollbarlargestep:400,
verticalscrollbarstep:5,
virtualmode:false,
width:'100%',
columns:eval([{text:'Grid'},{text:'Two'},{text:'Three'}]) }
  grdAccountMovements.style.position='relative';
  $('#grdAccountMovements').jqxGrid (grdAccountMovements_settings)
  NSB.addProperties(grdAccountMovements,grdAccountMovements_wrapper);
  AccountMovements.style.display = 'none';
}, false);
AccountMovements.onsubmit=function(event){window.event.cancelBubble=true;window.event.returnValue=false};
NSB.addProperties(AccountMovements);
function LoadAccountMovements() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Loading account movements...");
  sqlList = [];
  sqlList[0] = ["SELECT [YearOn],[AccountName],[Actual] FROM [Accounts_Movement] ORDER BY [YearOn] DESC,AccountName" , amHandler, amError];
  Sql(dbObj, sqlList);
}

function amHandler(transaction, results) { savethefunction_rvar="";
  cmData = [];
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
   var  row;
    row = {}
    row["yearon"] = results.rows.item(i)["YearOn"];
    row["account"] = results.rows.item(i)["AccountName"];
    row["actual"] = results.rows.item(i)["Actual"];
    cmData[i] = row;
  }
  cmSource = {localdata: cmData, datatype: "array"}
  cmDataAdapter = new $.jqx.dataAdapter(cmSource);
  grdAccountMovements_settings.source = cmDataAdapter;
  $("#grdAccountMovements").jqxGrid(grdAccountMovements_settings);
  $("#grdAccountMovements").jqxGrid("autoresizecolumns");
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function amError(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  NSB.MsgBox("SQL Error");
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

accMovementTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
    ChangeForm(MyAccounts);
  }
return savethefunction_rvar; }

AccountMovements.onshow = function() { savethefunction_rvar="";
  grdAccountMovements.Left = 0;
  grdAccountMovements.Top = accMovementTitle.Height;
  grdAccountMovements.Height = AccountMovements.Height - accMovementTitle.Height;
  grdAccountMovements.Width = AccountMovements.Width;
  LoadAccountMovements();
return savethefunction_rvar; }

function grdAccountMovementsReady() { savethefunction_rvar="";
  console.log("Grid load complete");
return savethefunction_rvar; }

grdAccountMovements.onrowselect = function(event) { savethefunction_rvar="";
   if(event.args.rowindex<0 )  { return savethefunction_rvar; }
   cmData=$("#grdAccountMovements").jqxGrid("getrowdata" ,event.args.rowindex);
   catKey = cmData.yearon  +  "-"  +  cmData.account;
   lblAccName.textContent = Replace(catKey, "-" , " : ");
   catYear = cmData.yearon;
   catName = cmData.account;
   catFrom = "accmovements";
   ChangeForm(AccountBudgets);
return savethefunction_rvar; }
window.addEventListener('load', function() {
  AccountBudgets.style.display = 'block';
  NSB.addProperties(accountBudgetsTitle);
  NSB.addDisableProperty(accountBudgetsTitle);
  if(typeof(accountBudgetsTitle_left)!='undefined') accountBudgetsTitle_left.onclick=function() {accountBudgetsTitle.onclick(accountBudgetsTitle_left.getAttribute('nsbvalue'))};
  if(typeof(accountBudgetsTitle_right)!='undefined') accountBudgetsTitle_right.onclick=function() {accountBudgetsTitle.onclick(accountBudgetsTitle_right.getAttribute('nsbvalue'))};
grdAccountBudgets_settings={
altrows:true,
altstart:1,
altstep:1,
autoheight:false,
autoloadstate:false,
autosavestate:false,
autoshowcolumnsmenubutton:true,
autoshowfiltericon:true,
closeablegroups:false,
columnsheight:25,
columnsmenu:false,
columnsmenuwidth:15,
columnsreorder:false,
columnsresize:false,
disabled:false,
editable:false,
editmode:'selectedcell',
enableanimations:true,
enablebrowserselection:false,
enableellipsis:true,
enablehover:true,
enablerowdetailsindent:true,
enabletooltips:false,
filterable:false,
groupable:false,

groupindentwidth:20,
groupsexpandedbydefault:false,
groupsheaderheight:34,


height:'380',
horizontalscrollbarlargestep:50,
horizontalscrollbarstep:5,

keyboardnavigation:true,
pageable:false,
pagerheight:28,

pagesize:10,
ready:function(){ grdCategoryMovementsReady() },




rowdetails:false,
rowdetailstemplate:null,
rowsheight:25,
scrollbarsize:15,
selectedrowindex:-1,
selectionmode:'singlerow',
showaggregates:false,
showemptyrow:true,
showfiltercolumnbackground:true,
showfiltermenuitems:true,
showfilterrow:false,
showgroupmenuitems:true,
showgroupsheader:true,
showheader:true,
showpinnedcolumnbackground:true,
showrowdetailscolumn:true,
showsortcolumnbackground:true,
showsortmenuitems:true,
showstatusbar:false,
showtoolbar:false,
sortable:false,
sorttogglestates:2,
statusbarheight:34,
theme:'energyblue',
toolbarheight:34,
updatedelay:0,
verticalscrollbarlargestep:400,
verticalscrollbarstep:5,
virtualmode:false,
width:'100%',
columns:eval([{text:'Grid'},{text:'Two'},{text:'Three'}]) }
  grdAccountBudgets.style.position='relative';
  $('#grdAccountBudgets').jqxGrid (grdAccountBudgets_settings)
  NSB.addProperties(grdAccountBudgets,grdAccountBudgets_wrapper);


  NSB.addProperties(lblAccName);
accountYearlyChart_settings={'title':'', 'background':'white',
'description':'', 'padding':{ left: 10, top: 10, right: 10, bottom: 10 }, 'titlePadding':{ left: 2, top: 2, right: 2, bottom: 2 },
'colorScheme':'scheme01', 'showLegend':'true', 'enabled':'true',
'showToolTips':'true', 'toolTipDelay':'500' }
accountYearlyChart.style.position='relative';
NSB.addProperties(accountYearlyChart,accountYearlyChart_wrapper);
  AccountBudgets.style.display = 'none';
}, false);
AccountBudgets.onsubmit=function(event){window.event.cancelBubble=true;window.event.returnValue=false};
NSB.addProperties(AccountBudgets);
var  accBudgetChart;

function LoadAccountBudgets() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Loading account budgets...");
  sqlList = [];
  sqlList[0] = ["SELECT * FROM [Accounts_Movement] WHERE Id = '"  +  catKey  +  "'" , abHandler, abError];
  Sql(dbObj, sqlList);
}

function abHandler(transaction, results) { savethefunction_rvar="";
  cmData = [];
  accBudgetChart = [];
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    for   (y = 0; y  <= 11; y ++) {
     var  mName;
     var  ddmmyyyy;
      ddmmyyyy = CStr(Year(dateadd("s",0,new Date())))  +  "-"  +  CStr(y+1)  +  "-01";
      mName = Left(CStr(MonthName(CDate(ddmmyyyy))),3);
     var  row;
      row = {}
      row["period"] = mName;
      row["budget"] = results.rows.item(i)["Budget"  +  mName];
      row["actual"] = results.rows.item(i)["Actual"  +  mName];
      cmData[y] = row;
      accBudgetChart[y] = row;
    }
   var  row;
    row = {}
    row["period"] = "Total";
    row["budget"] = results.rows.item(i)["Budget"];
    row["actual"] = results.rows.item(i)["Actual"];
    cmData[12] = row;
  }
  cmSource = {localdata: cmData, datatype: "array"}
  cmDataAdapter = new $.jqx.dataAdapter(cmSource);
  grdAccountBudgets_settings.source = cmDataAdapter;
  $("#grdAccountBudgets").jqxGrid(grdAccountBudgets_settings);
  $("#grdAccountBudgets").jqxGrid("autoresizecolumns");

 // define the chart
  accountYearlyChart_settings.showBorderLine = False;
  accountYearlyChart_settings.source = accBudgetChart;
  accountYearlyChart_settings.categoryAxis={dataField:"period" , showGridLines:True,textRotationAngle:-90}
  accountYearlyChart_settings.seriesGroups = [  {  type: "column" ,  valueAxis:  {description: "Amounts" , formatSettings: {prefix: "" , thousandsSeparator: ","}},  series:[  { dataField: "budget" , displayText: "Budget"},  { dataField: "actual" , displayText: "Actual"},  ]  }  ];
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function abError(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  NSB.MsgBox("SQL Error");
  document.body.style.cursor = 'default';
return savethefunction_rvar; }


accountBudgetsTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Chart"):
    $("#accountBudgetsTitle h1").text("Account Chart");
    catFrom = "accChart";
    grdAccountBudgets.Visible = False;
    accountYearlyChart.Visible = True;
 //Render the chart.  
    $("#accountYearlyChart").jqxChart(accountYearlyChart_settings);
	break;
  case ((choice) == "Back"):
    $("#accountBudgetsTitle h1").text("Account Budgets");
    switch (True) {
      case ((catFrom) == "accChart"):
        grdAccountBudgets.Visible = True;
        accountYearlyChart.Visible = False;
        catFrom = "accmovements";
	break;
      case ((catFrom) == "myaccounts"):
        ChangeForm(MyAccounts);
	break;
      case ((catFrom) == "accmovements"):
        ChangeForm(AccountMovements);
	break;
    }
  }
return savethefunction_rvar; }



AccountBudgets.onshow = function() { savethefunction_rvar="";
  lblAccName.Width = AccountBudgets.Width;
  grdAccountBudgets.Left = 0;
  grdAccountBudgets.Top = 75;
  grdAccountBudgets.Height = AccountBudgets.Height - 75;
  grdAccountBudgets.Width = AccountBudgets.Width;
  grdAccountBudgets.Visible = True;
 // define chart properties
  accountYearlyChart.Left = 0;
  accountYearlyChart.Top = 75;
  accountYearlyChart.Height = AccountBudgets.Height - 75;
  accountYearlyChart.Width = AccountBudgets.Width;
  accountYearlyChart.Visible = False;
  LoadAccountBudgets();
return savethefunction_rvar; }

window.addEventListener('load', function() {
  AccountPerformance.style.display = 'block';
  NSB.addProperties(accPerformanceTitle);
  NSB.addDisableProperty(accPerformanceTitle);
  if(typeof(accPerformanceTitle_left)!='undefined') accPerformanceTitle_left.onclick=function() {accPerformanceTitle.onclick(accPerformanceTitle_left.getAttribute('nsbvalue'))};
  if(typeof(accPerformanceTitle_right)!='undefined') accPerformanceTitle_right.onclick=function() {accPerformanceTitle.onclick(accPerformanceTitle_right.getAttribute('nsbvalue'))};
accPerformanceChart_settings={'title':'', 'background':'white',
'description':'', 'padding':{ left: 10, top: 10, right: 10, bottom: 10 }, 'titlePadding':{ left: 2, top: 2, right: 2, bottom: 2 },
'colorScheme':'scheme01', 'showLegend':'true', 'enabled':'true',
'showToolTips':'true', 'toolTipDelay':'500' }
accPerformanceChart.style.position='relative';
NSB.addProperties(accPerformanceChart,accPerformanceChart_wrapper);
  AccountPerformance.style.display = 'none';
}, false);
AccountPerformance.onsubmit=function(event){window.event.cancelBubble=true;window.event.returnValue=false};
NSB.addProperties(AccountPerformance);
function LoadAccountPerformance() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Loading account performance...");
 var  sQRY;
  sqlList = [];
  sQRY = "SELECT AccountName, SUM(Actual) AS Actual FROM Accounts_Movement WHERE Actual > 0";
  sQRY = sQRY  +  " GROUP BY AccountName ORDER BY Actual DESC";
  sqlList[0] = [sQRY, apHandler, apError];
  Sql(dbObj, sqlList);
}

function apHandler(transaction, results) { savethefunction_rvar="";
  cmData = [];
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    if(i <= 9) {
     var  row;
      row = {}
      row["account"] = results.rows.item(i)["AccountName"];
      row["actual"] = results.rows.item(i)["Actual"];
      cmData[i] = row;
 } else {
       break;
    }
  }
 // define the chart
  accPerformanceChart_settings.showBorderLine = False;
  accPerformanceChart_settings.source = cmData;
  accPerformanceChart_settings.showLegend = False;
  accPerformanceChart_settings.categoryAxis = {dataField:"account" ,  showGridLines:True, textRotationAngle:-90}
  accPerformanceChart_settings.seriesGroups = [  {  type: "column" ,  valueAxis:  {description: "Actual" , formatSettings: {prefix: "" , thousandsSeparator: ","}},  series:[{ dataField: "actual" , displayText: "Actual"}, ]  }  ];
  $("#accPerformanceChart").jqxChart(accPerformanceChart_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function apError(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  NSB.MsgBox("SQL Error");
  document.body.style.cursor = 'default';
return savethefunction_rvar; }



accPerformanceTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
    ChangeForm(MyAccounts);
  }
return savethefunction_rvar; }

AccountPerformance.onshow = function() { savethefunction_rvar="";
  accPerformanceChart.Left = 0;
  accPerformanceChart.Top = accPerformanceTitle.Height;
  accPerformanceChart.Height = AccountPerformance.Height - accPerformanceTitle.Height;
  accPerformanceChart.Width = AccountPerformance.Width;
  LoadAccountPerformance();
return savethefunction_rvar; }

window.addEventListener('load', function() {
  AccountReport.style.display = 'block';
  NSB.addProperties(accReportTitle);
  NSB.addDisableProperty(accReportTitle);
  if(typeof(accReportTitle_left)!='undefined') accReportTitle_left.onclick=function() {accReportTitle.onclick(accReportTitle_left.getAttribute('nsbvalue'))};
  if(typeof(accReportTitle_right)!='undefined') accReportTitle_right.onclick=function() {accReportTitle.onclick(accReportTitle_right.getAttribute('nsbvalue'))};
grdAccReport_settings={
altrows:true,
altstart:1,
altstep:1,
autoheight:false,
autoloadstate:false,
autosavestate:false,
autoshowcolumnsmenubutton:true,
autoshowfiltericon:true,
closeablegroups:false,
columnsheight:25,
columnsmenu:false,
columnsmenuwidth:15,
columnsreorder:false,
columnsresize:false,
disabled:false,
editable:false,
editmode:'selectedcell',
enableanimations:true,
enablebrowserselection:false,
enableellipsis:true,
enablehover:true,
enablerowdetailsindent:true,
enabletooltips:false,
filterable:false,
groupable:false,

groupindentwidth:20,
groupsexpandedbydefault:false,
groupsheaderheight:34,


height:'416',
horizontalscrollbarlargestep:50,
horizontalscrollbarstep:5,

keyboardnavigation:true,
pageable:false,
pagerheight:28,

pagesize:10,
ready:function(){ grdCategoryMovementsReady() },




rowdetails:false,
rowdetailstemplate:null,
rowsheight:25,
scrollbarsize:15,
selectedrowindex:-1,
selectionmode:'singlerow',
showaggregates:false,
showemptyrow:true,
showfiltercolumnbackground:true,
showfiltermenuitems:true,
showfilterrow:false,
showgroupmenuitems:true,
showgroupsheader:true,
showheader:true,
showpinnedcolumnbackground:true,
showrowdetailscolumn:true,
showsortcolumnbackground:true,
showsortmenuitems:true,
showstatusbar:false,
showtoolbar:false,
sortable:false,
sorttogglestates:2,
statusbarheight:34,
theme:'energyblue',
toolbarheight:34,
updatedelay:0,
verticalscrollbarlargestep:400,
verticalscrollbarstep:5,
virtualmode:false,
width:'100%',
columns:eval([{text:'Grid'},{text:'Two'},{text:'Three'}]) }
  grdAccReport.style.position='relative';
  $('#grdAccReport').jqxGrid (grdAccReport_settings)
  NSB.addProperties(grdAccReport,grdAccReport_wrapper);
  AccountReport.style.display = 'none';
}, false);
AccountReport.onsubmit=function(event){window.event.cancelBubble=true;window.event.returnValue=false};
NSB.addProperties(AccountReport);
function LoadAccountReport() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Loading account report...");
 var  sQRY;
  sqlList = [];
  sQRY = "SELECT AccountName, SUM(Actual) AS Actual FROM Accounts_Movement WHERE Actual > 0";
  sQRY = sQRY  +  " GROUP BY AccountName ORDER BY Actual DESC";
  sqlList[0] = [sQRY, arepHandler, arepError];
  Sql(dbObj, sqlList);
}

function arepHandler(transaction, results) { savethefunction_rvar="";
  cmData = [];
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
   var  row;
    row = {}
    row["account"] = results.rows.item(i)["AccountName"];
    row["amount"] = results.rows.item(i)["Actual"];
    row["percentage"] = 0;
    cmData[i] = row;
  }
  cmSource = {localdata: cmData, datatype: "array"}
  cmDataAdapter = new $.jqx.dataAdapter(cmSource);
  grdAccReport_settings.source = cmDataAdapter;
  $("#grdAccReport").jqxGrid(grdAccReport_settings);
 //$("#grdAccReport.jqx-widget-content").css("font-size","30px");
  $("#grdAccReport").jqxGrid("autoresizecolumns");
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function arepError(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  NSB.MsgBox("SQL Error");
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

accReportTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
    ChangeForm(MyAccounts);
  }
return savethefunction_rvar; }

AccountReport.onshow = function() { savethefunction_rvar="";
  grdAccReport.Left = 0;
  grdAccReport.Top = accReportTitle.Height;
  grdAccReport.Height = AccountReport.Height - accReportTitle.Height;
  grdAccReport.Width = AccountReport.Width;
  LoadAccountReport();
return savethefunction_rvar; }

window.addEventListener('load', function() {
  Splash.style.display = 'block';
  NSB.addProperties(imgSplash);
  Splash.style.display = 'none';
}, false);
Splash.onsubmit=function(event){window.event.cancelBubble=true;window.event.returnValue=false};
NSB.addProperties(Splash);
Splash.onshow = function() { savethefunction_rvar="";
  imgSplash.Top=0;
  imgSplash.Left=0;
  imgSplash.Width = Splash.Width;
  imgSplash.Height = Splash.Height;
  Splash.style.webkitTransitionDuration="3000ms"; //take 1 second to do this.
  Splash.style.webkitTransform="translateX(-"  +  SysInfo(0)  +  "px)"; //slide left
 //Wait for the transition to complete half way before starting form2
  setTimeout(WhatToDoShow,3000);
return savethefunction_rvar; }

function WhatToDoShow() {
 //hide form1 and display form2
  nsbDOMAttr(Splash,'style.display',"none");
  nsbDOMAttr(WhatToDo,'style.display',"block");
  WhatToDo.style.webkitTransform="translateX(0px)";
  ChangeForm(WhatToDo);
}

window.addEventListener('load', function() {
  Splash.style.display = 'block';
  if (typeof(Splash.onshow)=='function') Splash.onshow();
  Main();
  
}, false);

var NSBCurrentForm = Splash;



