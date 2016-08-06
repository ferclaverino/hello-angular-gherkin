Feature: Home
    As buyer
    Want to look for phones

    Scenario: Home access
        Given I go to "phones"
        Then title should be "Google Phone Gallery"

    Scenario: Search a phone
        Given I go to "phones"
        When I search "xoom"
        Then results should be "2"
