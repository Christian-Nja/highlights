from rdflib import Graph

g = Graph()
g.parse("test.n3", format='n3')

QUERY = """ 
            SELECT DISTINCT ?o ?t ?s
            WHERE {
                ?n rst:startOffset ?o .
                ?n rst:text ?t .
                ?n rst:score ?s .
            }
        """

def get_heat_color(value):
    aR, aG, aB = (0, 0, 255)
    bR, bG, bB = (255, 0, 0)
    red = ((bR - aR) * value) + aR
    green = ((bG - aG) * value) + aG
    blue = ((bB - aB) * value) + aB
    return (red, green, blue)

data = g.query(QUERY)

fltr = lambda t : int(t.o)
for row in sorted(data, key=fltr):
    print row.t, row.o, row.s, get_heat_color(float(row.s))

# http://andrewnoske.com/wiki/Code_-_heatmaps_and_color_gradients

