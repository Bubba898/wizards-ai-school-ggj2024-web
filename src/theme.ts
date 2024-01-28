import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

// You can also use the generator at https://skeleton.dev/docs/generator to create these values for you
export const theme: CustomThemeConfig = {
  name: 'theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #EF562F
		"--color-primary-50": "253 230 224", // #fde6e0
		"--color-primary-100": "252 221 213", // #fcddd5
		"--color-primary-200": "251 213 203", // #fbd5cb
		"--color-primary-300": "249 187 172", // #f9bbac
		"--color-primary-400": "244 137 109", // #f4896d
		"--color-primary-500": "239 86 47", // #EF562F
		"--color-primary-600": "215 77 42", // #d74d2a
		"--color-primary-700": "179 65 35", // #b34123
		"--color-primary-800": "143 52 28", // #8f341c
		"--color-primary-900": "117 42 23", // #752a17
		// secondary | #48bee5
		"--color-secondary-50": "228 245 251", // #e4f5fb
		"--color-secondary-100": "218 242 250", // #daf2fa
		"--color-secondary-200": "209 239 249", // #d1eff9
		"--color-secondary-300": "182 229 245", // #b6e5f5
		"--color-secondary-400": "127 210 237", // #7fd2ed
		"--color-secondary-500": "72 190 229", // #48bee5
		"--color-secondary-600": "65 171 206", // #41abce
		"--color-secondary-700": "54 143 172", // #368fac
		"--color-secondary-800": "43 114 137", // #2b7289
		"--color-secondary-900": "35 93 112", // #235d70
		// tertiary | #1891c9
		"--color-tertiary-50": "220 239 247", // #dceff7
		"--color-tertiary-100": "209 233 244", // #d1e9f4
		"--color-tertiary-200": "197 228 242", // #c5e4f2
		"--color-tertiary-300": "163 211 233", // #a3d3e9
		"--color-tertiary-400": "93 178 217", // #5db2d9
		"--color-tertiary-500": "24 145 201", // #1891c9
		"--color-tertiary-600": "22 131 181", // #1683b5
		"--color-tertiary-700": "18 109 151", // #126d97
		"--color-tertiary-800": "14 87 121", // #0e5779
		"--color-tertiary-900": "12 71 98", // #0c4762
		// success | #26ba1c
		"--color-success-50": "222 245 221", // #def5dd
		"--color-success-100": "212 241 210", // #d4f1d2
		"--color-success-200": "201 238 198", // #c9eec6
		"--color-success-300": "168 227 164", // #a8e3a4
		"--color-success-400": "103 207 96", // #67cf60
		"--color-success-500": "38 186 28", // #26ba1c
		"--color-success-600": "34 167 25", // #22a719
		"--color-success-700": "29 140 21", // #1d8c15
		"--color-success-800": "23 112 17", // #177011
		"--color-success-900": "19 91 14", // #135b0e
		// warning | #EAB308
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #cb2053
		"--color-error-50": "247 222 229", // #f7dee5
		"--color-error-100": "245 210 221", // #f5d2dd
		"--color-error-200": "242 199 212", // #f2c7d4
		"--color-error-300": "234 166 186", // #eaa6ba
		"--color-error-400": "219 99 135", // #db6387
		"--color-error-500": "203 32 83", // #cb2053
		"--color-error-600": "183 29 75", // #b71d4b
		"--color-error-700": "152 24 62", // #98183e
		"--color-error-800": "122 19 50", // #7a1332
		"--color-error-900": "99 16 41", // #631029
		// surface | #323f67
		"--color-surface-50": "224 226 232", // #e0e2e8
		"--color-surface-100": "214 217 225", // #d6d9e1
		"--color-surface-200": "204 207 217", // #cccfd9
		"--color-surface-300": "173 178 194", // #adb2c2
		"--color-surface-400": "112 121 149", // #707995
		"--color-surface-500": "50 63 103", // #323f67
		"--color-surface-600": "45 57 93", // #2d395d
		"--color-surface-700": "38 47 77", // #262f4d
		"--color-surface-800": "30 38 62", // #1e263e
		"--color-surface-900": "25 31 50", // #191f32

	}
}
