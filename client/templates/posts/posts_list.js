var postsData = [
	{
		title: 'Title 1',
		url: 'http://google.com.au'
	},
	{
		title: 'Agtrader',
		url: 'http://agtrader.com.au'
	},
	{
		title: 'Movie',
		url: 'http://imdb.com'
	}
]


Template.postsList.helpers({
	posts: postsData
})