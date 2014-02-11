
PaymentsSingle.innerHTML=[  NSB.MultiInput("MultiInput1", 6, "bigfield", "From Acct,Cur Bal,To Acct,Date,Description,Amount", "", "text,text,text,text,text,text", "From Acct,Cur Bal,To Acct,Date,Description,Amount", " style=  ", false),
  NSB.ComboBox("psFromAccount", "", "1,2", "", ""),
  NSB.ComboBox("psToAccount", "", "1,2", "", ""),
  NSB.ComboBox("psDayOn", "01", "1,2", "", ""),
  NSB.ComboBox("psMonthOn", "Jan", "1,2", "", ""),
  NSB.HeaderBar_jqm14('psTitle', 'Pay', '', 'arrow-l', 'left', '', 'check', 'right', ' style="" class=" "'),
  "<div id='psCurrBal_wrapper'><input id='psCurrBal' type='text' name='' autocorrect='on' autocomplete='on' autocapitalize='on' maxlength='32' value='' placeholder='Current Balance' data-nsb-type='TextBox_jqm'  class='ui-mini ui-btn-  ' readonly/></div>",
  "<div id='psYear_wrapper'><input id='psYear' type='text' name='' autocorrect='on' autocomplete='on' autocapitalize='on' maxlength='32' value='2013' placeholder='Year' data-nsb-type='TextBox_jqm'  class='ui-mini ui-btn-  ' /></div>",
  "<div id='psDescription_wrapper'><input id='psDescription' type='text' name='' autocorrect='on' autocomplete='on' autocapitalize='on' maxlength='32' value='' placeholder='Description' data-nsb-type='TextBox_jqm'  class='ui-mini ui-btn-  ' /></div>",
  "<div id='psAmount_wrapper'><input id='psAmount' type='text' name='' autocorrect='on' autocomplete='on' autocapitalize='on' maxlength='32' value='' placeholder='Amount' data-nsb-type='TextBox_jqm'  class='ui-mini ui-btn-  ' /></div>",
  ].join('');
