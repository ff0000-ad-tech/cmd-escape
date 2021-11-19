const cmdEscape = args => {
	const esc = arg => `"${arg.replace(/"/g, '\\"')}"`
	return args
		.map(arg => {
			arg = new String(arg)
			const isKey = arg.match(/^--/)
			const kv = arg.split('=')
			if (isKey) {
				return kv.length > 1 ? `${kv[0]}=${esc(kv[1])}` : arg
			} else {
				return kv.length > 1 ? `${kv[0]}=${esc(kv[1])}` : esc(arg)
			}
		})
		.join(' ')
}

module.exports = cmdEscape
