export default {
    name: 'workExperience',
    title: 'Work Experience',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'tooltip',
            title: 'Tooltip',
            type: 'text'
        },
        {
            name: 'description',
            title: 'Description', 
            type: 'array', 
            of: [{type: 'block'}]
        }
    ]
}