module.exports = {
	title: '刘跃吉',
	description: 'Just playing around',
	themeConfig: {
		nav: [
		  { text: 'Blog',  
			items: [
	          { text: 'Javascript', link: '/Javascript/one' },
	          { text: 'HTML', link: '/HTML/' },
	          { text: 'CSS', link: '/CSS/' }
        	]
          },
		  { text: 'Guide', link: '/guide/' },
		  { text: 'GitHub', link: 'http://liuyueji.com' },
		],
		sidebar: {
      	'/Javascript/': [
        {
          title:'前端',
          collapsable: true,
          children:[
            'one',
            'two'
          ]
        },
        {
          title:'后端',
          collapsable: true,
          children:[
            'the',
          ]
        },
      ]
    }

	},

}