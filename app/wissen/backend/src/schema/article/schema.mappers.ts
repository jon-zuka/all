import {selectArticlesByIdAndAuthorId} from '@/db/queries/select'

export type ArticleMapper = Awaited<ReturnType<typeof selectArticlesByIdAndAuthorId>>