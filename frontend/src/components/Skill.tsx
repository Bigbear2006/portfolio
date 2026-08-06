import { Icon } from '#/components/Icon.tsx'

interface SkillProps {
  name: string
  iconName?: string
}

export function Skill(props: SkillProps) {
  return (
    <div className="flex gap-1 items-center bg-[var(--bg)] p-2 rounded-lg w-max">
      <Icon name={props.iconName || props.name.toLowerCase()} />
      {props.name}
    </div>
  )
}
