
import csv
import psycopg2
def toDatabase():
    conn = psycopg2.connect("postgres://hmkcgtemqpmblb:e7273a5da316991a0cd5721df6c585f78b1d72cc5d6201e3b4971c8741f9febb@ec2-54-228-218-84.eu-west-1.compute.amazonaws.com:5432/d9t8su3m5vf5rp")
    cur = conn.cursor()
    print(conn)
    with open('questions.csv', 'r') as f:
        reader = csv.reader(f,delimiter='|')
        cur.execute('DELETE FROM questions')
        for row in reader:
            cur.execute("INSERT INTO questions (id, thematic_element, sub_element, statement, explanation) VALUES (%s, %s, %s, %s, %s)", row)
    conn.commit()
    cur.close()
    conn.close()    
toDatabase()
