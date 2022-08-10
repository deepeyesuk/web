import React, { ReactElement } from 'react'
import {
  AnnotationIcon,
  ChatAlt2Icon,
  ChatAltIcon,
  DocumentReportIcon,
  HeartIcon,
  InboxIcon,
  MenuIcon,
  PencilAltIcon,
  PuzzleIcon,
  SparklesIcon,
  ScaleIcon,
  PhoneIncomingIcon,
  CloudIcon,
  SupportIcon,
  QuestionMarkCircleIcon,
  ReplyIcon,
  TrashIcon,
  UserCircleIcon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon, 
  ChevronRightIcon 
} from '@heroicons/react/solid'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faFacebookSquare, 
  faLinkedin, 
  faTwitterSquare
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { SizeProp } from '@fortawesome/fontawesome-svg-core'

const icons: {[key: string]: any} = {
  // hero
  "AnnotationIcon": AnnotationIcon,
  "ChatAlt2Icon": ChatAlt2Icon,
  "ChatAltIcon": ChatAltIcon,
  "DocumentReportIcon": DocumentReportIcon,
  "HeartIcon": HeartIcon,
  "InboxIcon": InboxIcon,
  "MenuIcon": MenuIcon,
  "PencilAltIcon": PencilAltIcon,
  "PuzzleIcon": PuzzleIcon,
  "SparklesIcon": SparklesIcon,
  "ScaleIcon": ScaleIcon,
  "PhoneIncomingIcon": PhoneIncomingIcon,
  "CloudIcon": CloudIcon,
  "SupportIcon": SupportIcon,
  "QuestionMarkCircleIcon": QuestionMarkCircleIcon,
  "ReplyIcon": ReplyIcon,
  "TrashIcon": TrashIcon,
  "UserCircleIcon": UserCircleIcon,
  "UsersIcon": UsersIcon,
  "XIcon": XIcon,
  "ChevronDownIcon": ChevronDownIcon,
  "ChevronRightIcon": ChevronRightIcon,
  
  // fontawesome
  "faFacebookSquare": faFacebookSquare,
  "faLinkedin": faLinkedin,
  "faTwitterSquare": faTwitterSquare,
  "faEnvelope": faEnvelope
}

const getIcon = (icon: string): ReactElement => {
  const iconElement = icons[icon] ? icons[icon] : HeartIcon
  return React.createElement(iconElement , {
    className: "h-6 w-6",
    "aria-hidden": true
  })
}

const getInteractIcon = (icon: string, isEnabled: boolean, style: string = "h-6 w-6"): React.CElement<any, any> => {
  const iconElement = icons[icon] ? icons[icon] : HeartIcon
  return React.createElement(iconElement , {
    className: style,
    "aria-hidden": isEnabled
  })
}

const getFAIcon = (icon: string, size: SizeProp, style: string): ReactElement => {
  return <FontAwesomeIcon icon={icons[icon]} className={style} size={size} />
}

export { 
  getIcon,
  getInteractIcon,
  getFAIcon,
}