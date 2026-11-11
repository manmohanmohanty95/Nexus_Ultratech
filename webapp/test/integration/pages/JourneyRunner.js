sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"project1/test/integration/pages/GatePassHeaderList.gen",
	"project1/test/integration/pages/GatePassHeaderObjectPage.gen",
	"project1/test/integration/pages/GatePassItemObjectPage.gen"
], function (JourneyRunner, GatePassHeaderListGenerated, GatePassHeaderObjectPageGenerated, GatePassItemObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('project1') + '/test/flp.html#app-preview',
        pages: {
			onTheGatePassHeaderListGenerated: GatePassHeaderListGenerated,
			onTheGatePassHeaderObjectPageGenerated: GatePassHeaderObjectPageGenerated,
			onTheGatePassItemObjectPageGenerated: GatePassItemObjectPageGenerated
        },
        async: true
    });

    return runner;
});

