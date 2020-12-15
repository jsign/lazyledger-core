(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{768:function(e,t,a){"use strict";a.r(t);var s=a(1),l=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"install-tendermint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-tendermint"}},[e._v("#")]),e._v(" Install Tendermint")]),e._v(" "),a("h2",{attrs:{id:"from-binary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from-binary"}},[e._v("#")]),e._v(" From Binary")]),e._v(" "),a("p",[e._v("To download pre-built binaries, see the "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("releases page"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"from-source"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from-source"}},[e._v("#")]),e._v(" From Source")]),e._v(" "),a("p",[e._v("You'll need "),a("code",[e._v("go")]),e._v(" "),a("a",{attrs:{href:"https://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"}},[e._v("installed"),a("OutboundLink")],1),e._v(" and the required\nenvironment variables set, which can be done with the following commands:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"ZWNobyBleHBvcnQgR09QQVRIPVwmcXVvdDtcJEhPTUUvZ29cJnF1b3Q7ICZndDsmZ3Q7IH4vLmJhc2hfcHJvZmlsZQplY2hvIGV4cG9ydCBQQVRIPVwmcXVvdDtcJFBBVEg6XCRHT1BBVEgvYmluXCZxdW90OyAmZ3Q7Jmd0OyB+Ly5iYXNoX3Byb2ZpbGUK"}}),e._v(" "),a("h3",{attrs:{id:"get-source-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-source-code"}},[e._v("#")]),e._v(" Get Source Code")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Z2l0IGNsb25lIGh0dHBzOi8vZ2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQuZ2l0CmNkIHRlbmRlcm1pbnQK"}}),e._v(" "),a("h3",{attrs:{id:"get-tools-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-tools-dependencies"}},[e._v("#")]),e._v(" Get Tools & Dependencies")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"bWFrZSB0b29scwo="}}),e._v(" "),a("h3",{attrs:{id:"compile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compile"}},[e._v("#")]),e._v(" Compile")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"bWFrZSBpbnN0YWxsCg=="}}),e._v(" "),a("p",[e._v("to put the binary in "),a("code",[e._v("$GOPATH/bin")]),e._v(" or use:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"bWFrZSBidWlsZAo="}}),e._v(" "),a("p",[e._v("to put the binary in "),a("code",[e._v("./build")]),e._v(".")]),e._v(" "),a("p",[a("em",[e._v("DISCLAIMER")]),e._v(" The binary of Tendermint is build/installed without the DWARF\nsymbol table. If you would like to build/install Tendermint with the DWARF\nsymbol and debug information, remove "),a("code",[e._v("-s -w")]),e._v(" from "),a("code",[e._v("BUILD_FLAGS")]),e._v(" in the make\nfile.")]),e._v(" "),a("p",[e._v("The latest Tendermint is now installed. You can verify the installation by\nrunning:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"dGVuZGVybWludCB2ZXJzaW9uCg=="}}),e._v(" "),a("h2",{attrs:{id:"run"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[e._v("#")]),e._v(" Run")]),e._v(" "),a("p",[e._v("To start a one-node blockchain with a simple in-process application:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"dGVuZGVybWludCBpbml0CnRlbmRlcm1pbnQgbm9kZSAtLXByb3h5X2FwcD1rdnN0b3JlCg=="}}),e._v(" "),a("h2",{attrs:{id:"reinstall"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reinstall"}},[e._v("#")]),e._v(" Reinstall")]),e._v(" "),a("p",[e._v("If you already have Tendermint installed, and you make updates, simply")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"bWFrZSBpbnN0YWxsCg=="}}),e._v(" "),a("p",[e._v("To upgrade, run")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Z2l0IHB1bGwgb3JpZ2luIG1hc3RlcgptYWtlIGluc3RhbGwK"}}),e._v(" "),a("h2",{attrs:{id:"compile-with-cleveldb-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compile-with-cleveldb-support"}},[e._v("#")]),e._v(" Compile with CLevelDB support")]),e._v(" "),a("p",[e._v("Install "),a("a",{attrs:{href:"https://github.com/google/leveldb",target:"_blank",rel:"noopener noreferrer"}},[e._v("LevelDB"),a("OutboundLink")],1),e._v(" (minimum version is 1.7).")]),e._v(" "),a("p",[e._v("Install LevelDB with snappy (optionally). Below are commands for Ubuntu:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"c3VkbyBhcHQtZ2V0IHVwZGF0ZQpzdWRvIGFwdCBpbnN0YWxsIGJ1aWxkLWVzc2VudGlhbAoKc3VkbyBhcHQtZ2V0IGluc3RhbGwgbGlic25hcHB5LWRldgoKd2dldCBodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlL2xldmVsZGIvYXJjaGl2ZS92MS4yMC50YXIuZ3ogJmFtcDsmYW1wOyBcCiAgdGFyIC16eHZmIHYxLjIwLnRhci5neiAmYW1wOyZhbXA7IFwKICBjZCBsZXZlbGRiLTEuMjAvICZhbXA7JmFtcDsgXAogIG1ha2UgJmFtcDsmYW1wOyBcCiAgc3VkbyBjcCAtciBvdXQtc3RhdGljL2xpYiogb3V0LXNoYXJlZC9saWIqIC91c3IvbG9jYWwvbGliLyAmYW1wOyZhbXA7IFwKICBjZCBpbmNsdWRlLyAmYW1wOyZhbXA7IFwKICBzdWRvIGNwIC1yIGxldmVsZGIgL3Vzci9sb2NhbC9pbmNsdWRlLyAmYW1wOyZhbXA7IFwKICBzdWRvIGxkY29uZmlnICZhbXA7JmFtcDsgXAogIHJtIC1mIHYxLjIwLnRhci5nego="}}),e._v(" "),a("p",[e._v("Set a database backend to "),a("code",[e._v("cleveldb")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"IyBjb25maWcvY29uZmlnLnRvbWwKZGJfYmFja2VuZCA9ICZxdW90O2NsZXZlbGRiJnF1b3Q7Cg=="}}),e._v(" "),a("p",[e._v("To install Tendermint, run:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Q0dPX0xERkxBR1M9JnF1b3Q7LWxzbmFwcHkmcXVvdDsgbWFrZSBpbnN0YWxsIFRFTkRFUk1JTlRfQlVJTERfT1BUSU9OUz1jbGV2ZWxkYgo="}}),e._v(" "),a("p",[e._v("or run:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Q0dPX0xERkxBR1M9JnF1b3Q7LWxzbmFwcHkmcXVvdDsgbWFrZSBidWlsZCBURU5ERVJNSU5UX0JVSUxEX09QVElPTlM9Y2xldmVsZGIK"}}),e._v(" "),a("p",[e._v("which puts the binary in "),a("code",[e._v("./build")]),e._v(".")])],1)}),[],!1,null,null,null);t.default=l.exports}}]);