
Account.innerHTML=[  NSB.MultiInput("MultiInput2", 9, "smallfield", "", "Account #,Name,Category,Institution,Open. Bal.,Curr. Bal.,Installment,Type,Pay From", "", "", " style=  ", false),
  NSB.ComboBox("cboAccountCategory", "", "1,2", "", ""),
  NSB.ComboBox("cboAccountInstitution", "", "1,2", "", ""),
  NSB.ComboBox("cboAccountType", "", "1,2", "", ""),
  NSB.HeaderBar_jqm14('accTitle', 'Account', '', 'arrow-l', 'left', '', 'check', 'right', ' style="" class=" "'),
  "<div id='txtAccountNo_wrapper'><input id='txtAccountNo' type='text' name='' autocorrect='on' autocomplete='on' autocapitalize='on' maxlength='32' value='' placeholder='Account No' data-nsb-type='TextBox_jqm'  class='ui-mini ui-btn-  ' /></div>",
  "<div id='txtAccountName_wrapper'><input id='txtAccountName' type='text' name='' autocorrect='on' autocomplete='on' autocapitalize='on' maxlength='32' value='' placeholder='Account Name' data-nsb-type='TextBox_jqm'  class='ui-mini ui-btn-  ' /></div>",
  "<div id='txtAccountOpenBal_wrapper'><input id='txtAccountOpenBal' type='text' name='' autocorrect='on' autocomplete='on' autocapitalize='on' maxlength='32' value='' placeholder='Opening Balance' data-nsb-type='TextBox_jqm'  class='ui-mini ui-btn-  ' /></div>",
  "<div id='txtAccountCurrBal_wrapper'><input id='txtAccountCurrBal' type='text' name='' autocorrect='on' autocomplete='on' autocapitalize='on' maxlength='32' value='' placeholder='Current Balance' data-nsb-type='TextBox_jqm'  class='ui-mini ui-btn-  ' /></div>",
  "<div id='txtAccountInstallment_wrapper'><input id='txtAccountInstallment' type='text' name='' autocorrect='on' autocomplete='on' autocapitalize='on' maxlength='32' value='' placeholder='Installment' data-nsb-type='TextBox_jqm'  class='ui-mini ui-btn-  ' /></div>",
  "<div id='chkAccountPayFrom' style=''><select id='chkAccountPayFrom_inner' name='chkAccountPayFrom' data-role=flipswitch  data-corners='' style='' class=' '><option>No</option><option>Yes</option></select></div>",
  ].join('');
