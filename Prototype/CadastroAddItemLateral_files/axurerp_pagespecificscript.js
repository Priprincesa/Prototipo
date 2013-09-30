for(var i = 0; i < 54; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if (true) {

SetWidgetRichText('u8', '<p style="text-align:left;"><span style="font-family:Arial;font-size:36px;font-weight:normal;font-style:normal;text-decoration:none;color:#333333;">' + (GetGlobalVariableValue('noiva')) + ' e ' + (GetGlobalVariableValue('Noivo')) + '</span></p>');

}

});
gv_vAlignTable['u50'] = 'center';gv_vAlignTable['u52'] = 'top';gv_vAlignTable['u20'] = 'top';gv_vAlignTable['u22'] = 'top';gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u26'] = 'top';gv_vAlignTable['u28'] = 'center';gv_vAlignTable['u30'] = 'top';gv_vAlignTable['u32'] = 'top';gv_vAlignTable['u34'] = 'center';gv_vAlignTable['u36'] = 'top';gv_vAlignTable['u38'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u42'] = 'top';gv_vAlignTable['u40'] = 'center';gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u48'] = 'top';gv_vAlignTable['u46'] = 'top';document.getElementById('u49_img').tabIndex = 0;

u49.style.cursor = 'pointer';
$axure.eventManager.click('u49', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u12'] = 'center';
u13.style.cursor = 'pointer';
$axure.eventManager.click('u13', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('EdicaoLista.html');

}
});
gv_vAlignTable['u16'] = 'center';