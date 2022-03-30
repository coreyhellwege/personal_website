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
            name: 'companyDesc',
            title: 'Company Description',
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