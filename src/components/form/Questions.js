export const questions = [
  {
    section: 1,
    items: [
      {
        label: 'Is this a gift?',
        type: 'select',
        value: 'gift',
        options: ['Yes', 'No'],
        required: false
      },
      {
        label: 'If yes, who is it for?',
        type: 'text',
        value: 'recipient',
        placeholder: 'recipient, if applicable',
        required: false
      },
      {
        label: 'Custom details',
        subtitle: 'Include specific details of what you\'d like us to include. You can add references and links as well',
        type: 'textarea',
        value: 'comments',
        placeholder: 'Enter comments',
        required: true
      },{
        label: '',
        type: 'space'
      },
      {
        label: 'Upload file',
        type: 'file'
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
        placeholder: 'firstname',
        required: true
      },
      {
        label: 'Last Name',
        type: 'text',
        value: 'lastname',
        placeholder: 'lastname',
        required: true
      },
      {
        label: 'Phone Number',
        type: 'tel',
        value: 'phone',
        placeholder: '111-222-333',
        required: true
      },
      {
        label: 'Email Address',
        type: 'email',
        value: 'email',
        placeholder: 'example@domain.com',
        required: true
      },
      {
        label: 'Address',
        type: 'subtitle'
      },
      {
        label: 'Street Line',
        type: 'text',
        value: 'street',
        placeholder: 'street number & name',
        required: true
      },
      {
        label: 'Unit Number, if applicable',
        type: 'text',
        value: 'unit',
        placeholder: 'unit',
        required: false
      }, 
      {
        label: 'City/Town',
        type: 'text',
        value: 'city',
        placeholder: 'city/town',
        required: true
      },
      {
        label: 'Postal Code',
        type: 'text',
        value: 'postcode',
        placeholder: 'postal code',
        required: true
      },
      {
        label: 'Country',
        type: 'text',
        value: 'country',
        placeholder: 'country',
        required: true
      }, 
      {
        label: 'Province/State',
        type: 'text',
        value: 'state',
        placeholder: 'province/state',
        required: true
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
        placeholder: 'Name of Cardholder',
        required: true
      },
      {
        label: 'Card Number',
        type: 'number',
        value: 'cardnumber',
        placeholder: 'card number',
        required: true
      }, 
      {
        label: 'Expiry Date',
        type: 'month-year',
        value: 'cardexpiry',
        placeholder: 'mm/yy',
        required: true
      },
      {
        label: 'Security Code',
        type: 'text',
        value: 'cardcode',
        placeholder: '123',
        required: true,
        pattern: '[0-9]{3}',
        example: '123'
      }
    ]
  }
]