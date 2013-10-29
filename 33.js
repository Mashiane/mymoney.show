

if ((navigator.userAgent.indexOf('Safari') === -1) && (navigator.userAgent.indexOf('Chrome') === -1) && (navigator.userAgent.indexOf('MSIE 1') === -1) && (navigator.userAgent.indexOf('BlackBerry') === -1) && (navigator.userAgent.indexOf('RIM') === -1) && (navigator.userAgent.indexOf('Tablet PC') === -1)) {
  alert('Please use Google Chrome, Apple Safari or another supported browser. (' + navigator.userAgent + ')');
}

if (navigator.userAgent.indexOf('iPad') !== -1) {
  var splashscreen = document.createElement('link');
  splashscreen.rel = 'apple-touch-startup-image';
  splashscreen.href = 'C:/adt-bundle/workspace/MyMoney.Show/Files/wallet.png';
  document.getElementsByTagName('head')[0].appendChild(splashscreen);
}

window.addEventListener('load', function() {
  WhatToDo.style.display = 'block';
  NSB.List_jqm_init('lstWhatToDo','My Categories,My Institutions,My Accounts,My Payments,My Reports,Read Me First',true,'100%',false);
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
function Main() {
  NSB.MsgBoxStyle="";
}

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
  }
return savethefunction_rvar; }



WhatToDo.onshow = function() { savethefunction_rvar="";
  lstWhatToDo.Top = hBar.Height;
  lstWhatToDo.Height = WhatToDo.Height - hBar.Height;
return savethefunction_rvar; }

