# CheapForm

Welcome to CheapForm, a cost-effective alternative to Typeform that is currently offered for free. CheapForm is designed for users who prefer a direct and straightforward approach to form creation and customization. By editing a JSON file, users can effortlessly design forms that cater to their specific needs. CheapForm natively supports five types of input: `firstName`, `lastName`, `email`, `multiselect`, and `select`, with plans to introduce support for standard text input soon.

## Features

- **Cost-Effective**: CheapForm is a free tool, making it accessible to users with budget constraints.
- **Easy Customization**: Users can directly edit a JSON file to create and customize forms, allowing for quick and easy modifications.
- **Support for Multiple Input Types**: CheapForm currently supports five input types, ensuring flexibility in form design.

## Supported Input Types

1. **firstName**: Collects the user's first name.
2. **lastName**: Collects the user's last name.
3. **email**: Collects the user's email address.
4. **select**: Allows the user to choose one option from a list.
5. **multiselect**: Allows the user to choose multiple options from a list.

## Coming Soon

- **Standard Text Input**: We are working on introducing support for standard text input, which will allow users to collect open-ended responses from form respondents.

## How to Fill in the JSON

To create or customize a form in CheapForm, you will need to edit the JSON file directly. Here's a step-by-step guide to help you get started:

### Step 1: Define the Total Number of Questions

Start by specifying the total number of questions in your form using the `total_questions` key.

```json
{
	"total_questions": 5
}
```

### Step 2: List Your Questions

Under the `questions` key, list each question as a separate object within the array. For each question, you must specify the `question` text, `type` of input, and whether the question is `required`.

#### Example for `firstName`, `lastName`, and `email`:

```json
{
	"question": "First name",
	"type": "firstName",
	"required": true
}
```

#### Example for `select`:

```json
{
	"question": "What material is at the core of your wand?",
	"type": "select",
	"answers": {
		"A": "Phoenix Feather",
		"B": "Dragon Heartstring",
		"C": "Unicorn Hair"
	},
	"required": true
}
```

#### Example for `multiselect`:

```json
{
  "question": "Which of your skills are you most proud of?",
  "type": "multiselect",
  "answers": {
    "A": "Intelligence",
    ...
  },
  "required": true
}
```

### Step 3: Save Your JSON File

After adding all your questions, save your JSON file. The form defined in this file is now ready to be used with CheapForm.

## Conclusion

CheapForm offers a simple yet effective solution for creating customizable forms. By directly editing a JSON file, users can design forms that meet their specific requirements without the need for complex software. With support for various input types and more features on the way, CheapForm is a versatile tool for anyone looking to collect information efficiently and cost-effectively.

---

Run `yarn dev` to start development.
