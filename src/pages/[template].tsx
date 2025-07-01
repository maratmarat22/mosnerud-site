import { useRouter } from 'next/router'
import findObjectById from '../lib/objects'

export default function TemplatePage() {
  const router = useRouter()
  const { template } = router.query as { template?: string }

  const object = findObjectById(template)
  if (object) {
    return <h1>Вы открыли шаблон: {object.value}</h1>
  } else {
    return <h1>NOT FOUND</h1>
  }
}
