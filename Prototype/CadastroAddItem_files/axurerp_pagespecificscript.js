for(var i = 0; i < 25; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetWidgetRichText('u8', '<p style="text-align:left;"><span style="font-family:Arial;font-size:36px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('Noivo')) + ' e ' + (GetGlobalVariableValue('noiva')) + '</span></p>');

}

});
gv_vAlignTable['u20'] = 'top';
u17.style.cursor = 'pointer';
$axure.eventManager.click('u17', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('CadastroAddItemBusca.html');

}
});
gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u22'] = 'top';gv_vAlignTable['u24'] = 'center';