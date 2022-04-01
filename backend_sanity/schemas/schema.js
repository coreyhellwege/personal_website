// First, import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes    from 'all:part:@sanity/base/schema-type'
import works          from './works'
import education      from './education'
import brands         from './brands'
import about          from './about'
import experiences    from './experiences'
import skills         from './skills'
import workExperience from './workExperience'
import contact        from './contact'

// Then pass the schema to the builder and provide the result to Sanity
export default createSchema({
    name: 'default', // Schema name
    // Then concatenate the document type to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        works, education, brands, about, skills, workExperience, experiences, contact
    ])
})