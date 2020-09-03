export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f5127355797544d32aba608',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-44q93ayr',
                  apiId: '011f6a43-01f6-49f1-975d-70e07c7f9ae6'
                },
                {
                  buildHookId: '5f512735552c1a5cae3be405',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-gy14xfqu',
                  apiId: '22cbfa01-bd14-441f-aff7-c3ec1b2a1754'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/technosheen/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-gy14xfqu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
