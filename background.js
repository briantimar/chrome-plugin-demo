chrome.runtime.onInstalled.addListener( function() {
        // store a shade of green under the name 'color'
        chrome.storage.sync.set({color: '#3aa757'}, function() {
            console.log("Color set to green");
        });
        // shows the page action (ie button in the upper right toolbar) whenever the host is developer.chrome.com
        chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
            chrome.declarativeContent.onPageChanged.addRules([{
                conditions: [new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: {hostEquals: 'developer.chrome.com'},
                            })
                        ],
                actions: [new chrome.declarativeContent.ShowPageAction()]
            }]);
        });
});