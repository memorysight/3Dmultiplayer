
export const CharacterController = ({
  state,
  joystick,
  userPlayer,
  ...props
})=>{

  const group = useRef();
  const character = useRef();
  const [animation, setAnimation]= useState('Idle');
  return (
    <group ref={group} {...props}>
      <group ref={Character}>
        <CharacterSoldier
        color={state.state.profile?.color}
        animation = {animation}
        />
      </group>
    </group>

  )
}