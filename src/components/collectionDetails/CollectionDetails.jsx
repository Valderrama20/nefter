import { BanerLayout } from '../banerLayout/BanerLayout'
import { ModelComments } from '../modelComments/ModelComments'
import { CardCollectionDetail } from './cardCollectionDetail/CardCollectionDetail'

export const CollectionDetails = () => {
  return (
    <>
      <BanerLayout title={'Detail Collections'} />
      <CardCollectionDetail />
      <ModelComments type={'collection'} />
    </>
  )
}
