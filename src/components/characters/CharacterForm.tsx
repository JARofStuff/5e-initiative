import { useForm, SubmitHandler, DeepPartial } from 'react-hook-form'
import { CharacterSchemaType } from '../../schema/characters'
import {
  AbilityScoreField,
  CheckboxInput,
  NumberInput,
  SelectInput,
  SkillField,
  TextInput,
} from '../FormInputs'

type TForm = CharacterSchemaType

type CharacterFormProps = {
  formData?: DeepPartial<TForm>
  onSubmit: SubmitHandler<TForm>
  loading?: boolean
}

const CharacterForm = ({ formData, onSubmit, loading }: CharacterFormProps) => {
  const { register, handleSubmit, watch } = useForm<TForm>({ defaultValues: formData })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput label='Name' field='name' register={register} />
      <TextInput label='Player Name' field='playerName' register={register} />
      <TextInput label='Avatar' field='avatar' register={register} />
      <SelectInput
        label='Character Type'
        field='type'
        options={[
          { value: 'pc', label: 'PC' },
          { value: 'npc', label: 'NPC' },
        ]}
        register={register}
      />
      <CheckboxInput label='Friendly?' field='isFriendly' register={register} />
      <CheckboxInput label='Dead?' field='isDead' register={register} />
      <TextInput label='Race' field='race' register={register} />
      <TextInput label='Class' field='characterClass' register={register} />
      <TextInput label='Sub Class' field='subclass' register={register} />

      <SelectInput
        label='Advancement Type'
        field='advancementType'
        options={[
          { value: 'xp', label: 'XP' },
          { value: 'milestone', label: 'Milestone' },
        ]}
        register={register}
      />
      <NumberInput label='Level' field='level' register={register} />
      <NumberInput label='XP' field='experiencePoints' register={register} />

      <TextInput label='Alignment' field='alignment' register={register} />
      <TextInput label='Creature Size' field='creatureSize' register={register} />
      <TextInput label='Species Type' field='creatureType' register={register} />
      <TextInput label='Challenge Rating' field='challengeRating' register={register} />
      <TextInput label='Source' field='source' register={register} />
      <NumberInput label='Max HP' field='hpMax' register={register} />
      <NumberInput label='AC' field='ac' register={register} />
      <NumberInput label='Spell Save DC' field='spellSave' register={register} />
      <TextInput label='Hit Dice' field='hitDice' register={register} />

      <NumberInput label='Walking Speed' field='speedWalking' register={register} />
      <NumberInput label='Flaying Speed' field='speedFlying' register={register} />
      <NumberInput label='Swimming Speed' field='speedSwimming' register={register} />
      <NumberInput label='Climbing Speed' field='speedClimbing' register={register} />
      <NumberInput label='Burrowing Speed' field='speedBurrowing' register={register} />
      <NumberInput label='Initiative Bonus' field='initiative' register={register} />
      <CheckboxInput label='Inspiration' field='inspiration' register={register} />
      <AbilityScoreField label='STR' field='str' register={register} />
      <AbilityScoreField label='DEX' field='dex' register={register} />
      <AbilityScoreField label='CON' field='con' register={register} />
      <AbilityScoreField label='INT' field='int' register={register} />
      <AbilityScoreField label='WIS' field='wis' register={register} />
      <AbilityScoreField label='CHA' field='cha' register={register} />
      <SkillField label='Acrobatics' field='skillAcrobaticsProficient' register={register} />
      <SkillField
        label='Animal Handling'
        field='skillAnimalHandlingProficient'
        register={register}
      />
      <SkillField label='Arcana' field='skillArcanaProficient' register={register} />
      <SkillField label='Athletics' field='skillAthleticsProficient' register={register} />
      <SkillField label='Deception' field='skillDeceptionProficient' register={register} />
      <SkillField label='History' field='skillHistoryProficient' register={register} />
      <SkillField label='Insight' field='skillInsightProficient' register={register} />
      <SkillField label='Intimidation' field='skillIntimidationProficient' register={register} />
      <SkillField label='Investigation' field='skillInvestigationProficient' register={register} />
      <SkillField label='Medicine' field='skillMedicineProficient' register={register} />
      <SkillField label='Nature' field='skillNatureProficient' register={register} />
      <SkillField label='Perception' field='skillPerceptionProficient' register={register} />
      <SkillField label='Performance' field='skillPerformanceProficient' register={register} />
      <SkillField label='Persuasion' field='skillPersuasionProficient' register={register} />
      <SkillField label='Religion' field='skillReligionProficient' register={register} />
      <SkillField label='Slight of Hand' field='skillSleightOfHandProficient' register={register} />
      <SkillField label='Stealth' field='skillStealthProficient' register={register} />
      <SkillField label='Survival' field='skillSurvivalProficient' register={register} />
      <button>Submit</button>
    </form>
  )
}

export default CharacterForm
