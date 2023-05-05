import { Query, QueryModel } from '../domains/QueryModel'

export class QueryDAO {
    async save(query: Query) {
        const savedQuery = await QueryModel.create(query)
        return savedQuery
    }
    async findByQuery(queryString: string) {
        const queryObject = await QueryModel.find<Query>({ query: queryString });
        return queryObject.at(0);
    }

    async findByTipocep(tipoCep: string) {
        const queryObject = await QueryModel.find<Query>({
            tipoCep: {
                $regex: tipoCep,
                $options: 'i'
            }
        });

        return queryObject.at(0);
    }

    // apenas coisas para inspiração
    //   async findByName(name: string) {
    //     const contacts = await ContactModel.find<Contact>({
    //       name: {
    //         $regex: name,
    //         $options: 'i',
    //       },
    //     })

    //     return contacts
    //   }

    //   async findByBirthdayPeriod(start: Date, end: Date) {
    //     const contacts = await ContactModel.find<Contact>({
    //       birthday: {
    //         $gte: start,
    //         $lte: end,
    //       },
    //     })

    //     return contacts
    //   }
}