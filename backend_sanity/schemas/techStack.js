export default{
    name: 'techStack',
    title: 'Tech Stack',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'bgColor',
            title: 'BgColor',
            type: 'string'
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'image',
            options: {
              hotspot: true
            }
        },
        {
            name: 'order',
            title: 'Order',
            type: 'string'
        }
    ]
}