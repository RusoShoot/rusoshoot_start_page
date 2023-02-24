const config = {
	username: "RusoShoot",
	terminal: {
		fixedheight: true,
		backgroundcolor: "#121317",
		windowcolor: "#1e212b",
		glowcolor: "none"
	},
	prompt: {
		ctrlc: true,
		placeholder: "command...",
		usercolor: "magenta",
		atcolor: "gray",
		hostcolor: "yellow",
		promptcolor: "magenta",
		promptsymbol: "❯",
		caretcolor: "green",
		selectionbg: "#e8b195",
		selectionfg: "#16161e"
	},
	colors: {
		white: "#e2e2e2",
		gray: "#97989d",
		black: "#16161e",
		red: "#ec6183",
		green: "#2ed8a2",
		yellow: "#e8b195",
		blue: "#2bc3de",
		cyan: "#62e0e2",
		magenta: "#e069aa",
		purple: "#d1aff8"
	},
	nfetch: {
		timeformat: "HH:mm",
		dateformat: "DD/MM/YYYY",
		titlecolor: "yellow"
	},
	search: {
		default: "https://google.com/search?q=",
		target: "_self"
	},
	url: {
		target: "_self"
	},
	commands: [
		{
			alias: "g",
			name: "Google Search",
			url: "https://google.com/search?q={}"
		},
		{
			alias: "d",
			name: "DuckDuckGo Search",
			url: "https://duckduckgo.com/?q={}"
		},
		{
			alias: "b",
			name: "Brave Search",
			url: "https://search.brave.com/search?q={}"
		},
		{
			alias: "r",
			name: "Subreddit Search",
			url: "https://reddit.com/r/{}"
		},
		{
			alias: "y:",
			name: "Youtube Search",
			url: "https://www.youtube.com/results?search_query={}"
		}
	],
	sections: [
		{
			title: "FQDNs",
			color: "green",
			links: [
				{
					name: "RusoShoot",
					url: "https://rusoshoot.com",
					icon: "mdi:web",
					target: "_blank"
				},
				{
					name: "Nextcloud",
					url: "https://nextcloud.rusoshoot.com",
					icon: "simple-icons:nextcloud",
					target: "_blank"
				}
			]
		},
		{
			title: "Dev",
			color: "magenta",
			links: [
				{
					name: "GitHub",
					url: "https://github.com",
					icon: "mdi:github",
					target: "_blank"
				},
				{
					name: "Cloudflare",
					url: "https://dash.cloudflare.com/",
					icon: "simple-icons:cloudflare",
					target: "_blank"
				},
				{
					name: "Vercel",
					url: "https://vercel.com/",
					icon: "material-symbols:logo-dev",
					target: "_blank"
				},
				{
					name: "Choco",
					url: "https://community.chocolatey.org/",
					icon: "file-icons:chocolatey",
					target: "_blank"
				}
			]
		},
		{
			title: "Content",
			color: "purple",
			links: [
				{
					name: "Twitter",
					url: "https://twitter.com",
					icon: "mdi:twitter",
					target: "_blank"
				},
				{
					name: "Reddit",
					url: "https://reddit.com",
					icon: "mdi:reddit",
					target: "_blank"
				},
				{
					name: "Jellyfin",
					url: "http://jellyfin.home:8096/",
					icon: "simple-icons:jellyfin",
					target: "_blank"
				}
			]
		},
		{
			title: "Networking",
			color: "cyan",
			links: [
				{
					name: "Pihole/Unbound",
					url: "http://10.1.80.8/admin",
					icon: "simple-icons:pihole",
					target: "_blank"
				},
				{
					name: "Pfsense",
					url: "https://10.1.80.1",
					icon: "simple-icons:pfsense",
					target: "_blank"
				},
				{
					name: "Heimdall",
					url: "https://dashboard.home/",
					icon: "material-symbols:space-dashboard",
					target: "_blank"
				}
			]
		},
		{
			title: "NAS",
			color: "blue",
			links: [
				{
					name: "RRA",
					url: "http://rra.home:5000",
					icon: "mdi:nas",
					target: "_blank"
				},
				{
					name: "TrueNAS",
					url: "https://truenas.home/",
					icon: "simple-icons:truenas",
					target: "_blank"
				}
			]
		},
		{
			title: "SelfHosted",
			color: "yellow",
			links: [
				{
					name: "Proxmox",
					url: "http://jhin.home:8006",
					icon: "simple-icons:proxmox",
					target: "_blank"
				},
				{
					name: "Portainer",
					url: "http://portainer.home:9000/#!/home",
					icon: "simple-icons:portainer",
					target: "_blank"
				},
				{
					name: "Transmission",
					url: "http://transmission.home:9091",
					icon: "carbon:transmission-lte",
					target: "_blank"
				}
			]
		}
	]
}

module.exports = config
