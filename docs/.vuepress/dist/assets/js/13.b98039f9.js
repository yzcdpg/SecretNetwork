(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{359:function(a,s,t){"use strict";t.r(s);var n=t(43),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h3",{attrs:{id:"download-release"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#download-release"}},[a._v("#")]),a._v(" Download Release")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://github.com/enigmampc/SecretNetwork/releases/download/v0.0.3/enigma-blockchain_0.0.3_amd64.deb\n")])])]),t("h3",{attrs:{id:"remove-old-installations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#remove-old-installations"}},[a._v("#")]),a._v(" Remove old installations")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dpkg -P enigmachain\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf ~/.enigmad ~/.enigmacli\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf ~/.engd ~/.engcli\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("which")]),a._v(" enigmad"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("which")]),a._v(" enigmacli"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("which")]),a._v(" engcli"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -rf "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("which")]),a._v(" engd"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('"')]),a._v("\n")])])]),t("h3",{attrs:{id:"configure-lvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configure-lvm"}},[a._v("#")]),a._v(" Configure LVM")]),a._v(" "),t("ul",[t("li",[a._v("Attach storage to instance")]),a._v(" "),t("li",[a._v("Run the following")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Create volumes and groups")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" pvcreate /dev/xvdf\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" vgcreate chainstate /dev/xvdf\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" lvcreate --name data --size 19GB chainstate\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Format to ext4")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" mkfs.ext4 /dev/chainstate/data\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Create the `data` path and mount")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" -p .enigmad/data\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mount")]),a._v(" /dev/chainstate/data .enigmad/data\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Make mount persistant")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/dev/chainstate/data\t/home/ubuntu ext4 defaults\t\t0 0"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" /etc/fstab\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Make the default user able to r/w")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chown")]),a._v(" -R ubuntu .enigmad/\n")])])]),t("h3",{attrs:{id:"install-the-deb-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-the-deb-file"}},[a._v("#")]),a._v(" Install the "),t("code",[a._v(".deb")]),a._v(" file")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" dpkg -i enigma-blockchain_0.0.3_amd64.deb\n")])])]),t("h3",{attrs:{id:"config-local-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#config-local-node"}},[a._v("#")]),a._v(" Config local node")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("enigmacli config chain-id "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"enigma-testnet"')]),a._v("\nenigmacli config output json\nenigmacli config indent "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\nenigmacli config trust-node "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# true if you trust the full-node you are connecting to, false otherwise")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);