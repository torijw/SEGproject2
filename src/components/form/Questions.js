export const questions = [
  {
    section: 1,
    items: [
      {
        label: 'Is this a gift?',
        type: 'select',
        value: 'gift',
        options: ['Yes', 'No']
      },
      {
        label: 'If yes, who is it for?',
        type: 'text',
        value: 'recipient',
        placeholder: 'recipient, if applicable'
      },
      {
        label: 'Custom details',
        subtitle: 'Include specific details of what you\'d like us to include. You can add references and links as well',
        type: 'textarea',
        value: 'comments',
        placeholder: 'Enter comments'
      }
    ]
  },
  {
    section: 2,
    items: [
      {
        label: 'First Name',
        type: 'text',
        value: 'firstname',
        placeholder: 'firstname'
      },
      {
        label: 'Last Name',
        type: 'text',
        value: 'lastname',
        placeholder: 'lastname'
      },
      {
        label: 'Phone Number',
        type: 'text',
        value: 'phone',
        placeholder: '111-222-333'
      },
      {
        label: 'Email Address',
        type: 'text',
        value: 'email',
        placeholder: 'example@domain.com'
      },
      {
        label: 'Address',
        type: 'subtitle'
      },
      {
        label: 'Street Line',
        type: 'text',
        value: 'street',
        placeholder: 'street number & name'
      },
      {
        label: 'Unit Number, if applicable',
        type: 'text',
        value: 'unit',
        placeholder: 'unit'
      }, 
      {
        label: 'City/Town',
        type: 'text',
        value: 'city',
        placeholder: 'city/town'
      },
      {
        label: 'Postal Code',
        type: 'text',
        value: 'postcode',
        placeholder: 'postal code'
      },
      {
        label: 'Country',
        type: 'text',
        value: 'country',
        placeholder: 'country'
      }, 
      {
        label: 'Province/State',
        type: 'text',
        value: 'state',
        placeholder: 'province/state'
      }
    ]
  },
  {
    section: 3,
    items: [
      {
        label: 'Name',
        type: 'text',
        value: 'cardname',
        placeholder: 'Name of Cardholder'
      },
      {
        label: 'Card Number',
        type: 'text',
        value: 'cardnumber',
        placeholder: 'card number'
      }, 
      {
        label: 'Expiry Date',
        type: 'text',
        value: 'cardexpiry',
        placeholder: 'mm/yy'
      },
      {
        label: 'Security Code',
        type: 'text',
        value: 'cardcode',
        placeholder: '123'
      }
    ]
  }
]