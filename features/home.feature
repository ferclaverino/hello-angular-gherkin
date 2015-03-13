Feature: Home
    Como comprador
    Quiero buscar teléfonos

    Scenario: Titulo en la home
        Given Estoy en "phones"
        Then El título es "Google Phone Gallery"

    Scenario: Busqueda de xoom
        Given Estoy en "phones"
        When Yo busco "xoom"
        Then Veo "2" resultados