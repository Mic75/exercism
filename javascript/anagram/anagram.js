export class Anagram {
    constructor(input){
        this.subject = input.toLowerCase();
        this.subjectChars = [...this.subject];
    }

    matches(candidates){
        return candidates.reduce((anagrams, candidate) => {
            if (this._isAnagram(candidate)) {
                anagrams.push(candidate);
            }
            return anagrams;
        }, [])
    }

    _isAnagram(candidate) {
        candidate = candidate.toLowerCase();
        const candidateChars = [...candidate];
        const remainingChars = this.subjectChars.slice();

        if (candidate === this.subject)
            return false;

        for (const currentChar of candidateChars){
            const indexInSubject = remainingChars.indexOf(currentChar);
            if (indexInSubject === -1)
                return false;

            remainingChars.splice(indexInSubject, 1);
        }

        return candidateChars.length === this.subjectChars.length && remainingChars.length === 0;
    }
}
