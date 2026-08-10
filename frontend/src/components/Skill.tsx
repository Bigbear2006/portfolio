import { Icon } from '#/components/Icon.tsx'

interface SkillProps {
  name: string
  iconName?: string
}

export function Skill(props: SkillProps) {
  return (
    <div className="flex gap-1 items-center bg-card/5 border-2 border-border/50 px-4 py-2 rounded-xl w-max backdrop-blur-lg hover:ring-4 ring-primary/15 transition">
      <Icon name={props.iconName || props.name.toLowerCase()} />
      {props.name}
    </div>
  )
}
