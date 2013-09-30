for(var i = 0; i < 28; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u21'] = 'top';gv_vAlignTable['u23'] = 'center';gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u26'] = 'top';
u27.style.cursor = 'pointer';
$axure.eventManager.click('u27', function(e) {

if (true) {

SetGlobalVariableValue('Noivo', GetWidgetText('u7'));

SetGlobalVariableValue('lugar', GetWidgetText('u10'));

SetGlobalVariableValue('rua', GetWidgetText('u9'));

SetGlobalVariableValue('numero', GetWidgetText('u15'));

SetGlobalVariableValue('estado', GetSelectedOption('u18'));

SetGlobalVariableValue('cidade', GetWidgetText('u20'));

SetGlobalVariableValue('palavraNovos', GetWidgetText('u24'));

SetGlobalVariableValue('noiva', GetWidgetText('u8'));

	self.location.href=$axure.globalVariableProvider.getLinkUrl('CadastroAddItem.html');

}
});
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u6'] = 'top';
u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', function(e) {

if (true) {

}
});
gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u19'] = 'top';