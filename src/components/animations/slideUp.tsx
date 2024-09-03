export function slideUpOut() {
	// document.documentElement.animate(
	// 	[
	// 		{
	// 			opacity: 1,
	// 			transform: 'translate(0, 0)',
	// 		},
	// 		{
	// 			opacity: 0,
	// 			transform: 'translate(0, -100px)',
	// 		},
	// 	],
	// 	{
	// 		duration: 400,
	// 		easing: 'ease',
	// 		fill: 'forwards',
	// 		pseudoElement: '::view-transition-old(root)',
	// 	}
	// );
	// document.documentElement.animate(
	// 	[
	// 		{
	// 			opacity: 0,
	// 			transform: 'translate(0, 100px)',
	// 		},
	// 		{
	// 			opacity: 1,
	// 			transform: 'translate(0, 0)',
	// 		},
	// 	],
	// 	{
	// 		duration: 400,
	// 		easing: 'ease',
	// 		fill: 'forwards',
	// 		pseudoElement: '::view-transition-new(root)',
	// 	}
	// );

	// Exit animation (old view slides down)
	document.documentElement.animate(
		[
			{
				opacity: 1,
				transform: 'translate(0, 0)',
			},
			{
				opacity: 0,
				transform: 'translate(0, 100px)',
			},
		],
		{
			duration: 400,
			easing: 'ease',
			fill: 'forwards',
			pseudoElement: '::view-transition-old(root)',
		}
	);

	// Entrance animation (new view slides up)
	document.documentElement.animate(
		[
			{
				opacity: 0,
				transform: 'translate(0, 100px)',
			},
			{
				opacity: 1,
				transform: 'translate(0, 0)',
			},
		],
		{
			duration: 400,
			easing: 'ease',
			fill: 'forwards',
			pseudoElement: '::view-transition-new(root)',
		}
	);
}