window.addEventListener('load', function() {
  MyCategories.style.display = 'block';
  NSB.List_jqm_init('mycategoriesList','Maintain Categories,Category Movements,Category Charts,Category Performance,Category Report',false,'100%',false);

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
function Main() {
  mycategoriesList.refresh();
}


mycategoriesList.onclick = function(i) { savethefunction_rvar="";
  if(TypeName(i) == "object" )  { return savethefunction_rvar; }
 var  strItem;
  strItem = mycategoriesList.getItem(i);
  switch (True) {
  case ((strItem) == "Maintain Categories"):
    ChangeForm(CategoriesList);
	break;
  case ((strItem) == "Category Movements"):
	break;
  case ((strItem) == "Category Charts"):
	break;
  case ((strItem) == "Category Performance"):
	break;
  case ((strItem) == "Category Report"):
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
  NSB.List_jqm_init('myaccountsList','Maintain Accounts,My Assets,My Liabilites,My Incomes,My Expenses,My Budget,Account Movements,Account Charts,Account Performance',true,'100%',false);
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
function Main() {
  myaccountsList.refresh();
}

myaccountsList.onclick = function(i) { savethefunction_rvar="";
  if(TypeName(i) == "object" )  { return savethefunction_rvar; }
 var  strItem;
  strItem = myaccountsList.getItem(i);
  switch (True) {
  case ((strItem) == "Maintain Accounts"):
	break;
  case ((strItem) == "My Assets"):
	break;
  case ((strItem) == "My Liabilites"):
	break;
  case ((strItem) == "My Incomes"):
	break;
  case ((strItem) == "My Expenses"):
	break;
  case ((strItem) == "My Budget"):
	break;
  case ((strItem) == "Account Movements"):
	break;
  case ((strItem) == "Account Charts"):
	break;
  case ((strItem) == "Account Performance"):
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
function Main() {
  mypaymentsList.refresh();
}

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
function Main() {
  myreportsList.refresh();
}

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

var  insDB;
var  insRecords;

function Main() {
  myinstitutionsList.refresh();
  NSB.MsgBoxStyle="";
}

function LoadInstitutions() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  myinstitutionsList.Top = myinstitutionsTitle.Height;
  myinstitutionsList.Height = MyInstitutions.Height - myinstitutionsTitle.Height;
  NSB.ShowProgress("Loading institutions...");
  myinstitutionsList.deleteItem("all");
  insDB = SqlOpenDatabase("mymoneyshow.db");
  if(insDB == 0) {
    _msgbox_confirm("Error opening db");
  }
 var  sqllist;
  sqllist = [];
  sqllist[0] = ["SELECT [Name] FROM Institutions ORDER BY [Name]" , insHandler, insError];
  Sql(insDB, sqllist);
}

function insHandler(transaction, results) { savethefunction_rvar="";
 //Called On completion of Sql command
  insRecords = results;
  for   (i = 0; i  <= insRecords.rows.length - 1; i ++) {
   var  sCategoryName;
    sCategoryName = insRecords.rows.item(i)["Name"];
    myinstitutionsList.addItem(sCategoryName);
  }
  myinstitutionsList.refresh;
  insDB.close;
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function insError(transaction, results) { savethefunction_rvar="";
 //Called On failure of Sql command
  _msgbox_confirm("SQL Error");
  insDB.close;
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

myinstitutionsList.onclick = function(i) { savethefunction_rvar="";
  if(TypeName(i) == "object" )  { return savethefunction_rvar; }
 var  strItem;
  strItem = myinstitutionsList.getItem(i);
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
    LoadInstitutions();
return savethefunction_rvar; }

function InputInstitution() { savethefunction_rvar="";
  NSB.InputBox(InstitutionInputDone, "Please type the institution below." , "Add Institution" , "");
return savethefunction_rvar; }

function InstitutionInputDone(result, value) {
  if(result==1 && Len(value) > 0) {
    AddInstitutionToDb(value);
    LoadInstitutions();
  }
}

function AddInstitutionToDb(value) {
  catDB = SqlOpenDatabase("mymoneyshow.db");
  if(catDB == 0) {
    _msgbox_confirm("Error opening db");
  }
 var  s;
 var  sqllist;
  sqllist = [];
  s = Join([-1, "'" + value + "'"], ",");
  sqllist[0] = "INSERT INTO Institutions (Id, Name) VALUES ( "  +  s  +  ");";
  Sql(catDB, sqllist);
  catDB.close;
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
var  catDB;
var  catRecords;

function Main() {
  myinstitutionsList.refresh();
  NSB.MsgBoxStyle="";
}

function LoadCategories() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  categoriesListList.Top = categorieslistTitle.Height;
  categoriesListList.Height = CategoriesList.Height - categorieslistTitle.Height;
  NSB.ShowProgress("Loading categories...");
  categoriesListList.deleteItem("all");
  catDB = SqlOpenDatabase("mymoneyshow.db");
  if(catDB == 0) {
    _msgbox_confirm("Error opening db");
  }
 var  sqllist;
  sqllist = [];
  sqllist[0] = ["SELECT CategoryName FROM Categories ORDER BY CategoryName" , catHandler, catError];
  Sql(catDB, sqllist);
}

function catHandler(transaction, results) { savethefunction_rvar="";
 //Called On completion of Sql command
  catRecords = results;
  for   (i = 0; i  <= catRecords.rows.length - 1; i ++) {
   var  sCategoryName;
    sCategoryName = catRecords.rows.item(i)["CategoryName"];
    categoriesListList.addItem(sCategoryName);
  }
  catDB.close;
  NSB.ShowProgress(False);
  categoriesListList.refresh;
  categoriesListList.scrollTop;
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function catError(transaction, results) { savethefunction_rvar="";
 //Called On failure of Sql command
  _msgbox_confirm("SQL Error");
  catDB.close;
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

CategoriesList.onshow = function() { savethefunction_rvar="";
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
    AddCategoryToDb(value);
    LoadCategories();
  }
}

function AddCategoryToDb(value) {
  catDB = SqlOpenDatabase("mymoneyshow.db");
  if(catDB == 0) {
    _msgbox_confirm("Error opening db");
  }
 var  s;
 var  sqllist;
  sqllist = [];
  s = Join([-1, "'" + value + "'" , 0], ",");
  sqllist[0] = "INSERT INTO Categories (CategoryId, CategoryName, Transactions) VALUES ( "  +  s  +  ");";
  Sql(catDB, sqllist);
  catDB.close;
}

window.addEventListener('load', function() {
  WhatToDo.style.display = 'block';
  if (typeof(WhatToDo.onshow)=='function') WhatToDo.onshow();
  Main();
  
}, false);

var NSBCurrentForm = WhatToDo;


