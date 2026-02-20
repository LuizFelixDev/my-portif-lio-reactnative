import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';

interface ProjectItemProps {
  name: string;
  url: string;
}

const ProjectItem = ({ name, url }: ProjectItemProps) => (
  <TouchableOpacity 
    activeOpacity={0.7}
    style={styles.projectItem} 
    onPress={() => Linking.openURL(url)}
  >
    <View>
      <Text style={styles.projectName}>{name}</Text>
      <Text style={styles.projectLinkText}>Ver Repositório →</Text>
    </View>
    <View style={styles.accentBar} />
  </TouchableOpacity>
);

export function ProjectContainer() {
  const MeusProjetos = [
    { id: '1', name: 'MagoImportsSystem', url: 'https://github.com/LuizFelixDev/MagoImportsSystem' },
    { id: '2', name: 'Magoimportsinterface', url: 'https://github.com/LuizFelixDev/Magoimportsinterface' },
    { id: '3', name: 'Podcast Filter API', url: 'https://github.com/LuizFelixDev/podcast-filter' },
    { id: '4', name: 'Projeto Venûs', url: 'https://github.com/LuizFelixDev/software-engineering-proj.git' },
  ];

  return (
    <View style={styles.projectContainer}>
      <Text style={styles.title}>Meus Projetos</Text>
      
      <ScrollView 
        style={styles.listContainer}
        showsVerticalScrollIndicator={false}
      >
        {MeusProjetos.map((item) => (
          <ProjectItem key={item.id} name={item.name} url={item.url} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  projectContainer: {
    marginTop: 30,
    paddingVertical: 20,
    backgroundColor: '#1e1e1f',
    width: 390,
    height: 400,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#333',
    alignItems: 'center',
  },
  title: {
    marginBottom: 20,
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 1
  },
  listContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  projectItem: {
    backgroundColor: '#2a2a2b',
    padding: 18,
    borderRadius: 15,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  accentBar: {
    width: 4,
    height: '100%',
    backgroundColor: '#00FFD1',
    borderRadius: 2,
  },
  projectName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4
  },
  projectLinkText: {
    color: '#00FFD1',
    fontSize: 13,
    opacity: 0.8
  },
});