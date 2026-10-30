import { Icon } from '#/components/Icon.tsx'

interface SkillProps {
  name: string
  iconName?: string
}

const iconOverrides: Record<string, string> = {
  HTML: 'html5',
  CSS: 'css3',
  SCSS: 'sass',
  Tailwind: 'tailwindcss',
  'Next.js': 'nextjs2',
  'TanStack Start': 'tanstack',
}

export function Skill(props: SkillProps) {
  return (
    <div className="flex gap-1 items-center border-2 border-border px-4 py-2 rounded-xl w-max hover:bg-card transition-colors">
      <Icon
        name={
          props.iconName ||
          iconOverrides[props.name] ||
          props.name.toLowerCase()
        }
      />
      <h4>{props.name}</h4>
    </div>
  )
}
