

var threads = [
	{
		id: 1,
		title: "Thread 1",
		author: "Aaron",
		date: Date.now(),
		content: "Simple",
		comments: [
			{
				author: "Jack",
				date: Date.now(),
				content: "Hey there"
			},
			{
				author: "Arthur",
				date: Date.now(),
				content: "Hey to you too"
			}
		]
	},
	{
		id: 2,
		title: "Thread 2",
		author: "Aaron",
		date: Date.now(),
		content: "Thread content",
		comments: [
			{
				author: "Jack",
				date: Date.now(),
				content: "Hey there"
			},
			{
				author: "Arthur",
				date: Date.now(),
				content: "Hey to you too"
			}
		]
	},
	{
		id: 3,
		title: "Thread 3",
		author: "Aaron",
		date: Date.now(),
		content: "etc",
		comments: [
			{
				author: "Jack",
				date: Date.now(),
				content: "Hey there"
			},
			{
				author: "Arthur",
				date: Date.now(),
				content: "Hey to you too"
			}
		]
	}
]



if (false) {
	threads = defaultThreads;
	localStorage.setItem('threads', JSON.stringify(defaultThreads));
}

var threads;
if (localStorage && localStorage.getItem('threads')) {
	threads = JSON.parse(localStorage.getItem('threads'));
} else {
	threads = defaultThreads;
	localStorage.setItem('threads', JSON.stringify(defaultThreads));
}