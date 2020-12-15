(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{695:function(e,t,r){"use strict";r.r(t);var n=r(1),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"adr-061-p2p-refactor-scope"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#adr-061-p2p-refactor-scope"}},[e._v("#")]),e._v(" ADR 061: P2P Refactor Scope")]),e._v(" "),r("h2",{attrs:{id:"changelog"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),r("ul",[r("li",[e._v("2020-10-30: Initial version (@erikgrinaker)")])]),e._v(" "),r("h2",{attrs:{id:"context"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),r("p",[e._v("The "),r("code",[e._v("p2p")]),e._v(" package responsible for peer-to-peer networking is rather old and has a number of weaknesses, including tight coupling, leaky abstractions, lack of tests, DoS vulnerabilites, poor performance, custom protocols, and incorrect behavior. A refactor has been discussed for several years ("),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/2067",target:"_blank",rel:"noopener noreferrer"}},[e._v("#2067"),r("OutboundLink")],1),e._v(").")]),e._v(" "),r("p",[e._v("Informal Systems are also building a Rust implementation of Tendermint, "),r("a",{attrs:{href:"https://github.com/informalsystems/tendermint-rs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint-rs"),r("OutboundLink")],1),e._v(", and plan to implement P2P networking support over the next year. As part of this work, they have requested adopting e.g. "),r("a",{attrs:{href:"https://datatracker.ietf.org/doc/draft-ietf-quic-transport/",target:"_blank",rel:"noopener noreferrer"}},[e._v("QUIC"),r("OutboundLink")],1),e._v(" as a transport protocol instead of implementing the custom application-level "),r("code",[e._v("MConnection")]),e._v(" stream multiplexing protocol that Tendermint currently uses.")]),e._v(" "),r("p",[e._v("This ADR summarizes recent discussion with stakeholders on the scope of a P2P refactor. Specific designs and implementations will be submitted as separate ADRs.")]),e._v(" "),r("h2",{attrs:{id:"alternative-approaches"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#alternative-approaches"}},[e._v("#")]),e._v(" Alternative Approaches")]),e._v(" "),r("p",[e._v("There have been recurring proposals to adopt "),r("a",{attrs:{href:"https://libp2p.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("LibP2P"),r("OutboundLink")],1),e._v(" instead of maintaining our own P2P networking stack (see "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/3696",target:"_blank",rel:"noopener noreferrer"}},[e._v("#3696"),r("OutboundLink")],1),e._v("). While this appears to be a good idea in principle, it would be a highly breaking protocol change, there are indications that we might have to fork and modify LibP2P, and there are concerns about the abstractions used.")]),e._v(" "),r("p",[e._v("In discussions with Informal Systems we decided to begin with incremental improvements to the current P2P stack, add support for pluggable transports, and then gradually start experimenting with LibP2P as a transport layer. If this proves successful, we can consider adopting it for higher-level components at a later time.")]),e._v(" "),r("h2",{attrs:{id:"decision"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),r("p",[e._v("The P2P stack will be refactored and improved iteratively, in several phases:")]),e._v(" "),r("ul",[r("li",[r("p",[r("strong",[e._v("Phase 1:")]),e._v(" code and API refactoring, maintaining protocol compatibility as far as possible.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Phase 2:")]),e._v(" additional transports and incremental protocol improvements.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("Phase 3:")]),e._v(" disruptive protocol changes.")])])]),e._v(" "),r("p",[e._v("The scope of phases 2 and 3 is still uncertain, and will be revisited once the preceding phases have been completed as we'll have a better sense of requirements and challenges.")]),e._v(" "),r("h2",{attrs:{id:"detailed-design"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#detailed-design"}},[e._v("#")]),e._v(" Detailed Design")]),e._v(" "),r("p",[e._v("Separate ADRs will be submitted for specific designs and changes in each phase, following research and prototyping. Below are objectives in order of priority.")]),e._v(" "),r("h3",{attrs:{id:"phase-1-code-and-api-refactoring"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#phase-1-code-and-api-refactoring"}},[e._v("#")]),e._v(" Phase 1: Code and API Refactoring")]),e._v(" "),r("p",[e._v("This phase will focus on improving the internal abstractions and implementations in the "),r("code",[e._v("p2p")]),e._v(" package. As far as possible, it should not change the P2P protocol in a backwards-incompatible way.")]),e._v(" "),r("ul",[r("li",[e._v("Cleaner, decoupled abstractions for e.g. "),r("code",[e._v("Reactor")]),e._v(", "),r("code",[e._v("Switch")]),e._v(", and "),r("code",[e._v("Peer")]),e._v(". "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/2067",target:"_blank",rel:"noopener noreferrer"}},[e._v("#2067"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/5287",target:"_blank",rel:"noopener noreferrer"}},[e._v("#5287"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/3833",target:"_blank",rel:"noopener noreferrer"}},[e._v("#3833"),r("OutboundLink")],1),e._v(" "),r("ul",[r("li",[e._v("Reactors should receive messages in separate goroutines or via buffered channels. "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/2888",target:"_blank",rel:"noopener noreferrer"}},[e._v("#2888"),r("OutboundLink")],1)])])]),e._v(" "),r("li",[e._v("Improved peer lifecycle management. "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/3679",target:"_blank",rel:"noopener noreferrer"}},[e._v("#3679"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/3719",target:"_blank",rel:"noopener noreferrer"}},[e._v("#3719"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/3653",target:"_blank",rel:"noopener noreferrer"}},[e._v("#3653"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/3540",target:"_blank",rel:"noopener noreferrer"}},[e._v("#3540"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/3183",target:"_blank",rel:"noopener noreferrer"}},[e._v("#3183"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/3081",target:"_blank",rel:"noopener noreferrer"}},[e._v("#3081"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/1356",target:"_blank",rel:"noopener noreferrer"}},[e._v("#1356"),r("OutboundLink")],1),e._v(" "),r("ul",[r("li",[e._v("Peer prioritization. "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/2860",target:"_blank",rel:"noopener noreferrer"}},[e._v("#2860"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/2041",target:"_blank",rel:"noopener noreferrer"}},[e._v("#2041"),r("OutboundLink")],1)])])]),e._v(" "),r("li",[e._v("Pluggable transports, with "),r("code",[e._v("MConnection")]),e._v(" as one implementation. "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/5587",target:"_blank",rel:"noopener noreferrer"}},[e._v("#5587"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/2430",target:"_blank",rel:"noopener noreferrer"}},[e._v("#2430"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/805",target:"_blank",rel:"noopener noreferrer"}},[e._v("#805"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Improved peer address handling.\n"),r("ul",[r("li",[e._v("Address book refactor. "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/4848",target:"_blank",rel:"noopener noreferrer"}},[e._v("#4848"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/2661",target:"_blank",rel:"noopener noreferrer"}},[e._v("#2661"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Transport-agnostic peer addressing. "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/5587",target:"_blank",rel:"noopener noreferrer"}},[e._v("#5587"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/3782",target:"_blank",rel:"noopener noreferrer"}},[e._v("#3782"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/3692",target:"_blank",rel:"noopener noreferrer"}},[e._v("#3692"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Improved detection and advertisement of own address. "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/5588",target:"_blank",rel:"noopener noreferrer"}},[e._v("#5588"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/4260",target:"_blank",rel:"noopener noreferrer"}},[e._v("#4260"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/3716",target:"_blank",rel:"noopener noreferrer"}},[e._v("#3716"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/1727",target:"_blank",rel:"noopener noreferrer"}},[e._v("#1727"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Support multiple IPs per peer. "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/1521",target:"_blank",rel:"noopener noreferrer"}},[e._v("#1521"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/2317",target:"_blank",rel:"noopener noreferrer"}},[e._v("#2317"),r("OutboundLink")],1)])])])]),e._v(" "),r("p",[e._v("The refactor should attempt to address the following secondary objectives: testability, observability, performance, security, quality-of-service, backpressure, and DoS resilience. Much of this will be revisited as explicit objectives in phase 2.")]),e._v(" "),r("p",[e._v("Ideally, the refactor should happen incrementally, with regular merges to "),r("code",[e._v("master")]),e._v(" every few weeks. This will take more time overall, and cause frequent breaking changes to internal Go APIs, but it reduces the branch drift and gets the code tested sooner and more broadly.")]),e._v(" "),r("h3",{attrs:{id:"phase-2-additional-transports-and-protocol-improvements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#phase-2-additional-transports-and-protocol-improvements"}},[e._v("#")]),e._v(" Phase 2: Additional Transports and Protocol Improvements")]),e._v(" "),r("p",[e._v("This phase will focus on protocol improvements and other breaking changes. The following are considered proposals that will need to be evaluated separately once the refactor is done. Additional proposals are likely to be added during phase 1.")]),e._v(" "),r("ul",[r("li",[e._v("QUIC transport. "),r("a",{attrs:{href:"https://github.com/tendermint/spec/issues/198",target:"_blank",rel:"noopener noreferrer"}},[e._v("#198"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Noise protocol for secret connection handshake. "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/5589",target:"_blank",rel:"noopener noreferrer"}},[e._v("#5589"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/3340",target:"_blank",rel:"noopener noreferrer"}},[e._v("#3340"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Peer ID in connection handshake. "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/5590",target:"_blank",rel:"noopener noreferrer"}},[e._v("#5590"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Peer and service discovery (e.g. RPC nodes, state sync snapshots). "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/5481",target:"_blank",rel:"noopener noreferrer"}},[e._v("#5481"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/4583",target:"_blank",rel:"noopener noreferrer"}},[e._v("#4583"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Rate-limiting, backpressure, and QoS scheduling. "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/4753",target:"_blank",rel:"noopener noreferrer"}},[e._v("#4753"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/2338",target:"_blank",rel:"noopener noreferrer"}},[e._v("#2338"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Compression. "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/2375",target:"_blank",rel:"noopener noreferrer"}},[e._v("#2375"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Improved metrics and tracing. "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/3849",target:"_blank",rel:"noopener noreferrer"}},[e._v("#3849"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/2600",target:"_blank",rel:"noopener noreferrer"}},[e._v("#2600"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Simplified P2P configuration options.")])]),e._v(" "),r("h3",{attrs:{id:"phase-3-disruptive-protocol-changes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#phase-3-disruptive-protocol-changes"}},[e._v("#")]),e._v(" Phase 3: Disruptive Protocol Changes")]),e._v(" "),r("p",[e._v("This phase covers speculative, wide-reaching proposals that are poorly defined and highly uncertain. They will be evaluated once the previous phases are done.")]),e._v(" "),r("ul",[r("li",[e._v("Adopt LibP2P. "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/3696",target:"_blank",rel:"noopener noreferrer"}},[e._v("#3696"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Allow cross-reactor communication, possibly without channels.")]),e._v(" "),r("li",[e._v("Dynamic channel advertisment, as reactors are enabled/disabled. "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/4394",target:"_blank",rel:"noopener noreferrer"}},[e._v("#4394"),r("OutboundLink")],1),e._v(" "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/1148",target:"_blank",rel:"noopener noreferrer"}},[e._v("#1148"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Pubsub-style networking topology and pattern.")]),e._v(" "),r("li",[e._v("Support multiple chain IDs in the same network.")])]),e._v(" "),r("h2",{attrs:{id:"status"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),r("p",[e._v("Accepted")]),e._v(" "),r("h2",{attrs:{id:"consequences"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),r("h3",{attrs:{id:"positive"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Cleaner, simpler architecture that's easier to reason about and test, and thus hopefully less buggy.")])]),e._v(" "),r("li",[r("p",[e._v("Improved performance and robustness.")])]),e._v(" "),r("li",[r("p",[e._v("Reduced maintenance burden and increased interoperability by the possible adoption of standardized protocols such as QUIC and Noise.")])]),e._v(" "),r("li",[r("p",[e._v("Improved usability, with better observability, simpler configuration, and more automation (e.g. peer/service/address discovery, rate-limiting, and backpressure).")])])]),e._v(" "),r("h3",{attrs:{id:"negative"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("Maintaining our own P2P networking stack is resource-intensive.")])]),e._v(" "),r("li",[r("p",[e._v("Abstracting away the underlying transport may prevent usage of advanced transport features.")])]),e._v(" "),r("li",[r("p",[e._v("Breaking changes to APIs and protocols are disruptive to users.")])])]),e._v(" "),r("h2",{attrs:{id:"references"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),r("p",[e._v("See issue links above.")]),e._v(" "),r("ul",[r("li",[r("p",[r("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/2067",target:"_blank",rel:"noopener noreferrer"}},[e._v("#2067: P2P Refactor"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://docs.google.com/document/d/1FUTADZyLnwA9z7ndayuhAdAFRKujhh_y73D0ZFdKiOQ/edit?pli=1#",target:"_blank",rel:"noopener noreferrer"}},[e._v("P2P refactor brainstorm document"),r("OutboundLink")],1)])])])])}),[],!1,null,null,null);t.default=a.exports}}]);