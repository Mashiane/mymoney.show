
Account.innerHTML=[  NSB.MultiInput("MultiInput2", 9, "smallfield", "", "Account #,Name,Category,Institution,Open. Bal.,Curr. Bal.,Installment,Type,Pay From", "", "", " style=  ", false),
  NSB.HeaderBar_jqm("accTitle", "Account", "Back", "arrow-l", "Save", "check", " data-theme=b style='' class=' ' "),
  "<div id='txtAccountNo_wrapper'><input id='txtAccountNo' type='text' data-theme='b' name='' autocorrect='on' autocomplete='on' autocapitalize='on' maxlength='32' value='' placeholder='Account No' data-mini='true' data-nsb-type='TextBox_jqm' class=' ' /></div>",
  "<div id='txtAccountName_wrapper'><input id='txtAccountName' type='text' data-theme='b' name='' autocorrect='on' autocomplete='on' autocapitalize='on' maxlength='32' value='' placeholder='Account Name' data-mini='true' data-nsb-type='TextBox_jqm' class=' ' /></div>",
  NSB.ComboBox("cboAccountCategory", "", "1,2", "", ""),
  NSB.ComboBox("cboAccountInstitution", "", "1,2", "", ""),
  "<div id='txtAccountOpenBal_wrapper'><input id='txtAccountOpenBal' type='text' data-theme='b' name='' autocorrect='on' autocomplete='on' autocapitalize='on' maxlength='32' value='' placeholder='Opening Balance' data-mini='true' data-nsb-type='TextBox_jqm' class=' ' /></div>",
  "<div id='txtAccountCurrBal_wrapper'><input id='txtAccountCurrBal' type='text' data-theme='b' name='' autocorrect='on' autocomplete='on' autocapitalize='on' maxlength='32' value='' placeholder='Current Balance' data-mini='true' data-nsb-type='TextBox_jqm' class=' ' /></div>",
  "<div id='txtAccountInstallment_wrapper'><input id='txtAccountInstallment' type='text' data-theme='b' name='' autocorrect='on' autocomplete='on' autocapitalize='on' maxlength='32' value='' placeholder='Installment' data-mini='true' data-nsb-type='TextBox_jqm' class=' ' /></div>",
  NSB.ComboBox("cboAccountType", "", "1,2", "", ""),
  "<div id='chkAccountPayFrom' style=''><select id='chkAccountPayFrom_inner' name='chkAccountPayFrom' data-role=slider  data-theme=c style='' class=' '><option>No</option><option>Yes</option></select></div>",
  ].join('');
