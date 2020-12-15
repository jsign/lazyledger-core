(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{678:function(e,t,a){"use strict";a.r(t);var o=a(1),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"fork-accountability"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fork-accountability"}},[e._v("#")]),e._v(" Fork accountability")]),e._v(" "),a("h2",{attrs:{id:"problem-statement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#problem-statement"}},[e._v("#")]),e._v(" Problem Statement")]),e._v(" "),a("p",[e._v("Tendermint consensus guarantees the following specifications for all heights:")]),e._v(" "),a("ul",[a("li",[e._v("agreement -- no two correct full nodes decide differently.")]),e._v(" "),a("li",[e._v("validity -- the decided block satisfies the predefined predicate "),a("em",[e._v("valid()")]),e._v(".")]),e._v(" "),a("li",[e._v("termination -- all correct full nodes eventually decide,")])]),e._v(" "),a("p",[e._v("if the\nfaulty validators have less than 1/3 of voting power in the current validator set. In the case where this assumption\ndoes not hold, each of the specification may be violated.")]),e._v(" "),a("p",[e._v("The agreement property says that for a given height, any two correct validators that decide on a block for that height decide on the same block. That the block was indeed generated by the blockchain, can be verified starting from a trusted (genesis) block, and checking that all subsequent blocks are properly signed.")]),e._v(" "),a("p",[e._v('However, faulty nodes may forge blocks and try to convince users (light clients) that the blocks had been correctly generated. In addition, Tendermint agreement might be violated in the case where 1/3 or more of the voting power belongs to faulty validators: Two correct validators decide on different blocks. The latter case motivates the term "fork": as Tendermint consensus also agrees on the next validator set, correct validators may have decided on disjoint next validator sets, and the chain branches into two or more partitions (possibly having faulty validators in common) and each branch continues to generate blocks independently of the other.')]),e._v(" "),a("p",[e._v("We say that a fork is a case in which there are two commits for different blocks at the same height of the blockchain. The proplem is to ensure that in those cases we are able to detect faulty validators (and not mistakenly accuse correct validators), and incentivize therefore validators to behave according to the protocol specification.")]),e._v(" "),a("p",[a("strong",[e._v("Conceptual Limit.")]),e._v(" In order to prove misbehavior of a node, we have to show that the behavior deviates from correct behavior with respect to a given algorithm. Thus, an algorithm that detects misbehavior of nodes executing some algorithm "),a("em",[e._v("A")]),e._v(" must be defined with respect to algorithm "),a("em",[e._v("A")]),e._v(". In our case, "),a("em",[e._v("A")]),e._v(" is Tendermint consensus (+ other protocols in the infrastructure; e.g.,full nodes and the Light Client). If the consensus algorithm is changed/updated/optimized in the future, we have to check whether changes to the accountability algorithm are also required. All the discussions in this document are thus inherently specific to Tendermint consensus and the Light Client specification.")]),e._v(" "),a("p",[a("strong",[e._v("Q:")]),e._v(" Should we distinguish agreement for validators and full nodes for agreement? The case where all correct validators agree on a block, but a correct full node decides on a different block seems to be slightly less severe that the case where two correct validators decide on different blocks. Still, if a contaminated full node becomes validator that may be problematic later on. Also it is not clear how gossiping is impaired if a contaminated full node is on a different branch.")]),e._v(" "),a("p",[a("em",[e._v("Remark.")]),e._v(" In the case 1/3 or more of the voting power belongs to faulty validators, also validity and termination can be broken. Termination can be broken if faulty processes just do not send the messages that are needed to make progress. Due to asynchrony, this is not punishable, because faulty validators can always claim they never received the messages that would have forced them to send messages.")]),e._v(" "),a("h2",{attrs:{id:"the-misbehavior-of-faulty-validators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-misbehavior-of-faulty-validators"}},[e._v("#")]),e._v(" The Misbehavior of Faulty Validators")]),e._v(" "),a("p",[e._v("Forks are the result of faulty validators deviating from the protocol. In principle several such deviations can be detected without a fork actually occurring:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("double proposal: A faulty proposer proposes two different values (blocks) for the same height and the same round in Tendermint consensus.")])]),e._v(" "),a("li",[a("p",[e._v("double signing: Tendermint consensus forces correct validators to prevote and precommit for at most one value per round. In case a faulty validator sends multiple prevote and/or precommit messages for different values for the same height/round, this is a misbehavior.")])]),e._v(" "),a("li",[a("p",[e._v("lunatic validator: Tendermint consensus forces correct validators to prevote and precommit only for values "),a("em",[e._v("v")]),e._v(" that satisfy "),a("em",[e._v("valid(v)")]),e._v(". If faulty validators prevote and precommit for "),a("em",[e._v("v")]),e._v(" although "),a("em",[e._v("valid(v)=false")]),e._v(" this is misbehavior.")])])]),e._v(" "),a("p",[a("em",[e._v("Remark.")]),e._v(" In isolation, Point 3 is an attack on validity (rather than agreement). However, the prevotes and precommits can then also be used to forge blocks.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("amnesia: Tendermint consensus has a locking mechanism. If a validator has some value v locked, then it can only prevote/precommit for v or nil. Sending prevote/precomit message for a different value v' (that is not nil) while holding lock on value v is misbehavior.")])]),e._v(" "),a("li",[a("p",[e._v("spurious messages: In Tendermint consensus most of the message send instructions are guarded by threshold guards, e.g., one needs to receive "),a("em",[e._v("2f + 1")]),e._v(" prevote messages to send precommit. Faulty validators may send precommit without having received the prevote messages.")])])]),e._v(" "),a("p",[e._v("Independently of a fork happening, punishing this behavior might be important to prevent forks altogether. This should keep attackers from misbehaving: if less than 1/3 of the voting power is faulty, this misbehavior is detectable but will not lead to a safety violation. Thus, unless they have 1/3 or more (or in some cases more than 2/3) of the voting power attackers have the incentive to not misbehave. If attackers control too much voting power, we have to deal with forks, as discussed in this document.")]),e._v(" "),a("h2",{attrs:{id:"two-types-of-forks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#two-types-of-forks"}},[e._v("#")]),e._v(" Two types of forks")]),e._v(" "),a("ul",[a("li",[e._v("Fork-Full. Two correct validators decide on different blocks for the same height. Since also the next validator sets are decided upon, the correct validators may be partitioned to participate in two distinct branches of the forked chain.")])]),e._v(" "),a("p",[e._v("As in this case we have two different blocks (both having the same right/no right to exist), a central system invariant (one block per height decided by correct validators) is violated. As full nodes are contaminated in this case, the contamination can spread also to light clients. However, even without breaking this system invariant, light clients can be subject to a fork:")]),e._v(" "),a("ul",[a("li",[e._v("Fork-Light. All correct validators decide on the same block for height "),a("em",[e._v("h")]),e._v(", but faulty processes (validators or not), forge a different block for that height, in order to fool users (who use the light client).")])]),e._v(" "),a("h1",{attrs:{id:"attack-scenarios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attack-scenarios"}},[e._v("#")]),e._v(" Attack scenarios")]),e._v(" "),a("h2",{attrs:{id:"on-chain-attacks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#on-chain-attacks"}},[e._v("#")]),e._v(" On-chain attacks")]),e._v(" "),a("h3",{attrs:{id:"equivocation-one-round"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#equivocation-one-round"}},[e._v("#")]),e._v(" Equivocation (one round)")]),e._v(" "),a("p",[e._v("There are several scenarios in which forks might happen. The first is double signing within a round.")]),e._v(" "),a("ul",[a("li",[e._v("F1. Equivocation: faulty validators sign multiple vote messages (prevote and/or precommit) for different values "),a("em",[e._v("during the same round r")]),e._v(" at a given height h.")])]),e._v(" "),a("h3",{attrs:{id:"flip-flopping"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flip-flopping"}},[e._v("#")]),e._v(" Flip-flopping")]),e._v(" "),a("p",[e._v("Tendermint consensus implements a locking mechanism: If a correct validator "),a("em",[e._v("p")]),e._v(" receives proposal for value v and "),a("em",[e._v("2f + 1")]),e._v(" prevotes for a value "),a("em",[e._v("id(v)")]),e._v(" in round "),a("em",[e._v("r")]),e._v(", it locks "),a("em",[e._v("v")]),e._v(" and remembers "),a("em",[e._v("r")]),e._v(". In this case, "),a("em",[e._v("p")]),e._v(" also sends a precommit message for "),a("em",[e._v("id(v)")]),e._v(", which later may serve as proof that "),a("em",[e._v("p")]),e._v(" locked "),a("em",[e._v("v")]),e._v(".\nIn subsequent rounds, "),a("em",[e._v("p")]),e._v(" only sends prevote messages for a value it had previously locked. However, it is possible to change the locked value if in a future round "),a("em",[e._v("r' > r")]),e._v(", if the process receives proposal and "),a("em",[e._v("2f + 1")]),e._v(" prevotes for a different value "),a("em",[e._v("v'")]),e._v(". In this case, "),a("em",[e._v("p")]),e._v(" could send a prevote/precommit for "),a("em",[e._v("id(v')")]),e._v(". This algorithmic feature can be exploited in two ways:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("F2. Faulty Flip-flopping (Amnesia): faulty validators precommit some value "),a("em",[e._v("id(v)")]),e._v(" in round "),a("em",[e._v("r")]),e._v(" (value "),a("em",[e._v("v")]),e._v(" is locked in round "),a("em",[e._v("r")]),e._v(") and then prevote for different value "),a("em",[e._v("id(v')")]),e._v(" in higher round "),a("em",[e._v("r' > r")]),e._v(" without previously correctly unlocking value "),a("em",[e._v("v")]),e._v('. In this case faulty processes "forget" that they have locked value '),a("em",[e._v("v")]),e._v(" and prevote some other value in the following rounds.\nSome correct validators might have decided on "),a("em",[e._v("v")]),e._v(" in "),a("em",[e._v("r")]),e._v(", and other correct validators decide on "),a("em",[e._v("v'")]),e._v(" in "),a("em",[e._v("r'")]),e._v(". Here we can have branching on the main chain (Fork-Full).")])]),e._v(" "),a("li",[a("p",[e._v("F3. Correct Flip-flopping (Back to the past): There are some precommit messages signed by (correct) validators for value "),a("em",[e._v("id(v)")]),e._v(" in  round "),a("em",[e._v("r")]),e._v(". Still, "),a("em",[e._v("v")]),e._v(" is not decided upon, and all processes move on to the next round. Then correct validators (correctly) lock and decide a different value "),a("em",[e._v("v'")]),e._v(" in some round "),a("em",[e._v("r' > r")]),e._v(". And the correct validators continue; there is no branching on the main chain.\nHowever, faulty validators may use the correct precommit messages from round "),a("em",[e._v("r")]),e._v(" together with a posteriori generated faulty precommit messages for round "),a("em",[e._v("r")]),e._v(" to forge a block for a value that was not decided on the main chain (Fork-Light).")])])]),e._v(" "),a("h2",{attrs:{id:"off-chain-attacks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#off-chain-attacks"}},[e._v("#")]),e._v(" Off-chain attacks")]),e._v(" "),a("p",[e._v("F1-F3 may contaminate the state of full nodes (and even validators). Contaminated (but otherwise correct) full nodes may thus communicate faulty blocks to light clients.\nSimilarly, without actually interfering with the main chain, we can have the following:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("F4. Phantom validators: faulty validators vote (sign prevote and precommit messages) in heights in which they are not part of the validator sets (at the main chain).")])]),e._v(" "),a("li",[a("p",[e._v("F5. Lunatic validator: faulty validator that sign vote messages to support (arbitrary) application state that is different from the application state that resulted from valid state transitions.")])])]),e._v(" "),a("h2",{attrs:{id:"types-of-victims"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#types-of-victims"}},[e._v("#")]),e._v(" Types of victims")]),e._v(" "),a("p",[e._v("We consider three types of potential attack victims:")]),e._v(" "),a("ul",[a("li",[e._v("FN: full node")]),e._v(" "),a("li",[e._v("LCS: light client with sequential header verification")]),e._v(" "),a("li",[e._v("LCB: light client with bisection based header verification")])]),e._v(" "),a("p",[e._v("F1 and F2 can be used by faulty validators to actually create multiple branches on the blockchain. That means that correctly operating full nodes decide on different blocks for the same height. Until a fork is detected locally by a full node (by receiving evidence from others or by some other local check that fails), the full node can spread corrupted blocks to light clients.")]),e._v(" "),a("p",[a("em",[e._v("Remark.")]),e._v(" If full nodes take a branch different from the one taken by the validators, it may be that the liveness of the gossip protocol may be affected. We should eventually look at this more closely. However, as it does not influence safety it is not a primary concern.")]),e._v(" "),a("p",[e._v("F3 is similar to F1, except that no two correct validators decide on different blocks. It may still be the case that full nodes become affected.")]),e._v(" "),a("p",[e._v("In addition, without creating a fork on the main chain, light clients can be contaminated by more than a third of validators that are faulty and sign a forged header\nF4 cannot fool correct full nodes as they know the current validator set. Similarly, LCS know who the validators are. Hence, F4 is an attack against LCB that do not necessarily know the complete prefix of headers (Fork-Light), as they trust a header that is signed by at least one correct validator (trusting period method).")]),e._v(" "),a("p",[e._v("The following table gives an overview of how the different attacks may affect different nodes. F1-F3 are "),a("em",[e._v("on-chain")]),e._v(" attacks so they can corrupt the state of full nodes. Then if a light client (LCS or LCB) contacts a full node to obtain headers (or blocks), the corrupted state may propagate to the light client.")]),e._v(" "),a("p",[e._v("F4 and F5 are "),a("em",[e._v("off-chain")]),e._v(", that is, these attacks cannot be used to corrupt the state of full nodes (which have sufficient knowledge on the state of the chain to not be fooled).")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[e._v("Attack")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("FN")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("LCS")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("LCB")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("F1")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("direct")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("FN")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("FN")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("F2")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("direct")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("FN")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("FN")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("F3")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("direct")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("FN")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("FN")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("F4")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}}),e._v(" "),a("td",{staticStyle:{"text-align":"center"}}),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("direct")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("F5")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}}),e._v(" "),a("td",{staticStyle:{"text-align":"center"}}),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("direct")])])])]),e._v(" "),a("p",[a("strong",[e._v("Q:")]),e._v(" Light clients are more vulnerable than full nodes, because the former do only verify headers but do not execute transactions. What kind of certainty is gained by a full node that executes a transaction?")]),e._v(" "),a("p",[e._v("As a full node verifies all transactions, it can only be\ncontaminated by an attack if the blockchain itself violates its invariant (one block per height), that is, in case of a fork that leads to branching.")]),e._v(" "),a("h2",{attrs:{id:"detailed-attack-scenarios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#detailed-attack-scenarios"}},[e._v("#")]),e._v(" Detailed Attack Scenarios")]),e._v(" "),a("h3",{attrs:{id:"equivocation-based-attacks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#equivocation-based-attacks"}},[e._v("#")]),e._v(" Equivocation based attacks")]),e._v(" "),a("p",[e._v("In case of equivocation based attacks, faulty validators sign multiple votes (prevote and/or precommit) in the same\nround of some height. This attack can be executed on both full nodes and light clients. It requires 1/3 or more of voting power to be executed.")]),e._v(" "),a("h4",{attrs:{id:"scenario-1-equivocation-on-the-main-chain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scenario-1-equivocation-on-the-main-chain"}},[e._v("#")]),e._v(" Scenario 1: Equivocation on the main chain")]),e._v(" "),a("p",[e._v("Validators:")]),e._v(" "),a("ul",[a("li",[e._v("CA - a set of correct validators with less than 1/3 of the voting power")]),e._v(" "),a("li",[e._v("CB - a set of correct validators with less than 1/3 of the voting power")]),e._v(" "),a("li",[e._v("CA and CB are disjoint")]),e._v(" "),a("li",[e._v("F - a set of faulty validators with 1/3 or more voting power")])]),e._v(" "),a("p",[e._v("Observe that this setting violates the Tendermint failure model.")]),e._v(" "),a("p",[e._v("Execution:")]),e._v(" "),a("ul",[a("li",[e._v("A faulty proposer proposes block A to CA")]),e._v(" "),a("li",[e._v("A faulty proposer proposes block B to CB")]),e._v(" "),a("li",[e._v("Validators from the set CA and CB prevote for A and B, respectively.")]),e._v(" "),a("li",[e._v("Faulty validators from the set F prevote both for A and B.")]),e._v(" "),a("li",[e._v("The faulty prevote messages\n"),a("ul",[a("li",[e._v("for A arrive at CA long before the B messages")]),e._v(" "),a("li",[e._v("for B arrive at CB long before the A messages")])])]),e._v(" "),a("li",[e._v("Therefore correct validators from set CA and CB will observe\nmore than 2/3 of prevotes for A and B and precommit for A and B, respectively.")]),e._v(" "),a("li",[e._v("Faulty validators from the set F precommit both values A and B.")]),e._v(" "),a("li",[e._v("Thus, we have more than 2/3 commits for both A and B.")])]),e._v(" "),a("p",[e._v("Consequences:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Creating evidence of misbehavior is simple in this case as we have multiple messages signed by the same faulty processes for different values in the same round.")])]),e._v(" "),a("li",[a("p",[e._v("We have to ensure that these different messages reach a correct process (full node, monitor?), which can submit evidence.")])]),e._v(" "),a("li",[a("p",[e._v("This is an attack on the full node level (Fork-Full).")])]),e._v(" "),a("li",[a("p",[e._v("It extends also to the light clients,")])]),e._v(" "),a("li",[a("p",[e._v("For both we need a detection and recovery mechanism.")])])]),e._v(" "),a("h4",{attrs:{id:"scenario-2-equivocation-to-a-light-client-lcs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scenario-2-equivocation-to-a-light-client-lcs"}},[e._v("#")]),e._v(" Scenario 2: Equivocation to a light client (LCS)")]),e._v(" "),a("p",[e._v("Validators:")]),e._v(" "),a("ul",[a("li",[e._v("a set F of faulty validators with more than 2/3 of the voting power.")])]),e._v(" "),a("p",[e._v("Execution:")]),e._v(" "),a("ul",[a("li",[e._v("for the main chain F behaves nicely")]),e._v(" "),a("li",[e._v("F coordinates to sign a block B that is different from the one on the main chain.")]),e._v(" "),a("li",[e._v("the light clients obtains B and trusts at as it is signed by more than 2/3 of the voting power.")])]),e._v(" "),a("p",[e._v("Consequences:")]),e._v(" "),a("p",[e._v("Once equivocation is used to attack light client it opens space\nfor different kind of attacks as application state can be diverged in any direction. For example, it can modify validator set such that it contains only validators that do not have any stake bonded. Note that after a light client is fooled by a fork, that means that an attacker can change application state and validator set arbitrarily.")]),e._v(" "),a("p",[e._v("In order to detect such (equivocation-based attack), the light client would need to cross check its state with some correct validator (or to obtain a hash of the state from the main chain using out of band channels).")]),e._v(" "),a("p",[a("em",[e._v("Remark.")]),e._v(" The light client would be able to create evidence of misbehavior, but this would require to pull potentially a lot of data from correct full nodes. Maybe we need to figure out different architecture where a light client that is attacked will push all its data for the current unbonding period to a correct node that will inspect this data and submit corresponding evidence. There are also architectures that assumes a special role (sometimes called fisherman) whose goal is to collect as much as possible useful data from the network, to do analysis and create evidence transactions. That functionality is outside the scope of this document.")]),e._v(" "),a("p",[a("em",[e._v("Remark.")]),e._v(" The difference between LCS and LCB might only be in the amount of voting power needed to convince light client about arbitrary state. In case of LCB where security threshold is at minimum, an attacker can arbitrarily modify application state with 1/3 or more of voting power, while in case of LCS it requires more than 2/3 of the voting power.")]),e._v(" "),a("h3",{attrs:{id:"flip-flopping-amnesia-based-attacks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flip-flopping-amnesia-based-attacks"}},[e._v("#")]),e._v(" Flip-flopping: Amnesia based attacks")]),e._v(" "),a("p",[e._v("In case of amnesia, faulty validators lock some value "),a("em",[e._v("v")]),e._v(" in some round "),a("em",[e._v("r")]),e._v(", and then vote for different value "),a("em",[e._v("v'")]),e._v(" in higher rounds without correctly unlocking value "),a("em",[e._v("v")]),e._v(". This attack can be used both on full nodes and light clients.")]),e._v(" "),a("h4",{attrs:{id:"scenario-3-at-most-2-3-of-faults"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scenario-3-at-most-2-3-of-faults"}},[e._v("#")]),e._v(" Scenario 3: At most 2/3 of faults")]),e._v(" "),a("p",[e._v("Validators:")]),e._v(" "),a("ul",[a("li",[e._v("a set F of faulty validators with 1/3 or more but at most 2/3 of the voting power")]),e._v(" "),a("li",[e._v("a set C of correct validators")])]),e._v(" "),a("p",[e._v("Execution:")]),e._v(" "),a("ul",[a("li",[e._v("Faulty validators commit (without exposing it on the main chain) a block A in round "),a("em",[e._v("r")]),e._v(" by collecting more than 2/3 of the\nvoting power (containing correct and faulty validators).")]),e._v(" "),a("li",[e._v("All validators (correct and faulty) reach a round "),a("em",[e._v("r' > r")]),e._v(".")]),e._v(" "),a("li",[e._v("Some correct validators in C do not lock any value before round "),a("em",[e._v("r'")]),e._v(".")]),e._v(" "),a("li",[e._v("The faulty validators in F deviate from Tendermint consensus by ignoring that they locked A in "),a("em",[e._v("r")]),e._v(", and propose a different block B in "),a("em",[e._v("r'")]),e._v(".")]),e._v(" "),a("li",[e._v("As the validators in C that have not locked any value find B acceptable, they accept the proposal for B and commit a block B.")])]),e._v(" "),a("p",[a("em",[e._v("Remark.")]),e._v(" In this case, the more than 1/3 of faulty validators do not need to commit an equivocation (F1) as they only vote once per round in the execution.")]),e._v(" "),a("p",[e._v("Detecting faulty validators in the case of such an attack can be done by the fork accountability mechanism described in: "),a("a",{attrs:{href:"https://docs.google.com/document/d/11ZhMsCj3y7zIZz4udO9l25xqb0kl7gmWqNpGVRzOeyY/edit?usp=sharing",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.google.com/document/d/11ZhMsCj3y7zIZz4udO9l25xqb0kl7gmWqNpGVRzOeyY/edit?usp=sharing"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("If a light client is attacked using this attack with 1/3 or more of voting power (and less than 2/3), the attacker cannot change the application state arbitrarily. Rather, the attacker is limited to a state a correct validator finds acceptable: In the execution above, correct validators still find the value acceptable, however, the block the light client trusts deviates from the one on the main chain.")]),e._v(" "),a("h4",{attrs:{id:"scenario-4-more-than-2-3-of-faults"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scenario-4-more-than-2-3-of-faults"}},[e._v("#")]),e._v(" Scenario 4: More than 2/3 of faults")]),e._v(" "),a("p",[e._v("In case there is an attack with more than 2/3 of the voting power, an attacker can arbitrarily change application state.")]),e._v(" "),a("p",[e._v("Validators:")]),e._v(" "),a("ul",[a("li",[e._v("a set F1 of faulty validators with 1/3 or more of the voting power")]),e._v(" "),a("li",[e._v("a set F2 of faulty validators with less than 1/3 of the voting power")])]),e._v(" "),a("p",[e._v("Execution")]),e._v(" "),a("ul",[a("li",[e._v("Similar to Scenario 3 (however, messages by correct validators are not needed)")]),e._v(" "),a("li",[e._v("The faulty validators in F1 lock value A in round "),a("em",[e._v("r")])]),e._v(" "),a("li",[e._v("They sign a different value in follow-up rounds")]),e._v(" "),a("li",[e._v("F2 does not lock A in round "),a("em",[e._v("r")])])]),e._v(" "),a("p",[e._v("Consequences:")]),e._v(" "),a("ul",[a("li",[e._v("The validators in F1 will be detectable by the the fork accountability mechanisms.")]),e._v(" "),a("li",[e._v("The validators in F2 cannot be detected using this mechanism.\nOnly in case they signed something which conflicts with the application this can be used against them. Otherwise they do not do anything incorrect.")]),e._v(" "),a("li",[e._v("This case is not covered by the report "),a("a",{attrs:{href:"https://docs.google.com/document/d/11ZhMsCj3y7zIZz4udO9l25xqb0kl7gmWqNpGVRzOeyY/edit?usp=sharing",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.google.com/document/d/11ZhMsCj3y7zIZz4udO9l25xqb0kl7gmWqNpGVRzOeyY/edit?usp=sharing"),a("OutboundLink")],1),e._v(" as it only assumes at most 2/3 of faulty validators.")])]),e._v(" "),a("p",[a("strong",[e._v("Q:")]),e._v(" do we need to define a special kind of attack for the case where a validator sign arbitrarily state? It seems that detecting such attack requires a different mechanism that would require as an evidence a sequence of blocks that led to that state. This might be very tricky to implement.")]),e._v(" "),a("h3",{attrs:{id:"back-to-the-past"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#back-to-the-past"}},[e._v("#")]),e._v(" Back to the past")]),e._v(" "),a("p",[e._v("In this kind of attack, faulty validators take advantage of the fact that they did not sign messages in some of the past rounds. Due to the asynchronous network in which Tendermint operates, we cannot easily differentiate between such an attack and delayed message. This kind of attack can be used at both full nodes and light clients.")]),e._v(" "),a("h4",{attrs:{id:"scenario-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scenario-5"}},[e._v("#")]),e._v(" Scenario 5")]),e._v(" "),a("p",[e._v("Validators:")]),e._v(" "),a("ul",[a("li",[e._v("C1 -  a set of correct validators with over 1/3 of the voting power")]),e._v(" "),a("li",[e._v("C2 - a set of correct validators with 1/3 of the voting power")]),e._v(" "),a("li",[e._v("C1 and C2 are disjoint")]),e._v(" "),a("li",[e._v("F - a set of faulty validators with less than 1/3 voting power")]),e._v(" "),a("li",[e._v("one additional faulty process "),a("em",[e._v("q")])]),e._v(" "),a("li",[e._v("F and "),a("em",[e._v("q")]),e._v(" violate the Tendermint failure model.")])]),e._v(" "),a("p",[e._v("Execution:")]),e._v(" "),a("ul",[a("li",[e._v("in a round "),a("em",[e._v("r")]),e._v(" of height "),a("em",[e._v("h")]),e._v(" we have C1 precommitting a value A,")]),e._v(" "),a("li",[e._v("C2 precommits nil,")]),e._v(" "),a("li",[e._v("F does not send any message")]),e._v(" "),a("li",[a("em",[e._v("q")]),e._v(" precommits nil.")]),e._v(" "),a("li",[e._v("In some round "),a("em",[e._v("r' > r")]),e._v(", F and "),a("em",[e._v("q")]),e._v(" and C2 commit some other value B different from A.")]),e._v(" "),a("li",[e._v("F and "),a("em",[e._v("fp")]),e._v(' "go back to the past" and sign precommit message for value A in round '),a("em",[e._v("r")]),e._v(".")]),e._v(" "),a("li",[e._v("Together with precomit messages of C1 this is sufficient for a commit for value A.")])]),e._v(" "),a("p",[e._v("Consequences:")]),e._v(" "),a("ul",[a("li",[e._v("Only a single faulty validator that previously precommited nil did equivocation, while the other 1/3 of faulty validators actually executed an attack that has exactly the same sequence of messages as part of amnesia attack. Detecting this kind of attack boil down to mechanisms for equivocation and amnesia.")])]),e._v(" "),a("p",[a("strong",[e._v("Q:")]),e._v(" should we keep this as a separate kind of attack? It seems that equivocation, amnesia and phantom validators are the only kind of attack we need to support and this gives us security also in other cases. This would not be surprising as equivocation and amnesia are attacks that followed from the protocol and phantom attack is not really an attack to Tendermint but more to the Proof of Stake module.")]),e._v(" "),a("h3",{attrs:{id:"phantom-validators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#phantom-validators"}},[e._v("#")]),e._v(" Phantom validators")]),e._v(" "),a("p",[e._v("In case of phantom validators, processes that are not part of the current validator set but are still bonded (as attack happen during their unbonding period) can be part of the attack by signing vote messages. This attack can be executed against both full nodes and light clients.")]),e._v(" "),a("h4",{attrs:{id:"scenario-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scenario-6"}},[e._v("#")]),e._v(" Scenario 6")]),e._v(" "),a("p",[e._v("Validators:")]),e._v(" "),a("ul",[a("li",[e._v("F -- a set of faulty validators that are not part of the validator set on the main chain at height "),a("em",[e._v("h + k")])])]),e._v(" "),a("p",[e._v("Execution:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("There is a fork, and there exist two different headers for height "),a("em",[e._v("h + k")]),e._v(", with different validator sets:")]),e._v(" "),a("ul",[a("li",[e._v("VS2 on the main chain")]),e._v(" "),a("li",[e._v("forged header VS2', signed by F (and others)")])])]),e._v(" "),a("li",[a("p",[e._v("a light client has a trust in a header for height "),a("em",[e._v("h")]),e._v(" (and the corresponding validator set VS1).")])]),e._v(" "),a("li",[a("p",[e._v("As part of bisection header verification, it verifies the header at height "),a("em",[e._v("h + k")]),e._v(" with new validator set VS2'.")])])]),e._v(" "),a("p",[e._v("Consequences:")]),e._v(" "),a("ul",[a("li",[e._v("To detect this, a node needs to see both, the forged header and the canonical header from the chain.")]),e._v(" "),a("li",[e._v("If this is the case, detecting these kind of attacks is easy as it just requires verifying if processes are signing messages in heights in which they are not part of the validator set.")])]),e._v(" "),a("p",[a("strong",[e._v("Remark.")]),e._v(" We can have phantom-validator-based attacks as a follow up of equivocation or amnesia based attack where forked state contains validators that are not part of the validator set at the main chain. In this case, they keep signing messages contributed to a forked chain (the wrong branch) although they are not part of the validator set on the main chain. This attack can also be used to attack full node during a period of time it is eclipsed.")]),e._v(" "),a("p",[a("strong",[e._v("Remark.")]),e._v(" Phantom validator evidence has been removed from implementation as it was deemed, although possibly a plausible form of evidence, not relevant. Any attack on\nthe light client involving a phantom validator will have needed to be initiated by 1/3+ lunatic\nvalidators that can forge a new validator set that includes the phantom validator. Only in\nthat case will the light client accept the phantom validators vote. We need only worry about\npunishing the 1/3+ lunatic cabal, that is the root cause of the attack.")]),e._v(" "),a("h3",{attrs:{id:"lunatic-validator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lunatic-validator"}},[e._v("#")]),e._v(" Lunatic validator")]),e._v(" "),a("p",[e._v("Lunatic validator agrees to sign commit messages for arbitrary application state. It is used to attack light clients.\nNote that detecting this behavior require application knowledge. Detecting this behavior can probably be done by\nreferring to the block before the one in which height happen.")]),e._v(" "),a("p",[a("strong",[e._v("Q:")]),e._v(" can we say that in this case a validator declines to check if a proposed value is valid before voting for it?")])])}),[],!1,null,null,null);t.default=i.exports}}]);