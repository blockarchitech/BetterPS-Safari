//
//  SafariExtensionViewController.swift
//  BetterPS Extension
//
//  Created by blockarchitech on 5/8/22.
//

import SafariServices

class SafariExtensionViewController: SFSafariExtensionViewController {
    
    static let shared: SafariExtensionViewController = {
        let shared = SafariExtensionViewController()
        shared.preferredContentSize = NSSize(width:320, height:240)
        return shared
    }()

}
