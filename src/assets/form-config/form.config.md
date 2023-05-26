# ART Form configuration

This directory form.config.json has all the configuration for the form generation

-- Constraints
The title and the formSection field are not only used to display the data but they are also use as arial label for each option
Where the title is empty, the control is using the formSection as pre text to the element text
When the formSection is empty, the control is using the  title as pre text to the element text

For now the contract for these 2 field are, one should be empty